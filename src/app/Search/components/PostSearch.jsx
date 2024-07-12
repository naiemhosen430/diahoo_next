import Post from "@/app/Components/CommonComponents/Post/Post";
import React, { useEffect, useState } from "react";

export default function PostSearch({ searchPostr }) {
  const [searchPost, setSearchPost] = useState([]);
  useEffect(() => {
    setSearchPost(searchPostr);
  }, [searchPostr]);

  return (
    <>
      <div className="p-4">
        {searchPost.length === 0 ? (
          <h1 className="text-slate-600 px-4 py-20">No post found.</h1>
        ) : (
          searchPost.map((postItem) => (
            <Post key={postItem._id} post={postItem} />
          ))
        )}
      </div>
    </>
  );
}
