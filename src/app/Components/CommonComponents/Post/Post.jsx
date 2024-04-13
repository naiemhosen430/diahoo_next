// Components/CommonComponents/Post/Post.js

import React, { useEffect, useState } from "react";
import PostHeader from "./Components/PostHeader";
import PostFooter from "./Components/PostFooter";

const Post = ({ post }) => {
  const [user, setUser] = useState({
    profilephoto: "",
    fullname: "",
    id: "",
  });

  useEffect(() => {
    const fatchData = async () => {
      try {
        const data = await GetPublicProfile(post.postownerid);
        setUser({
          profilephoto: data.profilephoto,
          fullname: data.fullname,
          id: data._id,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fatchData();
  }, [post.postownerid]);

  return (
    <div className="post">
      <PostHeader
        postOwnerName={user.fullname}
        postOwnerid={user.id}
        postOwnerPicture={user.profilephoto}
        postedtime={post.createdAt}
      />
      <p className="text-white text-sm p-4">{post.postcontent}</p>
      <PostFooter
        postOwnerName={user.fullname}
        likes={post.like}
        comments={post.comment}
        postid={post._id}
      />
    </div>
  );
};

export default Post;