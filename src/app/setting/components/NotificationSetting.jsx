import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function NotificationSetting({
  closeSettingNotificationSetting,
}) {
  const [MessagenotificationsOn, setMessageNotificationsOn] = useState(true);
  const [
    friendRequestnotificationsOn,
    setFriendRequestNotificationsOn,
  ] = useState(true);

  const handleMessageNotificationChange = (e) => {
    const seelectedValue = e.target.value;
    setMessageNotificationsOn(seelectedValue === "on");
  };
  const handlefriendRequestNotificationChange = (e) => {
    const seelectedValue = e.target.value;
    setFriendRequestNotificationsOn(seelectedValue === "on");
  };
  return (
    <>
      <ul>
        <li
          className="text-2xl text-white py-2 my-2 px-4 cursor-pointer rounded shadow"
          onClick={closeSettingNotificationSetting}
        >
          <IoMdArrowBack />
        </li>
      </ul>
      <div>
        <h1 className="text-white text-2xl p-2">Notification Setting</h1>
        <ul>
          <li className="flex items-center mx-2 my-2 bg-slate-800 py-1 px-2">
            <div className="w-5/6">
              <h3 className="text-white text-xl">
                Turn off your message notification.
              </h3>
              <p className="text-slate-400 text-sm">
                All your message notification will be hiden
              </p>
            </div>
            <div className="w-1/6 text-center">
              <select
                className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                value={MessagenotificationsOn ? "on" : "off"}
                onChange={handleMessageNotificationChange}
              >
                <option
                  className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                  value="on"
                >
                  Turn On
                </option>
                <option
                  className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                  value="off"
                >
                  Turn Off
                </option>
              </select>
            </div>
          </li>

          <li className="flex items-center mx-2 my-2 bg-slate-800 py-1 px-2">
            <div className="w-5/6">
              <h3 className="text-white text-xl">
                Turn off your friend request notification.
              </h3>
              <p className="text-slate-400 text-sm">
                All your friend request notification will be hiden
              </p>
            </div>
            <div className="w-1/6 text-center">
              <select
                className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                value={friendRequestnotificationsOn ? "on" : "off"}
                onChange={handlefriendRequestNotificationChange}
              >
                <option
                  className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                  value="on"
                >
                  Turn On
                </option>
                <option
                  className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                  value="off"
                >
                  Turn Off
                </option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
