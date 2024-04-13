import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDotsHorizontal } from "react-icons/bi";

export default function PostHeader({
  postOwnerName,
  postOwnerid,
  postOwnerPicture,
  postedtime,
}) {
  const dateObject = new Date(postedtime);

  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth();
  const year = dateObject.getUTCFullYear();
  const postedtimefordisplay = `${day}-${month}-${year}`;
  return (
    <div className="flex items-center justify-center space-2 p-4">
      <Link href={`/profile/${postOwnerid}`}>
        <div className="w-1/6 flex items-center justify-center">
          <img
            className="h-10 w-10 block rounded-full"
            src={postOwnerPicture}
            alt="no image"
          />
        </div>
      </Link>
      <div className="w-4/6">
        <h4 className="text-white w-full text-xl">{postOwnerName}</h4>
        <p className="text-slate-500 w-full text-sm">{postedtimefordisplay}</p>
      </div>
      <div className="w-1/6 flex justify-center items-center text-rose-50 text-4xl">
        <BiDotsHorizontal />
      </div>
    </div>
  );
}