/* eslint-disable @typescript-eslint/no-shadow */
import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/text.module.css'

export interface TextProps {
    fontSize?: 'small' | 'medium' | 'large';
    fontWeight?: 'normal' | 'bold' | 'light' | 'medium' | 'semibold';
    fontFamily?: string;
    color?: string;
    className?: string;
    children?: React.ReactNode;
    tgStyles?: React.CSSProperties;
}

export const Text: FC<TextProps> = ({
    fontSize,
    fontWeight,
    fontFamily,
    color,
    className,
    children,
    tgStyles
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

    const isTg = useIsTg()

    const textStyles = isTg ? { ...textStyle, ...tgStyles } : textStyle

    return <p className={classNames} style={textStyles}>{children}</p>
}
