import { ChangeEvent, FC } from 'react'

import s from '../../styles/textarea.module.css'

export interface TextAreaProps {
    value: string;
    onChange: (newValue: string) => void;
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
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value
        onChange(newValue)
    }

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
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}
