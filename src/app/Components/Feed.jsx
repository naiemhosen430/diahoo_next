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

  console.log({ posts });

  return (
    <div className="mx-2 bg-slate-950">
      {posts?.length === 0 ? (
        <h1 className="text-center text-white py-5 text-2xl">
          Wait it's loading ....
        </h1>
      ) : (
        posts?.map((postItem) => <Post key={postItem._id} post={postItem} />)
      )}
    </div>
  );
}
