import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const getNews = async () => {
    try {
        const response = await axios.get(BASE_URL, {
                headers: {
        'x-api-key': API_KEY
            }
        })
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}
