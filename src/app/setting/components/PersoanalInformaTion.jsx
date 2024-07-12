import { IoMdArrowBack } from "react-icons/io";

export default function PersoanalInformaTion({
  closePersonalInfomationSetting,
}) {
  const onChangeHundler = () => {};
  return (
    <>
      <ul className="my-4 h-screen overflow-y-auto">
        <li
          className="text-2xl text-white py-2 my-2 px-4 cursor-pointer rounded shadow"
          onClick={closePersonalInfomationSetting}
        >
          <IoMdArrowBack />
        </li>
        <li className="text-lg my-10 text-white py-2 px-4 cursor-pointer rounded shadow">
          <div>
            <h5 className="text-white py-2">Change your name.</h5>
            <p className="text-slate-500 py-1">
              You won't will able to change your name on next 1 mounth
            </p>
            <label className="block" htmlFor="name">
              Edit Name.
            </label>
            <input
              className="block w-full bg-slate-800 my-2 rounded text-white py-1 px-2"
              id="name"
              type="text"
              value={"MD Naiem Hosen"}
              onChange={onChangeHundler}
            />
            <label className="block" htmlFor="password">
              Write Your Passowrd.
            </label>
            <input
              className="block w-full bg-slate-800 my-2 rounded text-white py-1 px-2"
              id="password"
              type="password"
              value={""}
              onChange={onChangeHundler}
            />
            <button
              className="text-white bg-slate-500 py-1 px-4 text-center w-2/6 rounded"
              type="button"
            >
              Change
            </button>
          </div>
        </li>

        <li className="text-lg my-10 text-white py-2 px-4 cursor-pointer rounded shadow">
          <div>
            <h5 className="text-white py-2">Manage your email.</h5>
            <p className="text-slate-500 py-1">
              You won't able to change your primary email.{" "}
            </p>
            <div className="email-list">
              <span className="text-slate-300 p-4">
                naiemhosen430@gmail.com
              </span>
            </div>
            <label className="block" htmlFor="name">
              Edit Name.
            </label>
            <input
              className="block w-full bg-slate-800 my-2 rounded text-white py-1 px-2"
              id="name"
              type="text"
              value={"Mexample@gmail.com"}
              onChange={onChangeHundler}
            />
            <button
              className="text-white bg-slate-500 py-1 px-4 text-center w-2/6 rounded"
              type="button"
            >
              Add New
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
