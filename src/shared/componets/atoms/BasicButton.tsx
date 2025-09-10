import type { BasicButtonProps } from "../../types/buttonTypes";
import classNameMerge from "../../utils/classNameMerge";

export default function BasicButton({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    fullWidth = false,
    className,
    onClick,
    id,
    title,
    type = "button"
}: BasicButtonProps) {

    const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors';
    const sizes = {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-8 text-lg'
    }[size];

    const variants = {
        primary: 'bg-primary-yellow text-black hover:bg-yellow-500',
        outline: 'border border-gray-200 text-black hover:bg-gray-200',
        ghost: 'text-black hover:bg-black/5'
    }[variant];

    return (
        <button
            type={type}
            disabled={disabled}
            title={title}
            id={id}
            onClick={onClick}
            className={classNameMerge([
                base,
                sizes,
                variants,
                fullWidth && 'w-full',
                disabled && 'opacity-50 bg-gray-400 cursor-not-allowed',
                className
            ])}
        >
            {children}
        </button>
    );
}
