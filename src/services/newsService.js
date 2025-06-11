import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const newsApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Key': API_KEY
  }
});


export const getTopHeadlines = async (category = 'general', country = 'us') => {
  try {
    const response = await newsApi.get('/top-headlines', {
      params: {
        category,
        country
      }
    });
    return response.data.articles;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch top headlines');
  }
};

export const searchNews = async (query) => {
  try {
    const response = await newsApi.get('/everything', {
      params: {
        q: query,
        sortBy: 'publishedAt',
        language: 'en'
      }
    });
    return response.data.articles;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to search news');
  }
};

export const getBreakingNews = async () => {
  try {
    const response = await newsApi.get('/top-headlines', {
      params: {
        country: 'us',
        pageSize: 10
      }
    });
    return response.data.articles;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch breaking news');
  }
}; 