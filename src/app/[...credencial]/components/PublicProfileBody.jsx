"use client";
import { AiFillEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import PublicProfileInfo from "./PublicProfileInfo";
import { AuthContex } from "@/Contexts/AuthContex";
import { getApiCall, patchApiCall } from "@/api/fatchData";
import Post from "@/app/Components/CommonComponents/Post/Post";

export default function PublicProfileBody({ profileInfo }) {
  const [postShow, setPostShow] = useState(true);
  const [myInfShow, setMyInfoShow] = useState(false);
  const [myPost, setMypost] = useState([]);
  const [friend, setFriend] = useState([]);
  const [friendonme, setFriendonme] = useState([]);
  const [checkOnmyFriendList, setCheckOnmyFriendList] = useState([]);
  const { state } = useContext(AuthContex);
  const user = state?.user;

  //button state herew
  const [addFriend, setAddFriend] = useState(false);
  const [message, setmessage] = useState(false);
  const [cencelreq, setcencelreq] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [confirmReq, setConfirmReq] = useState(false);
  const [deleteReq, setDeleteReq] = useState(false);
  const [myFriend, setMyFriend] = useState(false);
  const [unFriend, setUnFriend] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);

  const closeChat = () => {
    setChatVisible(false);
  };
  const openChatBox = () => {
    setChatVisible(true);
  };

  useEffect(() => {
    let foundOnMyself = false;
    user?.friendrequests?.forEach((id) => {
      if (id === profileInfo._id) {
        foundOnMyself = true;
      }
    });

    if (!foundOnMyself) {
      if (profileInfo._id === user?._id) {
        setEditProfile(true);
      } else {
        let ifOnMyFriendList = false;
        user?.friends?.forEach((id) => {
          if (id === profileInfo._id) {
            ifOnMyFriendList = true;
          }
        });

        if (ifOnMyFriendList) {
          setmessage(true);
          setAddFriend(false);
          setMyFriend(true);
          setUnFriend(true);
        } else {
          let found = false;
          user?.sendrequests.forEach((id) => {
            if (id === profileInfo._id) {
              found = true;
            }
          });
          setcencelreq(found);
          setAddFriend(!found);
        }
      }
    } else {
      setConfirmReq(true);
      setDeleteReq(true);
      setAddFriend(false);
    }
  }, [profileInfo, user]);

  useEffect(() => {
    const fatchData = async () => {
      const data = await getApiCall(`post/user/${profileInfo._id}`);
      if (data?.data) {
        setMypost(data.data);
      }
    };

    if (profileInfo._id) {
      fatchData();
    }
  }, [profileInfo]);

  // manage onclick api call
  const sendRequest = async () => {
    const data = await patchApiCall(`user/sendrequest/${profileInfo._id}`);

    if (data.data) {
      setcencelreq(true);
      setAddFriend(false);
      setmessage(false);
    }
  };

  const cencelrequest = async () => {
    const data = await patchApiCall(`user/cencelrequest/${profileInfo._id}`);

    if (data?.data) {
      setcencelreq(false);
      setAddFriend(true);
      setmessage(false);
    }
  };

  const confirmRequest = async () => {
    const data = await patchApiCall(`user/confirmrequest/${profileInfo._id}}`);

    if (data?.data) {
      setConfirmReq(false);
      setAddFriend(false);
      setDeleteReq(false);
      setmessage(true);
      setMyFriend(true);
      setUnFriend(true);
    }
  };

  const deleteRequest = async () => {
    const data = await patchApiCall(`user/deleterequest/${profileInfo._id}`);

    if (data?.data) {
      setConfirmReq(false);
      setAddFriend(true);
      setDeleteReq(false);
      setmessage(false);
    }
  };
  const unfriend = async () => {
    const data = await patchApiCall(`user/unfriend/${profileInfo._id}`);

    if (data?.data) {
      setConfirmReq(false);
      setAddFriend(true);
      setDeleteReq(false);
      setmessage(false);
      setMyFriend(false);
      setUnFriend(false);
    }
  };

  // hu8ndle onclick
  const showMyInfoBox = () => {
    setMyInfoShow(true);
    setPostShow(false);
  };
  const showMyPostBox = () => {
    setPostShow(true);
    setMyInfoShow(false);
  };

  return (
    <>
      {chatVisible && <Chat closeChat={closeChat} friendId={profileInfo._id} />}
      <div className="flex p-4 lg:space-x-2 space-x-1">
        {addFriend && (
          <button
            className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-xs lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
            type="button"
            onClick={sendRequest}
          >
            <IoMdAdd />
            <span>Add Friend</span>
          </button>
        )}
        {editProfile && (
          <button
            className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-xs lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
            type="button"
          >
            <IoMdAdd />
            <span>Edit Profile</span>
          </button>
        )}
        {confirmReq && (
          <button
            className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-xs lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
            type="button"
            onClick={confirmRequest}
          >
            <IoMdAdd />
            <span>Confirm Request</span>
          </button>
        )}
        {deleteReq && (
          <button
            className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-xs lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
            type="button"
            onClick={deleteRequest}
          >
            <IoMdAdd />
            <span>Delete Request</span>
          </button>
        )}
        {myFriend && (
          <button
            className="w-1/6 text-white py-2 text-sm px-4 rounded-md shadow-md flex items-center space-x-2"
            type="button"
          >
            <IoMdAdd />
          </button>
        )}
        {message && (
          <button
            className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-xs lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
            type="button"
            onClick={openChatBox}
          >
            <AiFillEdit /> <span>Message</span>
          </button>
        )}
        {unFriend && (
          <button
            className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-xs lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
            type="button"
            onClick={unfriend}
          >
            <IoMdAdd />
            <span>Unfriend</span>
          </button>
        )}
        {cencelreq && (
          <button
            className="w-2/6 bg-slate-700 text-white py-2 lg:text-sm text-xs lg:px-4 px-2 rounded-md shadow-md flex items-center space-x-2"
            type="button"
            onClick={cencelrequest}
          >
            <GiNotebook />
            <span>Cencel Request</span>
          </button>
        )}
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
      {myInfShow && <PublicProfileInfo user={profileInfo} />}
      {postShow && myPost.length === 0 ? (
        <h1 className="text-center text-slate-500 py-20 px-4 text-lg">
          There is no post
        </h1>
      ) : (
        myPost.map((postItem) => <Post key={postItem._id} post={postItem} />)
      )}
    </>
  );
}
