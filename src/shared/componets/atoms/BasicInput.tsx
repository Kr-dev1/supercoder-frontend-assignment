import type { InputHTMLAttributes } from 'react';
import classNameMerge from '../../utils/classNameMerge';

interface BasicInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    error?: string;
    label?: string;
    className?: string;
}

export default function BasicInput({
    value,
    onChange,
    error,
    label,
    className,
    type = 'text',
    placeholder,
    ...props
}: BasicInputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={classNameMerge([
                    'w-full px-4 py-3 rounded-lg border',
                    'focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent',
                    'placeholder:text-gray-400',
                    className,
                    error ? 'border-red-500' : 'border-gray-300'  // 👈 put last
                ])}

                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
