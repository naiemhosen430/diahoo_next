"use client";
import React, { useState } from "react";
import Spinner from "@/app/Components/Loaders/Spinner";
import UseSignUp from "@/Hooks/UseSignUp";
import RegisterForm from "./Components/RegisterForm";

export default function Page() {
  const { loading } = UseSignUp();

  return (
    <>
      {loading && <Spinner />}

      <div className="p-10 py-5">
        <RegisterForm />
      </div>
    </>
  );
}
