import { FC } from 'react'

import s from '../../styles/title.module.css'

export interface TitleProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontWeight?: 'normal' | 'bold' | 'light' | 'medium' | 'semibold';
    fontFamily?: string;
    color?: string;
    customClassName?: string;
    children: React.ReactNode;
}

export const Title: FC<TitleProps> = ({
    variant,
    fontWeight,
    fontFamily,
    color,
    customClassName,
    children
}) => {
    const classNames = [
        s.Typography,
        s[`Typography-${variant}`],
        fontWeight === 'bold' && s['Typography-bold'],
        customClassName
    ]
        .filter(className => className)
        .join(' ')

    let title
    switch (variant) {
        case 'h1':
            title = <h1 className={classNames} style={{ color, fontFamily }}>{children}</h1>
            break
        case 'h2':
            title = <h2 className={classNames} style={{ color, fontFamily }}>{children}</h2>
            break
        case 'h3':
            title = <h3 className={classNames} style={{ color, fontFamily }}>{children}</h3>
            break
        case 'h4':
            title = <h4 className={classNames} style={{ color, fontFamily }}>{children}</h4>
            break
        case 'h5':
            title = <h5 className={classNames} style={{ color, fontFamily }}>{children}</h5>
            break
        case 'h6':
            title = <h6 className={classNames} style={{ color, fontFamily }}>{children}</h6>
            break
        default:
            title = <div className={classNames} style={{ color, fontFamily }}>{children}</div>
            break
    }

    return title
}
