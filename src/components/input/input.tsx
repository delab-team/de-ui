import { ChangeEvent } from 'react'
import s from '../../styles/input.module.css'

export interface InputProps {
    label?: string;
    error?: string;
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    value,
    onChange,
    placeholder,
    size = 'medium',
    className,
    ...rest
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        onChange(newValue)
    }

    const sizeClass = s[size]

    return (
        <div className={`${s.inputWrapper} ${sizeClass}`}>
            {label && <label className={s.label}>{label}</label>}
            <input
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={`${s.input} ${sizeClass} ${className || ''}`}
                {...rest}
            />
            {error && <div className={s.error}>{error}</div>}
        </div>
    )
}
