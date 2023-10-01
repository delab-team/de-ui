import { FC } from 'react'

import s from '../../styles/header-title.module.css'

export interface HeaderTitleProps {
    title: string
    subtitle: string
    variant: 'white' | 'black'
    className?: string
    containerWidth: number
    style: React.CSSProperties
}

export const HeaderTitle: FC<HeaderTitleProps> = ({
    title,
    subtitle,
    variant,
    className,
    containerWidth,
    style
}) => {
    const styles: React.CSSProperties = {
        ...style,
        maxWidth: `${containerWidth}px`
    }
    return (
        <header className={`${s.header} ${className || ''} ${variant === 'white' ? s.headerWhite : s.headerBlack}`} style={styles}>
            <div className={s.title}>{title}</div>
            <div className={s.subtitle}>{subtitle}</div>
        </header>
    )
}
