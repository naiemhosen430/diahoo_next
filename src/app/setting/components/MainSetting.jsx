import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import PersoanalInformaTion from "./PersoanalInformaTion";
import Security from "./Security";
import BlockList from "./BlockList";
import NotificationSetting from "./NotificationSetting";
import PostStorySetting from "./PostStorySetting";
import ActiveStatus from "./ActiveStatus";
import Privecy from "./Privecy";

export default function MainSetting({ closeSetting }) {
  const [mainsetting, setMainSetting] = useState(true);
  const [setting, setSetting] = useState(false);
  const [shoeSecurety, setShowSecurety] = useState(false);
  const [blockList, setBlockList] = useState(false);
  const [notificationSetting, setNotificationSetting] = useState(false);
  const [postStorysetting, setPostStorysetting] = useState(false);
  const [activeStatus, setActiveStatus] = useState(false);
  const [privecy, setPrivecy] = useState(false);

  // hundle onclick
  const showPersonalInfo = () => {
    setSetting(true);
    setMainSetting(false);
    setNotificationSetting(false);
    setPostStorysetting(false);
    setShowSecurety(false);
  };
  const closePersonalInfomationSetting = () => {
    setSetting(false);
    setMainSetting(true);
    setShowSecurety(false);
    setNotificationSetting(false);
    setBlockList(false);
    setPostStorysetting(false);
  };
  const showSecuretyBox = () => {
    setShowSecurety(true);
    setSetting(false);
    setNotificationSetting(false);
    setMainSetting(false);
    setBlockList(false);
    setPostStorysetting(false);
  };
  const closeSettingSecurety = () => {
    setShowSecurety(false);
    setSetting(false);
    setNotificationSetting(false);
    setMainSetting(true);
    setBlockList(false);
    setPostStorysetting(false);
  };
  const closeSettingBlocking = () => {
    setShowSecurety(false);
    setBlockList(false);
    setSetting(false);
    setPostStorysetting(false);
    setNotificationSetting(false);
    setMainSetting(true);
  };
  const closeSettingNotificationSetting = () => {
    setShowSecurety(false);
    setNotificationSetting(false);
    setBlockList(false);
    setSetting(false);
    setPostStorysetting(false);
    setMainSetting(true);
  };
  const closeSettingPostStorySetting = () => {
    setShowSecurety(false);
    setNotificationSetting(false);
    setPostStorysetting(false);
    setBlockList(false);
    setSetting(false);
    setMainSetting(true);
  };
  const closetiveStatusBox = () => {
    setShowSecurety(false);
    setBlockList(false);
    setNotificationSetting(false);
    setPostStorysetting(false);
    setSetting(false);
    setActiveStatus(false);
    setMainSetting(true);
  };
  const showPostStorySettingBox = () => {
    setShowSecurety(false);
    setNotificationSetting(false);
    setPostStorysetting(true);
    setBlockList(false);
    setSetting(false);
    setMainSetting(false);
  };
  const showNotificationSettingBox = () => {
    setShowSecurety(false);
    setNotificationSetting(true);
    setBlockList(false);
    setSetting(false);
    setPostStorysetting(false);
    setMainSetting(false);
  };
  const showBlockListBox = () => {
    setShowSecurety(false);
    setBlockList(true);
    setNotificationSetting(false);
    setPostStorysetting(false);
    setSetting(false);
    setMainSetting(false);
  };
  const showActiveStatusBox = () => {
    setShowSecurety(false);
    setBlockList(false);
    setNotificationSetting(false);
    setPostStorysetting(false);
    setSetting(false);
    setMainSetting(false);
    setActiveStatus(true);
  };
  const closePrivecyBox = () => {
    setShowSecurety(false);
    setBlockList(false);
    setNotificationSetting(false);
    setPostStorysetting(false);
    setSetting(false);
    setActiveStatus(false);
    setMainSetting(true);
    setPrivecy(false);
  };
  const showPrivecyBox = () => {
    setShowSecurety(false);
    setBlockList(false);
    setNotificationSetting(false);
    setPostStorysetting(false);
    setSetting(false);
    setActiveStatus(false);
    setMainSetting(false);
    setPrivecy(true);
  };
  return (
    <>
      {mainsetting && (
        <ul className="my-4">
          <li
            className="text-2xl text-white py-2 my-2 px-4 cursor-pointer rounded shadow"
            onClick={closeSetting}
          >
            <IoMdArrowBack />
          </li>
          <li
            className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow"
            onClick={showPersonalInfo}
          >
            Personal Information
          </li>
          <li
            className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow"
            onClick={showSecuretyBox}
          >
            Security
          </li>
          <li
            className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow"
            onClick={showBlockListBox}
          >
            Blocking
          </li>
          <li
            className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow"
            onClick={showNotificationSettingBox}
          >
            Notification setting
          </li>
          <li
            className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow"
            onClick={showPostStorySettingBox}
          >
            Post/story settings
          </li>
          <li
            className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow"
            onClick={showActiveStatusBox}
          >
            Active status
          </li>
          <li
            className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow"
            onClick={showPrivecyBox}
          >
            Privacy
          </li>
        </ul>
      )}

      {setting && (
        <PersoanalInformaTion
          closePersonalInfomationSetting={closePersonalInfomationSetting}
        />
      )}
      {shoeSecurety && <Security closeSettingSecurety={closeSettingSecurety} />}
      {blockList && <BlockList closeSettingBlocking={closeSettingBlocking} />}
      {notificationSetting && (
        <NotificationSetting
          closeSettingNotificationSetting={closeSettingNotificationSetting}
        />
      )}
      {postStorysetting && (
        <PostStorySetting
          closeSettingPostStorySetting={closeSettingPostStorySetting}
        />
      )}
      {activeStatus && <ActiveStatus closetiveStatusBox={closetiveStatusBox} />}
      {privecy && <Privecy closePrivecyBox={closePrivecyBox} />}
    </>
  );
}
