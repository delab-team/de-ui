import { FC, useState } from 'react'

import s from '../../styles/toggle.module.css'

export interface ToggleProps {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (isChecked: boolean) => void;
    size?: 'small' | 'default' | 'large';
    color?: 'red' | 'green' | 'purple' | 'yellow' | 'teal' | 'orange';
}

export const Toggle: FC<ToggleProps> = ({
    label,
    disabled = false,
    checked = false,
    onChange,
    size = 'default',
    color = 'default'
}) => {
    const [ isChecked, setIsChecked ] = useState<boolean>(checked)

    const toggleHandler = () => {
        if (!disabled) {
            const newCheckedState = !isChecked
            setIsChecked(newCheckedState)

            if (onChange) {
                onChange(newCheckedState)
            }
        }
    }

    return (
        <div className={`${s.toggle} ${disabled ? s.disabled : ''} ${s[size]} ${s[color]}`}>
            {label && <label className={s.label}>{label}</label>}
            <div className={`${s.switch} ${isChecked ? s.checked : ''}`} onClick={toggleHandler}>
                <div className={`${s.slider} ${isChecked ? s.sliderOn : ''}`} />
            </div>
        </div>
    )
}
