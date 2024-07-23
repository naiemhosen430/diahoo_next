"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { getApiCall } from "@/api/fatchData";
import { AuthContex } from "./AuthContex";
import connectIo from "@/api/connectIo";

export const NtfContext = createContext();

const ntfReducer = (ntfstate, action) => {
  switch (action.type) {
    case "ALL_ntf":
      return { ntf: action.payload };
    case "ADD_NTF":
      return {
        ntf: ntfstate?.ntf
          ? [...ntfstate?.ntf, action.payload]
          : [action.payload],
      };

    default:
      return ntfstate;
  }
};

export default function NtfContextProvider({ children }) {
  const { state } = useContext(AuthContex);
  const user = state?.user;
  const id = user?._id;
  const [ntfstate, ntfdispatch] = useReducer(ntfReducer, {
    ntf: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiCall(`ntf`);
        const responseData = response?.data;

        if (responseData) {
          ntfdispatch({ type: "ALL_ntf", payload: responseData });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [user]);

  connectIo().on(`ntf-${id}`, (ntfData) => {
    if (ntfData?.status == 200) {
      ntfdispatch({
        type: "ADD_NTF",
        payload: ntfData?.data,
      });
    }
  });

  return (
    <NtfContext.Provider value={{ ntfstate, ntfdispatch }}>
      {children}
    </NtfContext.Provider>
  );
}
