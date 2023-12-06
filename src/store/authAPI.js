// src/store/authAPI.js
import axios from 'axios';

const API_URL = 'https://connections-api.herokuapp.com';

export const registerUser = async userData => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, userData);
    // Tutaj możesz zapisywać token JWT w localStorage lub w stanie Redux
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    // Możesz obsługiwać błędy, np. wyświetlać komunikat użytkownikowi
    console.error('Registration error:', error.response.data);
    throw error;
  }
};
