import { FC } from 'react'

import s from '../../styles/textarea.module.css'

export interface TextAreaProps {
    value: string;
    onChange: (...args: any[]) => void;
    placeholder?: string;
    className?: string;
    isError?: boolean;
    isLarge?: boolean;
    variant: 'white' | 'black';
}

export const TextArea: FC<TextAreaProps> = ({
    value,
    onChange,
    placeholder,
    className,
    isError,
    isLarge,
    variant
}) => {
    const classNames = [
        s.textArea,
        className,
        isError ? s.error : '',
        isLarge ? s.large : '',
        variant === 'white' ? s.textAreaWhite : s.textAreaBlack
    ].join(' ')

    return (
        <textarea
            className={classNames}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}
