import { FC } from 'react'
import s from '../../styles/checkbox.module.css'

export interface CheckboxProps {
    checked: boolean;
    label?: string;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label, disabled, className }) => {
    const handleCheckboxChange = () => {
        if (!disabled) {
            onChange(!checked)
        }
    }

    return (
        <label className={`${s['checkbox-container']} ${disabled ? s.disabled : ''} ${className || ''}`}>
            <div className={`${s.checkbox} ${checked ? s.checked : ''} ${disabled ? s.disabled : ''}`} onClick={handleCheckboxChange}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${s['checkbox-icon']}`} viewBox="0 0 14 14" fill="none">
                    {checked && (
                        <path d="M11.6667 4.08333L5.25001 10.5L2.33334 7.58333" />
                    )}
                </svg>
            </div>
            {label && <span className={`${s['checkbox-label']} ${disabled ? s.disabled : ''}`} onClick={handleCheckboxChange}>{label}</span>}
        </label>
    )
}
