"use client";
import { getApiCall, patchApiCall } from "@/api/fatchData";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

function safeBox(event) {
  event.stopPropagation();
}

export default function CommentBox({
  closeCommentBox,
  allComments,
  postid,
  postOwnerName,
}) {
  const [comment, setComment] = useState({
    commentText: "",
  });

  const [commentData, setCommentData] = useState([]);

  const handleInputChange = (event) => {
    setComment({
      ...comment,
      commentText: event.target.value,
    });
  };

  const fetchCommenterInfo = async () => {
    const promises = allComments.map(async (comment) => {
      const url = `user/${comment.likeduserid}`;
      const response = await getApiCall(url);
      return {
        ...comment,
        key: Math.random().toString(36).substr(2, 9),
        commenterInfo: response.data,
      };
    });

    const commentDataWithUserInfo = await Promise.all(promises);
    setCommentData(commentDataWithUserInfo);
  };

  useEffect(() => {
    fetchCommenterInfo();
  }, []);

  const handleSubmit = async () => {
    const data = await patchApiCall(`post/comment/submit/${postid}`, comment);
    if (data?.data) {
      setCommentData([
        ...commentData,
        {
          key: Math.random().toString(36).substr(2, 9),
          commenterInfo: response.data,
          commenttexttext: comment?.commentText,
        },
      ]);

      setComment({
        commentText: "",
      });
    }
  };

  console.log(commentData);

  return (
    <div className="backdrop-blur-xl bg-black/50 fixed top-0 z-10 lg:w-[700px] overflow-hodden w-full h-screen">
      <div className="scroll h-full overflow-y-auto">
        <div>
          <div className=" bg-black p-4 fixed top-0 w-full">
            <div onClick={safeBox} className="flex">
              <div className="w-1/5" onClick={closeCommentBox}>
                <HiArrowNarrowLeft className="text-white text-2xl" />
              </div>
              <div className="w-5/5">
                <h1 className="text-white">
                  {postOwnerName}'s post. Total comments ({commentData.length})
                </h1>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div>
              {commentData.length === 0 ? (
                <h1 className="text-slate-500 text-center font-bold p-2 py-20">
                  No comment yet!
                </h1>
              ) : (
                commentData.map((commentItem) => (
                  <div
                    key={commentItem.key}
                    className="p-2 hover:bg-slate-900 my-4"
                  >
                    <div className="shadow-xl rounded-xl  flex items-center">
                      <div className="w-1/12">
                        <img
                          className="w-7 h-7 rounded-full"
                          src={
                            commentItem.commenterInfo?.profilePicture
                              ? commentItem.commenterInfo?.profilePicture
                              : "default.jpeg"
                          }
                          alt="Profile"
                        />
                      </div>
                      <div className="w-11/12">
                        <div className="flex items-center">
                          <h4 className="text-white">
                            {commentItem.commenterInfo?.fullname}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <h6 className="text-slate-400">
                        {commentItem.commenttexttext}
                      </h6>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex fixed bottom-0 w-full items-center">
            <input
              className="w-4/6 block bg-black p-2 px-4 text-lg rounded-lg text-white"
              type="text"
              placeholder="Write your comment...."
              value={comment.commentText}
              onChange={handleInputChange}
            />
            <button
              className="w-2/6 block bg-slate-700 p-2 px-4 text-lg rounded-lg text-white"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
