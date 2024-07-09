import React, { useState } from "react";
import { BsImage, BsFillCameraVideoFill } from "react-icons/bs";

const PostData = {
  tittle: "",
  youtubeurl: "",
  file: [],
};

export default function CreatePost(props) {
  const [showvideobox, setShowvideobox] = useState(false);
  const [showimagebox, setShowimagebox] = useState(false);
  const [postData, setPostdata] = useState(PostData);
  const [closeCreateBox, setCloseCreateBox] = useState(true);

  const hundleOnchange = (event) => {
    const { name, value } = event.target;
    setPostdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    setPostdata((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const SubmitPost = async () => {
    // const token = "";
    // const data = ''

    // await api
    //   .post(`/api/v1/post/create/${data.userId}`, postData)
    //   .then((response) => {
    //     if (response.data.statusCode === 200) {
    //       setCloseCreateBox(false);
    //     }
    //   })
    //   .catch((error) => {
    //     if (error) {
    //       console.error(error);
    //     }
    //   });
  };

  const handleSubboxClick = (event) => {
    event.stopPropagation();
  };

  function showvideoboxfunc() {
    setShowimagebox(false);
    setShowvideobox(true);
  }

  function setShowimageboxfunc() {
    setShowimagebox(true);
    setShowvideobox(false);
  }

  return (
    <>
      {closeCreateBox && (
        <div
          className="backdrop-blur-xl z-10 bg-b py-20 fixed w-screen h-screen"
          onClick={props.closecreatepostbox}
        >
          <div
            className="w-3/5 p-4 m-auto rounded-xl bg-slate-900"
            onClick={handleSubboxClick}
          >
            <div>
              <input
                className="w-full bg-black rounded-xl my-2 p-2 text-white"
                type="text"
                placeholder="Start writting...."
                name="tittle"
                id="tittle"
                value={postData.tittle}
                onChange={hundleOnchange}
              />
            </div>
            {showvideobox && (
              <div className="py-4">
                <label className="text-lg text-rose-200" htmlFor="videourl">
                  Past your youtube video url
                </label>
                <input
                  className="w-full bg-black rounded-xl my-2 p-2 text-white"
                  type="text"
                  placeholder="Past YouTube Video URL"
                  id="youtubeurl"
                  name="youtubeurl"
                  value={postData.youtubeurl}
                  onChange={hundleOnchange}
                />
              </div>
            )}
            {showimagebox && (
              <div className="py-4">
                <label className="text-lg text-rose-200" htmlFor="image">
                  Choose your image
                </label>
                <input
                  className="w-full bg-black rounded-xl my-2 p-2 text-white"
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleImageInputChange}
                  multiple
                />
              </div>
            )}

            <div>
              <ul className="text-white p-4 flex space-x-10">
                <li className="cursor-pointer" onClick={showvideoboxfunc}>
                  <BsFillCameraVideoFill className="text-2xl" />
                </li>
                <li className="cursor-pointer" onClick={setShowimageboxfunc}>
                  <BsImage className="text-2xl" />
                </li>
              </ul>
            </div>
            <div>
              <button
                className="text-center text-zinc-50 bg-slate-500 w-full p-2 my-2s"
                type="button"
                onClick={SubmitPost}
              >
                Post
              </button>
            </div>
            <div>
              <button
                className="text-center text-zinc-50 bg-slate-800 w-full p-2 my-2"
                type="button"
                onClick={props.closecreatepostbox}
              >
                Cencel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
