"use client";
import { useContext, useState } from "react";
import { getApiCall, patchApiCall, postApiCall } from "@/api/fatchData";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { PostsContex } from "@/Contexts/PostContext";

export default function UsePostContext() {
  const [loading, setLoading] = useState(false);
  const PostsContext = useContext(PostsContex);
  const { state, dispatch } = useContext(PostsContex);
  const [message, setMessage] = useState(false);
  const { posts } = state;
  const router = useRouter();

  if (!PostsContext) {
    throw new Error("Application Error");
  }

  // for get all user
  const getPost = async () => {
    setLoading(true);
    try {
      const response = await getApiCall(`post`);
      if (response?.statusCode === 200) {
        dispatch({
          type: "ALL_POST",
          payload: posts ? [...posts, ...response?.data] : [...response?.data],
        });
      }
    } catch (error) {
      // toast.error(error.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    setLoading,
    loading,
    setMessage,
    message,
    getPost,
  };
}
