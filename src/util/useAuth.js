
import axios from 'axios';
import useToken from './useToken';
import { useNavigate } from 'react-router-dom';
function useAuth(props) {
    const navigate = useNavigate();
    const API_BASE_URL = 'http://localhost:5000/api/v1';
    //const [token, setToken] = React.useState('');
    const { validateTokenInStorage } = useToken();

    const handleLogin = async () => {
        const { userEmail, userPassword } = props;
        console.log(userEmail, userPassword);
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, {
                email:userEmail,
               password: userPassword,
            });
            if (response.status === 200) {
                const { token } = response.data;
                // setToken(token);
                console.log(token);

                saveTokenToStorage(token);

                await validateTokenInStorage();

                
                    // Redirect to protected route after successful login
                navigate('/home');
               

                return true;

            }

        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const saveTokenToStorage = (token) => {
        sessionStorage.setItem('token', token);
    };

    return { handleLogin }


}

export default useAuth;