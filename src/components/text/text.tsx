/* eslint-disable @typescript-eslint/no-shadow */
import { FC } from 'react'
import s from '../../styles/text.module.css'

export interface TextProps {
    fontSize?: 'small' | 'medium' | 'large';
    fontWeight?: 'normal' | 'bold' | 'light' | 'medium' | 'semibold';
    fontFamily?: string;
    color?: string;
    className?: string;
    children: React.ReactNode;
}

export const Text: FC<TextProps> = ({
    fontSize,
    fontWeight,
    fontFamily,
    color,
    className,
    children
}) => {
    const classNames = [
        s.Text,
        fontSize && s[`Text-${fontSize}`],
        fontWeight && s[`Text-${fontWeight}`],
        className
    ]
        .filter(className => className)
        .join(' ')

    const textStyle: React.CSSProperties = {
        color: color || undefined,
        fontFamily: fontFamily || undefined
    }

    return <p className={classNames} style={textStyle}>{children}</p>
}
