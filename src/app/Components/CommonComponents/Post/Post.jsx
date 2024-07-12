"use client";
import React, { useEffect, useState } from "react";
import PostHeader from "./Components/PostHeader";
import PostFooter from "./Components/PostFooter";
import { getApiCall } from "@/api/fatchData";

const Post = ({ post }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fatchData = async () => {
      try {
        const data = await getApiCall(`user/${post.postownerid}`);
        setUser(data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fatchData();
  }, [post.postownerid]);

  if (!user) {
    return <h1 className="text-center p-5 text-white">Leading....</h1>;
  }

  return (
    <div className="post">
      <PostHeader
        postOwnerName={user?.fullname}
        postOwnerid={user?.id}
        postOwnerPicture={user?.profilephoto}
        postedtime={post?.createdAt}
      />

      {post.postcontent && (
        <p className="text-white text-sm p-4">{post.postcontent}</p>
      )}

      {post.video &&
        post?.video?.map((vdo) => (
          <div
            key={vdo}
            className="text-white lg:h-[400px] h-[200px] text-sm p-4"
            dangerouslySetInnerHTML={{ __html: vdo }}
          />
        ))}

      {post.picture &&
        post?.video?.map((pic) => (
          <div key={pic} className="text-white text-sm p-4">
            <img
              className="max-h-[500px] w-full block"
              src={pic}
              alt="pic not available"
            />
          </div>
        ))}

      <PostFooter
        postOwnerName={user?.fullname}
        likes={post?.like}
        comments={post?.comment}
        postid={post?._id}
      />
    </div>
  );
};

export default Post;
