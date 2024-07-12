import React, { useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSolidComment } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import CommentBox from "./CommentBox";
import { AuthContex } from "@/Contexts/AuthContex";
import { patchApiCall } from "@/api/fatchData";

export default function PostFooter({
  likes,
  comments,
  postid,
  postOwnerid,
  postOwnerName,
}) {
  const [commentbox, setCommentbox] = useState(false);
  const [likeState, setLikeState] = useState(false);
  const { state } = useContext(AuthContex);
  const user = state?.user;
  const myid = user?._id;
  const [likeConter, setLikeConter] = useState(likes.length);

  useEffect(() => {
    const alreadyLiked = likes.find((like) => like.likeduserid === myid);

    if (alreadyLiked) {
      setLikeState(false);
    } else {
      setLikeState(true);
    }
  }, [likes, comments]);

  //hundle onclick
  const showcommentbox = () => {
    setCommentbox(true);
  };
  const closeCommentBox = () => {
    setCommentbox(false);
  };

  // like post
  const likepost = async () => {
    const data = await patchApiCall(`post/like/${postid}`);
    if (data?.data) {
      setLikeConter(likes.length + 1);
      setLikeState(false);
    }
  };

  // dislike post
  const dislikepost = async () => {
    const data = await patchApiCall(`post/dislike/${postid}`);
    if (data?.data) {
      if (likes.length === 0) {
        setLikeConter((likes.length = 0));
      } else {
        setLikeConter(likes.length - 1);
      }
      setLikeState(true);
    }
  };

  return (
    <>
      {commentbox && (
        <CommentBox
          closeCommentBox={closeCommentBox}
          postOwnerName={postOwnerName}
          postid={postid}
          allComments={comments}
        />
      )}
      <div className="p-4 flex text-fuchsia-50 text-center">
        <div className="w-1/3 text-center px-4 flex items-center rounded-xl m-2 justify-center">
          <h1 className="text-md text-center text-white">{likeConter}</h1>
          {likeState ? (
            <AiOutlineHeart
              className="text-4xl p-2 cursor-pointer"
              onClick={likepost}
            />
          ) : (
            <AiFillHeart
              className="text-4xl p-2 cursor-pointer"
              onClick={dislikepost}
            />
          )}
        </div>
        <div className="w-1/3 text-center px-4 flex items-center rounded-xl m-2 justify-center">
          <h1 className="text-md text-center text-white">{comments?.length}</h1>
          <BiSolidComment
            className="text-4xl p-2 cursor-pointer"
            onClick={showcommentbox}
          />
        </div>
        <div className="w-1/3 text-center px-4 flex items-center rounded-xl m-2 justify-center">
          <h1 className="text-md text-center text-white">0</h1>
          <PiShareFatFill className="text-4xl p-2 cursor-pointer" />
        </div>
      </div>
    </>
  );
}
