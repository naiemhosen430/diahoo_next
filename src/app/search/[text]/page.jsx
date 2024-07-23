"use client";
import React, { useEffect, useState } from "react";
import PostSearch from "./components/PostSearch";
import SearchPeople from "./components/SearchPeople";
import { useParams } from "next/navigation";
import { getApiCall } from "@/api/fatchData";

export default function Search() {
  const [searchData, setSearchData] = useState({
    post: null,
    people: null,
    video: null,
  });
  const { text } = useParams();
  console.log({text})
  useEffect(() => {
    if (text !== "") {
      const fatchData = async () => {
        const data = await getApiCall(`search/${text}`);
        console.log(data?.data)
        setSearchData({
          post: data?.data?.posts,
          people: data?.data?.users,
        });
      };
      fatchData();
    }
  }, [text]);
  return (
    <>
      <div className="col-span-3 bg-slate-950 mx-2">
        <h1 className="text-white px-4 py-5">you have searching for ${text}</h1>
        <SearchPeople searchPeople={searchData.people} />
        <PostSearch searchPostr={searchData.post} />
      </div>
    </>
  );
}
