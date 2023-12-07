import axios from 'axios';

const API_URL = 'https://connections-api.herokuapp.com';

export const registerUser = async userData => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, userData);

    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response.data);
    throw error;
  }
};
