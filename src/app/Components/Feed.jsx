"use client";
import React, { useContext, useEffect } from "react";
import { PostsContex } from "@/Contexts/PostContext";
import Post from "./CommonComponents/Post/Post";
import UsePostContext from "@/Hooks/UsePostContext";

export default function Feed() {
  const { state } = useContext(PostsContex);
  const {
    setLoading,
    loading,
    setMessage,
    message,
    getPost,
  } = UsePostContext();
  const posts = state.posts;

  useEffect(() => {
    getPost();
  }, []);

  

  return (
<div className="mx-2 bg-slate-950">
  {posts?.length === 0 ? (
    <h1 className="text-center text-white py-5 text-2xl">
      Wait it's loading ....
    </h1>
  ) : (
    posts?.map((postItem) => <Post key={postItem._id} post={postItem} />)
  )}

  <h1 
    onClick={getPost} 
    className="text-white cursor-pointer text-center bg-red-500 text-xl font-bold py-2"
  >
    Load more posts
  </h1>
</div>

  );
}
