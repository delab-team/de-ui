import s from '../../styles/input.module.css'

export interface InputProps {
    label?: string;
    error?: string;
    value: string;
    type?: string;
    onChange: (...args: any[]) => void;
    placeholder?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    variant: 'black' | 'white'
    className?: string;
}

const inputVariantType = {
    black: s['input--type-black'],
    white: s['input--type-white']
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    type = 'string',
    value,
    onChange,
    placeholder,
    size = 'medium',
    variant = 'black',
    className,
    ...rest
}) => {
    const sizeClass = s[size]

    return (
        <div className={`${s.inputWrapper} ${sizeClass}`}>
            {label && <label className={s.label}>{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${s.input} ${sizeClass} ${inputVariantType[variant]} ${className || ''}`}
                {...rest}
            />
            {error && <div className={s.error}>{error}</div>}
        </div>
    )
}
