import { FC } from 'react'

import s from '../../styles/range.module.css'

export interface RangeProps {
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => void;
}

export const Range: FC<RangeProps> = ({
    label = 'Range',
    min = 0,
    max = 100,
    step = 1,
    value = min,
    onChange
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value)
        if (onChange) {
            onChange(newValue)
        }
    }

    return (
        <div className={s.rangeContainer}>
            <label className={s.label}>{label}</label>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className={s.input}
            />
            <output className={s.output}>{value}</output>
        </div>
    )
}
