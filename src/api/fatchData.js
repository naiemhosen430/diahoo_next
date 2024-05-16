import axios from "axios"

// For calling any get api

export const getApiCall = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// For calling any post api
export const postApiCall = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};