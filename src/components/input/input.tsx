import { ChangeEvent } from 'react'

import s from './input.module.css'

export interface InputProps {
    label?: string;
    error?: string;
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    value,
    onChange,
    placeholder,
    ...rest
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        onChange(newValue)
    }

    return (
        <div className={s.inputWrapper}>
            {label && <label className={s.label}>{label}</label>}
            <input
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={s.input}
                {...rest}
            />
            {error && <div className={s.error}>{error}</div>}
        </div>
    )
}
