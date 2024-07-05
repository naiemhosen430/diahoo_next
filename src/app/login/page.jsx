"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Spinner from "@/app/Components/Loaders/Spinner";
import UseLogin from "@/Hooks/UseLogin";
import { MdErrorOutline } from "react-icons/md";
import LoginForm from "./Components/LoginForm.jsx";

export default function Page() {
  const { login, loading, error } = UseLogin();
  const [errorBox, setErrorBox] = useState(false);

  const closeErrorBox = () => {
    setErrorBox(false);
  };

  return (
    <>
      {loading && <Spinner />}

      <div className="p-10 py-5">
          <LoginForm />
      </div>
    </>
  );
}
