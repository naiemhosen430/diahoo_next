"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import UseAuthContext from "./UseAuthContext";
import { useRouter } from "next/navigation";

export default function UseLogout() {
  const router = useRouter();
  const { dispatch } = UseAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const logout = async (name, email, password) => {
    setError(null);
    setLoading(true);

    // if need to call api in backend
    // const response = await axios.get(`/api/user/logout`);

    // if (response?.data?.statusCode !== 200) {
    //   setLoading(false);
    //   setError(response?.error);
    // }

    // if (response?.data.statusCode === 200) {
    //   setCookie("user", null);

    //   dispatch({ type: "LOGOUT", payload: null });

    //   setLoading(false);
    // }

    setCookie("user", null);

    dispatch({ type: "LOGOUT", payload: null });

    router.push("/login", { scroll: true });

    setLoading(false);

  };

  return { logout, loading, error };
}
