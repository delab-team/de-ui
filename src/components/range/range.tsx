import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/range.module.css'

export interface RangeProps {
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => void;
    className?: string;
    tgStyles?: {
        rangeInner?: React.CSSProperties | undefined;
        label?: React.CSSProperties | undefined;
        range?: React.CSSProperties | undefined;
        output?: React.CSSProperties | undefined;
    }
}

export const Range: FC<RangeProps> = ({
    label = 'Range',
    min = 0,
    max = 100,
    step = 1,
    value = min,
    onChange,
    className,
    tgStyles
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value)
        if (onChange) {
            onChange(newValue)
        }
    }

    const isTg = useIsTg()

    const rangeInnerTgStyles = isTg ? tgStyles?.rangeInner : undefined
    const labelTgStyles = isTg ? tgStyles?.label : undefined
    const rangeTgStyles = isTg ? tgStyles?.range : undefined
    const outputTgStyles = isTg ? tgStyles?.output : undefined

    return (
        <div className={`${s.rangeContainer} ${className || ''}`} style={rangeInnerTgStyles}>
            <label className={s.label} style={labelTgStyles}>{label}</label>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className={s.input}
                style={rangeTgStyles}
            />
            <output className={s.output} style={outputTgStyles}>{value}</output>
        </div>
    )
}
