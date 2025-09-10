import { useState } from 'react';
import type { LoginFormData, LoginFormProps } from '../types/auth';
import BasicButton from '../../../../shared/componets/atoms/BasicButton';
import AuthInput from '../atoms/AuthInput';
import CopyRight from '../atoms/CopyRight';

export default function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [formErrors, setFormErrors] = useState<Partial<LoginFormData>>({});

    const validateForm = (): boolean => {
        const errors: Partial<LoginFormData> = {};

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    const updateField = (field: keyof LoginFormData) => (value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (formErrors[field]) {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, rememberMe: e.target.checked }));
    };

    return (
        <div className='min-h-[100vh] bg-white flex flex-col items-center justify-center p-4'>
            <div
                className="
            flex flex-col items-center 
            p-8 sm:p-16 lg:p-[100px] gap-2.5
            w-full max-w-[900px] min-h-[400px] md:min-h-[700px]
            rounded-2xl shadow-md shadow-black/10
            "
            >
                <h1 className="text-center text-4xl font-extrabold text-primary-yellow mb-12 md:mb-28">
                    LANDAS
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <AuthInput
                        errors={formErrors.email}
                        onChange={updateField('email')}
                        title="User ID"
                        value={formData.email}
                    />
                    <AuthInput
                        errors={formErrors.password}
                        onChange={updateField('password')}
                        title="Password"
                        type='password'
                        value={formData.password}
                    />

                    <div className="flex items-center justify-between text-sm">
                        <label className="inline-flex items-center gap-2 text-gray-700">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                                checked={formData.rememberMe}
                                onChange={handleCheckboxChange}
                            />
                            아이디 저장
                        </label>
                        <div className="flex items-center gap-2 text-gray-500">
                            <button type="button" className="hover:text-gray-700">
                                아이디찾기
                            </button>
                            <span className="text-gray-300">|</span>
                            <button type="button" className="hover:text-gray-700">
                                비밀번호 찾기
                            </button>
                        </div>
                    </div>

                    <BasicButton
                        variant="primary"
                        type="submit"
                        fullWidth
                        disabled={
                            !formData.email ||
                            !formData.password ||
                            Object.keys(formErrors).length > 0 || isLoading
                        }
                        size='lg'
                        className="mt-6"
                    >
                        Login
                    </BasicButton>
                    <BasicButton size='lg' variant="outline" fullWidth>
                        Register
                    </BasicButton>
                </form>
            </div>
            <CopyRight />
        </div>
    );
}
