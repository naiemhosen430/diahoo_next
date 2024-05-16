'use client'
import React, { useEffect, useState } from "react";
import Post from "./CommonComponents/Post/Post";


export default function Feed() {
  const [post, setPost] = useState([]);



  return (
    <div className="mx-2 bg-slate-950">
      {post.length === 0 ?
      <h1 className="text-center text-white py-5 text-2xl">Wait it's loading ....</h1> :
      post.map((postItem) => (
        <Post key={postItem._id} post={postItem} />
      ))}
    </div>
  );
}