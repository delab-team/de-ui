import { CSSProperties, FC } from 'react'
import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/textarea.module.css'

export interface TextAreaProps {
    value: string;
    onChange: (...args: any[]) => void;
    placeholder?: string;
    className?: string;
    isError?: boolean;
    isLarge?: boolean;
    variant: 'white' | 'black';
    tgStyles?: CSSProperties | undefined
}

export const TextArea: FC<TextAreaProps> = ({
    value,
    onChange,
    placeholder,
    className,
    isError,
    isLarge,
    variant,
    tgStyles
}) => {
    const classNames = [
        s.textArea,
        className,
        isError ? s.error : '',
        isLarge ? s.large : '',
        variant === 'white' ? s.textAreaWhite : s.textAreaBlack
    ].join(' ')

    const isTg = useIsTg()

    const textAreaStyles = isTg ? tgStyles : undefined

    return (
        <textarea
            className={classNames}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={textAreaStyles}
        />
    )
}
