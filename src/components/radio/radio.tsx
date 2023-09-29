import { FC } from 'react'

import s from '../../styles/radio.module.css'

export interface RadioProps {
    checked: boolean;
    disabled?: boolean;
    label?: string;
    onChange: (checked: boolean) => void;
    className?: string;
}

export const Radio: FC<RadioProps> = ({
    checked,
    disabled = false,
    label,
    onChange,
    className
}) => {
    const handleChange = () => {
        if (!disabled) {
            onChange(!checked)
        }
    }

    return (
        <div className={`${s['radio-container']} ${disabled ? s.disabled : ''} ${className || ''}`}>
            <span className={`${s.radio} ${checked ? s.checked : ''}`}  onClick={handleChange}>
                {checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="black" />
                    </svg>
                )}
            </span>
            {label && <span className={`s['radio-label'] ${disabled ? s.disabled : ''}`}>{label}</span>}
        </div>
    )
}
