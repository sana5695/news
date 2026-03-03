import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const getNews = async (page = 1, pageSize = 10) => {
    try {
        const response = await axios.get(BASE_URL + 'q=web', {
            params: {
                apiKey: API_KEY,
                page,
                pageSize
            }
        })
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}