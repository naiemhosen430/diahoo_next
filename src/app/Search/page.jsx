"use client";
import React, { useEffect, useState } from "react";
import PostSearch from "./components/PostSearch";
import SearchPeople from "./components/SearchPeople";
import { useParams } from "react-router-dom";
import api from "../../api/api";

export default function Search() {
  const [searchData, setSearchData] = useState({
    post: [],
    people: [],
    video: [],
  });
  const { text } = useParams();
  useEffect(() => {
    if (text !== "") {
      const fatchData = async () => {
        const data = await api.get(`/api/v1/search/${text}`);
        setSearchData({
          post: data.data.data.posts,
          people: data.data.data.users,
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
