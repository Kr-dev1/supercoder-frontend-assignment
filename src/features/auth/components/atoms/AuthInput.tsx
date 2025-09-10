import BasicInput from '../../../../shared/componets/atoms/BasicInput'

interface AuthInputProps {
    title: string
    value: string
    onChange: (value: string) => void
    errors?: string
    type?: string
    placeholder?: string
}

const AuthInput = ({
    title,
    value,
    onChange,
    errors,
    type = "text",
    placeholder
}: AuthInputProps) => {
    return (
        <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-12 w-full">
            <p className="shrink-0 w-24">{title}</p>
            <BasicInput
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                error={errors}
                className="flex-1 rounded-xl border-primary-yellow"
            />
        </div>
    )
}

export default AuthInput
