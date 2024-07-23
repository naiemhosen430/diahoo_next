"use client";
import { AiFillEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { getApiCall, patchApiCall, postApiCall } from "@/api/fatchData";

import MyInfoBody from "./MyInfoBody";
import Post from "@/app/Components/CommonComponents/Post/Post";
import { AuthContex } from "@/Contexts/AuthContex";
import { StateContext } from "@/Contexts/StateContext";

export default function ProfileBody() {
  const [postShow, setPostShow] = useState(true);
  const [myInfShow, setMyInfoShow] = useState(false);
  const { toggleCreatePostBox, toggleMyNodeBox } = useContext(StateContext);
  const [myPost, setMypost] = useState(null);
  const { state } = useContext(AuthContex);
  const user = state?.user;

  // hu8ndle onclick
  const showMyInfoBox = () => {
    setMyInfoShow(true);
    setPostShow(false);
  };
  const showMyPostBox = () => {
    setPostShow(true);
    setMyInfoShow(false);
  };

  useEffect(() => {
    const fatchData = async () => {
      const data = await getApiCall(`post/user/${user._id}`);
      if (data?.data) {
        setMypost(data.data);
      }
    };

    if (user._id) {
      fatchData();
    }
  }, [user]);

  return (
    <>
      <div className="flex lg:p-4 p-2 lg:space-x-2 space-x-1">
        <button
          className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-[10px] lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
          type="button"
          onClick={toggleCreatePostBox}
        >
          <IoMdAdd />
          <span>Post</span>
        </button>
        <button
          className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-[10px] lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
          type="button"
        >
          <AiFillEdit /> <span>Edit Profile</span>
        </button>
        <button
          className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-[10px] lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
          type="button"
          onClick={toggleMyNodeBox}
        >
          <GiNotebook />
          <span>Notes</span>
        </button>
      </div>
      <div className="flex space-x-2">
        <button
          className="w-2/6 text-white py-1 text-sm px-4 rounded-md shadow-md"
          type="button"
          onClick={showMyPostBox}
        >
          <span>Post</span>
        </button>
        <button
          className="w-2/6 text-white py-1 text-sm px-4 rounded-md shadow-md"
          type="button"
        >
          <span>Video</span>
        </button>
        <button
          className="w-2/6 text-white py-1 text-sm px-4 rounded-md shadow-md"
          type="button"
          onClick={showMyInfoBox}
        >
          <span>My Info</span>
        </button>
      </div>
      {myInfShow && <MyInfoBody userData={user} />}
      {postShow && myPost?.length === 0 ? (
        <h1 className="text-center text-slate-500 py-20 px-4 text-lg">
          There is no post
        </h1>
      ) : (
        myPost?.map((postItem) => <Post key={postItem._id} post={postItem} />)
      )}
    </>
  );
}
