"use client";
import { useState } from "react";
import LoginFormData from "./LoginFormData";
import Link from "next/link";
import UseAuthContext from "@/Hooks/UseAuthContext";

function LoginForm() {
  const {
    setLoading,
    handleAuth,
    handleGetAllUsers,
    loading,
    message,
    setMessage,
    handleUpdateProfile,
  } = UseAuthContext();

  const [formData, setFormData] = useState(LoginFormData);

  const hundleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      setMessage("Every fields are required");
    } else {
      await handleAuth(
        {
          email: formData.email,
          password: formData.password,
        },
        "login"
      );
    }
  };

  return (
    <>
      <div className="lg:py-0">
        {message && (
          <p className="text-center border rounded-lg text-white m-4">
            {message}
          </p>
        )}
        <div
          className="bg-slate-950 rounded-lg p-10 m-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <form>
            <h1 className="lg:text-3xl text-lg py-10 pt-0 text-slate-400 p-4 font-bold text-center">
              Login here
            </h1>
            <label
              className="block mx-2 lg:text-xl text-sm text-slate-200"
              htmlFor="email"
            >
              Write your email
            </label>
            <input
              className="text-sm text-slate-400 block rounded-xl my-5 p-4 w-full bg-slate-900 border-slate-700"
              type="email"
              placeholder="Write your email"
              value={formData.email}
              name="email"
              id="email"
              onChange={hundleOnchange}
            />

            <label
              className="block mx-2 lg:text-xl text-sm text-slate-200"
              htmlFor="password"
            >
              Write your password
            </label>
            <input
              className="text-sm text-slate-400 block rounded-xl my-5 p-4 w-full bg-slate-900 border-slate-700"
              type="password"
              placeholder="Write your password"
              value={formData.password}
              name="password"
              id="password"
              onChange={hundleOnchange}
            />
            <div className="flex items-center">
              <input
                className="text-xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
                onClick={handleFormSubmit}
                type="button"
                value={loading ? "Loading" : "Login"}
              />
              <h1 className="lg:px-5 px-2">
                <Link
                  className="text-slate-500 lg:text-sm text-xs hover:text-white hover:underline"
                  href={"/resetpassword"}
                >
                  Forgotten password?
                </Link>
              </h1>
            </div>

            <div className="flex items-center p-10 text-white font-bold">
              <div className="h-1 w-5/12 bg-slate-800"></div>
              <h1 className="px-5">Or</h1>
              <div className="h-1 w-5/12 bg-slate-800"></div>
            </div>

            <div className="text-center">
              <h1 className="px-5">
                <Link
                  className="text-white text-sm bg-slate-800 shadow-2xl p-2 px-4 rounded-2xl hover:text-white hover:underline"
                  href={"/signup"}
                >
                  Create an account now?
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
