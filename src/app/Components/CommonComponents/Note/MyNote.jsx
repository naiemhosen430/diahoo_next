import { BsThreeDotsVertical } from "react-icons/bs";

const handleSubboxClick = (event) => {
  event.stopPropagation();
};

export default function MyNote(props) {
  return (
    <div
      className="backdrop-blur-xl z-10 bg-b lg:py-20 fixed w-screen h-screen"
      onClick={props.toggleMyNodeBox}
    >
      <div
        className="lg:w-3/6 m-auto p-4 bg-slate-900"
        onClick={handleSubboxClick}
      >
        <div className="rounded-xl bg-slate-800 hover:bg-slate-600 px-4 py-2">
          <div className="flex items-center p-2">
            <h1 className="w-5/6 text-white">Note name one</h1>
            <span className="w-1/6">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
