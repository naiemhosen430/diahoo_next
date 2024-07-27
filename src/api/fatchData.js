import { handleError } from "@/Utils/hundleError.jsx";
import axiosInstance from "./axiosConfig.js";

// For calling any get api
export const getApiCall = async (url) => {
  try {
    const response = await axiosInstance.get(`/api/v3/${url}`);
    return response.data;
  } catch (error) {
    // handleError(error);
    // return { success: false, message: 'An error occurred while processing your request.' };
  }
};

// For calling any post api
export const postApiCall = async (url, data) => {
  try {
    const response = await axiosInstance.post(`/api/v3/${url}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
    return {
      success: false,
      message: error?.response?.data?.message,
    };
  }
};

// For patching any post api
export const patchApiCall = async (url, data) => {
  try {
    const response = await axiosInstance.put(`/api/v3/${url}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
    return {
      success: false,
      message: "An error occurred while processing your request.",
    };
  }
};

// For deleting any api
export const deleteApiCall = async (url) => {
  try {
    const response = await axiosInstance.delete(`/api/v3/${url}`);
    return response.data;
  } catch (error) {
    handleError(error);
    return {
      success: false,
      message: "An error occurred while processing your request.",
    };
  }
};
