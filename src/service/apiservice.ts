import axios from 'axios';

// Use your environment variables
const API_URL = import.meta.env.VITE_TIMBU_BASE_URL;
const API_KEY = import.meta.env.VITE_TIMBU_API_KEY;

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/v2/auth/login`, {
            email,
            password,
            // Add your API key if needed in headers
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

// Add other functions like fetchProducts, etc.
















