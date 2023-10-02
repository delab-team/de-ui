import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/header-panel.module.css'

export interface HeaderPanelProps {
    title: string
    className?: string
    containerWidth?: number | string
    variant: 'white' | 'black'
    actionLeft?: React.ReactNode
    actionRight?: React.ReactNode
    style?: React.CSSProperties
    tgStyles?: {
        header?: React.CSSProperties | undefined
        headerTitle?: React.CSSProperties | undefined
    }
}

export const HeaderPanel: FC<HeaderPanelProps> = ({
    title,
    className,
    containerWidth,
    variant,
    actionLeft,
    actionRight,
    style,
    tgStyles
}) => {
    const headerStyles: React.CSSProperties = {
        ...style,
        maxWidth: `${containerWidth}px`
    }

    const isTg = useIsTg()

    const headerStyle = isTg ? { ...headerStyles, ...tgStyles?.header } : headerStyles
    const headerTitle = isTg ? tgStyles?.headerTitle : undefined

    return (
        <header
            className={`${s.header} 
            ${variant === 'white' ? s.headerWhite : s.headerBlack}
            ${className || ''}`}
            style={headerStyle}
        >
            {actionLeft}
            <div className={s.headerTitle} style={headerTitle}>{title}</div>
            {actionRight}
        </header>
    )
}
