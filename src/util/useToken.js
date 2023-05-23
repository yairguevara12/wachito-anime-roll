
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const API_BASE_URL = 'http://localhost:5000/api/v1';

function useToken() {
    const navigate = useNavigate();
    const validateTokenInStorage = async () => {

        const token = sessionStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.get(`${API_BASE_URL}/validateToken`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                      },
                });
                console.log(response.data);
                
                const { isValid } = response.data;
                console.log(isValid);
                if (isValid === false) {
                    // Handle invalid token (e.g., redirect to login page)
                    console.error('Invalid token');
                    navigate('/login'); // Redirect to the login page
                }
            } catch (error) {
                console.error(error);
                navigate('/login');  // Redirect to the login page
            }
        } else {
            // Handle missing token (e.g., redirect to login page)
            console.error('Token not found');
            navigate('/login');  // Redirect to the login page
        }
    };

    return {validateTokenInStorage};
}

export default useToken;