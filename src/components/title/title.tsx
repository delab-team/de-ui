/* eslint-disable @typescript-eslint/no-shadow */
import { CSSProperties, FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/title.module.css'

export interface TitleProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontWeight?: 'normal' | 'bold' | 'light' | 'medium' | 'semibold';
    fontFamily?: string;
    color?: string;
    className?: string;
    children: React.ReactNode;
    tgStyles?: CSSProperties | undefined;
}

export const Title: FC<TitleProps> = ({
    variant = 'h1',
    fontWeight,
    fontFamily,
    color,
    className,
    children,
    tgStyles
}) => {
    const classNames = [
        s.Typography,
        s[`Typography-${variant}`],
        fontWeight && s[`Typography-${fontWeight}`],
        className
    ]
        .filter(className => className)
        .join(' ')

    const titleStyles = { color, fontFamily }

    const isTg = useIsTg()

    const titleStyle = isTg ? { ...titleStyles, ...tgStyles } : titleStyles

    let title
    switch (variant) {
        case 'h1':
            title = <h1 className={classNames} style={titleStyle}>{children}</h1>
            break
        case 'h2':
            title = <h2 className={classNames} style={titleStyle}>{children}</h2>
            break
        case 'h3':
            title = <h3 className={classNames} style={titleStyle}>{children}</h3>
            break
        case 'h4':
            title = <h4 className={classNames} style={titleStyle}>{children}</h4>
            break
        case 'h5':
            title = <h5 className={classNames} style={titleStyle}>{children}</h5>
            break
        case 'h6':
            title = <h6 className={classNames} style={titleStyle}>{children}</h6>
            break
        default:
            title = <div className={classNames} style={titleStyle}>{children}</div>
            break
    }

    return title
}
