"use client";
import { ProfileContex } from "@/Contexts/ProfileContext";
import { useContext } from "react";

export default function UseProfileContext() {
  const profileContext = useContext(ProfileContex);

  if (!profileContext) {
    throw Error("Application Error");
  }

  return profileContext;
}
