import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function PostStorySetting({ closeSettingPostStorySetting }) {
  const [postPrivecynotificationsOn, setpostPrivecynotificationsOn] = useState(
    true
  );
  const [storynotificationsOn, setstorynotificationsOn] = useState(true);

  const handleMessageNotificationChange = (e) => {
    const seelectedValue = e.target.value;
    setpostPrivecynotificationsOn(seelectedValue === "public");
  };
  const handlefriendRequestNotificationChange = (e) => {
    const seelectedValue = e.target.value;
    setstorynotificationsOn(seelectedValue === "on");
  };

  return (
    <>
      <ul>
        <li
          className="text-2xl text-white py-2 my-2 px-4 cursor-pointer rounded shadow"
          onClick={closeSettingPostStorySetting}
        >
          <IoMdArrowBack />
        </li>
      </ul>
      <div>
        <h1 className="text-white text-2xl p-2">Post and Story Setting</h1>
        <ul>
          <li className="flex items-center mx-2 my-2 bg-slate-800 py-1 px-2">
            <div className="w-5/6">
              <h3 className="text-white text-xl">Control your post.</h3>
              <p className="text-slate-400 text-sm">
                If you select privet then only your friend will able to see your
                post.
              </p>
            </div>
            <div className="w-1/6 text-center">
              <select
                className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                value={postPrivecynotificationsOn ? "on" : "off"}
                onChange={handleMessageNotificationChange}
              >
                <option
                  className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                  value="public"
                >
                  Public
                </option>
                <option
                  className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                  value="privet"
                >
                  Privet
                </option>
              </select>
            </div>
          </li>

          <li className="flex items-center mx-2 my-2 bg-slate-800 py-1 px-2">
            <div className="w-5/6">
              <h3 className="text-white text-xl">Control your story..</h3>
              <p className="text-slate-400 text-sm">
                If you select privet then only your friend will able to see your
                story.
              </p>
            </div>
            <div className="w-1/6 text-center">
              <select
                className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                value={storynotificationsOn ? "on" : "off"}
                onChange={handlefriendRequestNotificationChange}
              >
                <option
                  className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                  value="public"
                >
                  Public
                </option>
                <option
                  className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                  value="privet"
                >
                  Privet
                </option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
