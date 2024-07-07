import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSolidComment } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import CommentBox from "./CommentBox";

export default function PostFooter({
  likes,
  comments,
  postid,
  postOwnerid,
  postOwnerName,
}) {
  const [commentbox, setCommentbox] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);
  const [likeConter, setLikeConter] = useState(likes.length);
  const [postFooter, setpostFooter] = useState({
    likes: [],
    comments: [],
  });
  useEffect(() => {
    setpostFooter({
      likes: likes,
      comments: comments,
    });
  }, [likes, comments]);

  useEffect(() => {
    const token = "";
    const data = decodeToken(token);
    let alreadyLiked = null;
    for (const nestedArray of postFooter.likes) {
      alreadyLiked = nestedArray.find(
        (like) => like.likeduserid === data.userId
      );
      if (alreadyLiked) {
        break;
      }
    }
    if (alreadyLiked) {
      setDisLike(true);
      setLike(false);
    } else {
      setDisLike(false);
      setLike(true);
    }

    setpostFooter({
      likes: likes,
      comments: comments,
    });
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
    const token = ""
    const data = decodeToken(token);

    await api
      .post(`/api/v1/post/like/${data.userId}/${postid}/${postOwnerid}`)
      .then((response) => {
        if (response) {
          setLikeConter(likes.length + 1);
          setDisLike(true);
          setLike(false);
        }
      })
      .catch((error) => {
        if (error) {
          console.error(error);
        }
      });
  };

  // dislike post
  const dislikepost = async () => {
    const token = ""
    const data = decodeToken(token);

    await api
      .post(`/api/v1/post/dislike/${data.userId}/${postid}/${postOwnerid}`)
      .then((response) => {
        if (response) {
          if (likes.length === 0) {
            setLikeConter((likes.length = 0));
          } else {
            setLikeConter(likes.length - 1);
          }
          setDisLike(false);
          setLike(true);
        }
      })
      .catch((error) => {
        if (error) {
          console.error(error);
        }
      });
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
        <div className="w-1/3 text-center px-4">
          <h1 className="text-md text-center text-white">{likeConter}</h1>
          {like && (
            <AiOutlineHeart
              className="block w-full text-4xl p-2 my-2 bg-slate-800 opacity-60 hover:opacity-100 rounded-xl cursor-pointer"
              onClick={likepost}
            />
          )}
          {dislike && (
            <AiFillHeart
              className="block w-full text-4xl p-2 my-2 bg-slate-800 opacity-60 hover:opacity-100 rounded-xl cursor-pointer"
              onClick={dislikepost}
            />
          )}
        </div>
        <div className="w-1/3 text-center px-4">
          <h1 className="text-md text-center text-white">
            {postFooter.comments.length}
          </h1>
          <BiSolidComment
            className="block w-full text-4xl p-2 my-2 bg-slate-800 opacity-60 hover:opacity-100 rounded-xl cursor-pointer"
            onClick={showcommentbox}
          />
        </div>
        <div className="w-1/3 text-center px-4">
          <h1 className="text-md text-center text-white">0</h1>
          <PiShareFatFill className="block w-full text-4xl p-2 my-2 bg-slate-800 opacity-60 hover:opacity-100 rounded-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
}
