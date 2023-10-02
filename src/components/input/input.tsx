import { useIsTg } from '../../hooks/useIsTg'

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
    style?: React.CSSProperties
    tgStyles?: {
        inputWrapper?: React.CSSProperties | undefined;
        label?: React.CSSProperties | undefined;
        error?: React.CSSProperties | undefined;
        input?: React.CSSProperties | undefined;
    }
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
    style,
    tgStyles,
    ...rest
}) => {
    const sizeClass = s[size]

    const isTg = useIsTg()

    const wrapperStyles = isTg ? tgStyles?.inputWrapper : undefined
    const labelStyles = isTg ? tgStyles?.label : undefined
    const errorStyles = isTg ? tgStyles?.error : undefined

    const inputStyles = isTg ? { ...style, ...tgStyles?.input } : undefined

    return (
        <div className={`${s.inputWrapper} ${sizeClass}`} style={wrapperStyles}>
            {label && <label className={s.label} style={labelStyles}>{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${s.input} ${sizeClass} ${inputVariantType[variant]} ${className || ''}`}
                style={inputStyles}
                {...rest}
            />
            {error && <div className={s.error} style={errorStyles}>{error}</div>}
        </div>
    )
}
