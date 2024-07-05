"use client";
import { useState } from "react";
import mformData from "./FormData";
import Link from "next/link";
import UseAuthContext from "@/Hooks/UseAuthContext";

function RegisterForm() {
  const {
    setLoading,
    handleAuth,
    handleGetAllUsers,
    loading,
    message,
    setMessage,
    handleUpdateProfile,
  } = UseAuthContext();

  const [formData, setFormData] = useState(mformData);
  const [step, setStep] = useState(1);

  const handleOnChange = (e) => {
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
    console.log(formData);
    if (
      formData.birthday === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.fullname === "" ||
      formData.gender === ""
    ) {
      setMessage("Field is required");
    } else {
      handleAuth(
        {
          fullname: formData.fullname,
          birthday: formData.birthday,
          email: formData.email,
          password: formData.password,
          gender: formData.gender,
        },
        "register"
      );
    }
  };

  const renderStep1 = () => (
    <div data-aos="fade-up" data-aos-duration="2000">
      <label
        className="block mx-2 lg:text-xl text-sm text-slate-200"
        htmlFor="fullname"
      >
        Write your full name
      </label>
      <input
        className="text-sm text-slate-400 block rounded-xl my-5 lg:p-4 p-2 px-4 w-full bg-slate-900 border-slate-700"
        type="text"
        placeholder="Write your full name"
        value={formData.fullname}
        name="fullname"
        id="fullname"
        onChange={handleOnChange}
      />
      {formData?.fullname && (
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
  );

  const renderStep2 = () => (
    <div data-aos="fade-up" data-aos-duration="2000">
      <label
        className="block mx-2 lg:text-xl text-sm text-slate-200"
        htmlFor="birthday"
      >
        What is your birthday
      </label>
      <input
        className="text-sm text-slate-400 block rounded-xl my-5 lg:p-4 p-2 px-4 w-full bg-slate-900 border-slate-700"
        type="date"
        value={formData.birthday}
        name="birthday"
        id="birthday"
        onChange={handleOnChange}
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
  );

  const renderStep3 = () => (
    <div data-aos="fade-up" data-aos-duration="2000">
      <label
        className="block mx-2 lg:text-xl text-sm text-slate-200"
        htmlFor="email"
      >
        What is your email
      </label>
      <input
        className="text-sm text-slate-400 block rounded-xl my-5 lg:p-4 p-2 px-4 w-full bg-slate-900 border-slate-700"
        type="email" // Correcting input type
        placeholder="Write your email"
        value={formData.email}
        name="email"
        id="email"
        onChange={handleOnChange}
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
        {formData?.email && (
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
  );

  const renderStep4 = () => (
    <div data-aos="fade-up" data-aos-duration="2000">
      <label
        className="block mx-2 lg:text-xl text-sm text-slate-200"
        htmlFor="gender"
      >
        Select your gender
      </label>
      <select
        className="text-sm text-slate-400 block rounded-xl my-5 lg:p-4 p-2 px-4 w-full bg-slate-900 border-slate-700"
        value={formData.gender}
        name="gender"
        id="gender"
        onChange={handleOnChange}
      >
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <div className="flex justify-between mt-5">
        <input
          data-aos="fade-up"
          className="text-2xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
          type="button"
          value="Back"
          onClick={handleBack}
        />
        {formData?.gender && (
          <input
            data-aos-duration="1000"
            className="text-2xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold"
            type="button"
            value="Next"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div data-aos="fade-up" data-aos-duration="2000">
      <label
        className="block mx-2 lg:text-xl text-sm text-slate-200"
        htmlFor="password"
      >
        Write your password
      </label>
      <input
        className="text-sm text-slate-400 block rounded-xl my-5 lg:p-4 p-2 px-4 w-full bg-slate-900 border-slate-700"
        type="password"
        placeholder="Write your password"
        value={formData.password}
        name="password"
        id="password"
        onChange={handleOnChange}
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
  );

  return (
    <div className="lg:py-0">
      {message && (
        <p className="text-center border rounded-lg text-white m-4">{message}</p>
      )}
      <div
        className="bg-slate-950 rounded-lg p-10 m-auto"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <form>
          <h1 className="lg:text-3xl text-lg py-10 pt-0 text-slate-400 p-4 font-bold text-center">
            Create an account here
          </h1>
          {/* Conditionally render based on current step */}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()} {/* Corrected step condition */}
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
  );
}

export default RegisterForm;
