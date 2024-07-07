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
    const token = "";
    const data = decodeToken(token);

    const promises = allComments.map(async (comment) => {
      const url = `/api/v1/user/${comment[0].commenterid}`;
      const response = await api.get(url);
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
    const token = "";
    const data = decodeToken(token);

    await api
      .post(`/api/v1/post/comment/submit/${data.userId}/${postid}`, comment)
      .then((response) => {
        if (response) {
        }
      })
      .catch((error) => {
        if (error) {
          console.error(error);
        }
      });

    // Clear the input field after submission
    setComment({
      commentText: "",
    });
  };

  return (
    <div
      className="backdrop-blur-xl bg-b fixed top-0 z-20 w-2/5 h-screen"
      onClick={closeCommentBox}
    >
      <div className="scroll h-full overflow-y-auto">
        <div className="p-4" onClick={safeBox}>
          <div className=" bg-black p-2 fixed top-0 w-full">
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

          <div>
            <div>
              {commentData.length === 0 ? (
                <h1 className="text-slate-500 text-center font-bold p-2 py-20">
                  No comment yet!
                </h1>
              ) : (
                commentData.map((commentItem) => (
                  <div
                    key={commentItem.key}
                    className="p-2 my-4 shadow-xl rounded-xl hover:bg-slate-700 flex items-center"
                  >
                    <div className="w-1/6">
                      <img
                        src={commentItem.commenterInfo.data.profilePicture}
                        alt="Profile"
                      />
                    </div>
                    <div className="w-5/6">
                      <div className="flex items-center">
                        <h4 className="text-white">
                          {commentItem.commenterInfo.data.fullname}
                        </h4>
                      </div>
                      <div className="flex items-center">
                        <h6 className="text-slate-400">
                          {commentItem[0].commenttext}
                        </h6>
                      </div>
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
