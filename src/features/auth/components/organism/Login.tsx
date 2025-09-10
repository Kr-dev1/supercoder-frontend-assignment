import { useState } from 'react';
import { useNavigate } from 'react-router';
import type { LoginFormData } from '../types/auth';
import LoginForm from '../molecules/LoginForm';
export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (data: LoginFormData) => {
        setIsLoading(true);
        setError('');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (data.email && data.password) {
                navigate('/home')
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error(err)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LoginForm
            onSubmit={handleLogin}
            isLoading={isLoading}
            error={error}
        />
    );
}
