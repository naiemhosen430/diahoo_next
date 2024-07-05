"use client";
import { useState } from "react";
import mformData from "./FormData";
import Link from "next/link";
import UseAuthContext from "@/Hooks/UseAuthContext";

function RegisterForm() {
  const { hyndleSignup, loading, error, setError } = UseAuthContext();

  const [formData, setFormData] = useState(mformData);
  const [step, setStep] = useState(1);

  const hundleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.birthday === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.name === ""
    ) {
      setError("Every fields are required");
    } else {
      hyndleSignup({
        name: formData.name,
        birthday: formData.birthday,
        email: formData.email,
        password: formData.password,
      });
    }
  };

  const renderStep1 = () => (
    <>
      <div data-aos="fade-up" data-aos-duration="2000">
        <label className="block mx-2 text-xl text-slate-200" htmlFor="name">
          Write your full name
        </label>
        <input
          className="text-sm text-slate-400 block rounded-xl my-5 p-4 w-full bg-slate-900 border-slate-700"
          type="text"
          placeholder="Write your full name"
          value={formData.name}
          name="name"
          id="name"
          onChange={hundleOnchange}
        />
        {formData?.name && (
          <div className="flex justify-end mt-5">
            <input
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-2xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
              type="button"
              value="Next"
              onClick={handleNext}
            />
          </div>
        )}
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <div data-aos="fade-up" data-aos-duration="2000">
        <label className="block mx-2 text-xl text-slate-200" htmlFor="birthday">
          What is your birthday
        </label>
        <input
          className="text-sm text-slate-400 block rounded-xl my-5 p-4 w-full bg-slate-900 border-slate-700"
          type="date"
          value={formData.birthday}
          name="birthday"
          id="birthday"
          onChange={hundleOnchange}
        />
        <div className="flex justify-between mt-5">
          <input
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-2xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
            type="button"
            value="Back"
            onClick={handleBack}
          />
          {formData?.birthday && (
            <input
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-2xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
              type="button"
              value="Next"
              onClick={handleNext}
            />
          )}
        </div>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <div data-aos="fade-up" data-aos-duration="2000">
        <label className="block mx-2 text-xl text-slate-200" htmlFor="password">
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
        <div className="flex justify-between mt-5">
          <input
            data-aos="fade-up"
            className="text-2xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
            type="button"
            value="Back"
            onClick={handleBack}
          />
          {formData?.password && (
            <input
              data-aos-duration="1000"
              className="text-2xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
              onClick={handleFormSubmit}
              type="button"
              value={loading ? "Processing..." : "Register"}
            />
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="lg:py-0">
        {error && (
          <p className="text-center border rounded-lg text-white m-4">
            {error}
          </p>
        )}
        <div
          className="bg-slate-950 rounded-lg p-10 m-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <form>
            <h1 className="text-3xl py-10 pt-0 text-slate-400 p-4 font-bold text-center">
              Create an account here
            </h1>

            {/* Conditionally render based on current step */}
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </form>

          <div className="flex items-center p-10 text-white font-bold">
            <div className="h-1 w-5/12 bg-slate-800"></div>
            <h1 className="px-5">Or</h1>
            <div className="h-1 w-5/12 bg-slate-800"></div>
          </div>

          <div className="text-center">
            <h1 className="px-5">
              <Link
                className="text-white text-sm bg-slate-800 shadow-2xl p-2 px-4 rounded-2xl hover:text-white hover:underline"
                href={"/login"}
              >
                Login now?
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
