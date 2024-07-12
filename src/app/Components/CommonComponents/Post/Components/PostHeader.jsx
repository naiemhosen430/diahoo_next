import Link from "next/link";
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
    <div className="flex items-center justify-center space-2 p-2">
      <div className="lg:w-1/12 w-2/12 text-center">
        <Link href={`/${postOwnerid}`}>
          <img
            className="h-10 w-10 inline-block rounded-full"
            src={postOwnerPicture}
            alt="no image"
          />
        </Link>
      </div>
      <div className="lg:w-10/12 w-8/12">
        <h4 className="text-white w-full text-xl">{postOwnerName}</h4>
        <p className="text-slate-500 w-full text-sm">{postedtimefordisplay}</p>
      </div>
      <div className="lg:w-1/12  w-2/12 flex justify-center items-center text-rose-50 text-4xl">
        <BiDotsHorizontal />
      </div>
    </div>
  );
}
