"use client";
import { AuthContex } from "@/Contexts/AuthContex";
import { useContext } from "react";

export default function UseAuthContext() {
  const authContext = useContext(AuthContex);

  if (!authContext) {
    throw Error("Application Error");
  }

  return authContext;
}
