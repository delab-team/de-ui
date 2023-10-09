import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/header-title.module.css'

export interface HeaderTitleProps {
    title: string
    subtitle: string
    variant: 'white' | 'black'
    className?: string
    containerWidth?: string
    style: React.CSSProperties
    tgStyles: {
        header?: React.CSSProperties | undefined
        title?: React.CSSProperties | undefined
        subtitle?: React.CSSProperties | undefined
    }
}

export const HeaderTitle: FC<HeaderTitleProps> = ({
    title,
    subtitle,
    variant,
    className,
    containerWidth,
    style,
    tgStyles
}) => {
    const styles: React.CSSProperties = {
        ...style,
        maxWidth: `${containerWidth}`
    }

    const isTg = useIsTg()

    const headerStyles = isTg ? { ...styles, ...tgStyles.header } : styles
    const titleStyles = isTg ? tgStyles.title : undefined
    const subtitleStyles = isTg ? tgStyles.subtitle : undefined

    return (
        <header className={`${s.header} ${className || ''} ${variant === 'white' ? s.headerWhite : s.headerBlack}`} style={headerStyles}>
            <div className={s.title} style={titleStyles}>{title}</div>
            <div className={s.subtitle} style={subtitleStyles}>{subtitle}</div>
        </header>
    )
}
