import axios from 'axios';
import { API_URL } from '../config';

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/messagecategories`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getLogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/logs`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const sendNotification = async (notification) => {
  try {
    const response = await axios.post(`${API_URL}/logs`, 
      notification
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


