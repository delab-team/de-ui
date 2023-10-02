import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/radio.module.css'

export interface RadioProps {
    checked: boolean;
    disabled?: boolean;
    label?: string;
    onChange: (checked: boolean) => void;
    className?: string;
    tgStyles?: {
        radio?: React.CSSProperties | undefined;
        label?: React.CSSProperties | undefined;
    }
}

export const Radio: FC<RadioProps> = ({
    checked,
    disabled = false,
    label,
    onChange,
    className,
    tgStyles
}) => {
    const handleChange = () => {
        if (!disabled) {
            onChange(!checked)
        }
    }

    const isTg = useIsTg()

    const checkboxStyles = isTg ? tgStyles?.radio : undefined
    const labelStyles = isTg ? tgStyles?.label : undefined

    return (
        <div className={`${s['radio-container']} ${disabled ? s.disabled : ''} ${className || ''}`}>
            <span className={`${s.radio} ${checked ? s.checked : ''}`}  onClick={handleChange} style={checkboxStyles}>
                {checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="black" />
                    </svg>
                )}
            </span>
            {label && <span className={`s['radio-label'] ${disabled ? s.disabled : ''}`} style={labelStyles}>{label}</span>}
        </div>
    )
}
