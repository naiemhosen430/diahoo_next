import Post from "@/app/Components/CommonComponents/Post/Post";
import React, { useEffect, useState } from "react";
import PostLoader from "./../../../Components/Loaders/PostLoader";

export default function PostSearch({ searchPostr }) {
  return (
    <>
      <div className="p-4">
        {!searchPostr ? (
          <>
            <PostLoader />;
            <PostLoader />;
            <PostLoader />;
            <PostLoader />;
            <PostLoader />;
          </>
        ) : searchPostr.length === 0 ? (
          <h1 className="text-slate-600 px-4 py-20">No post found.</h1>
        ) : (
          searchPostr.map((postItem) => (
            <Post key={postItem._id} post={postItem} />
          ))
        )}
      </div>
    </>
  );
}
