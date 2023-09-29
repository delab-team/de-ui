import { FC } from 'react'

import s from '../../styles/header-panel.module.css'

export interface HeaderPanelProps {
    title: string
    className?: string
    containerWidth: number
    variant: 'white' | 'black'
    actionLeft?: React.ReactNode
    actionRight?: React.ReactNode
    style?: React.CSSProperties
}

export const HeaderPanel: FC<HeaderPanelProps> = ({
    title,
    className,
    containerWidth,
    variant,
    actionLeft,
    actionRight,
    style
}) => {
    const headerStyles: React.CSSProperties = {
        ...style,
        maxWidth: `${containerWidth}px`
    }

    return (
        <header
            className={`${s.header} 
            ${variant === 'white' ? s.headerWhite : s.headerBlack}
            ${className || ''}`}
            style={headerStyles}
        >
            {actionLeft}
            <div className={s.headerTitle}>{title}</div>
            {actionRight}
        </header>
    )
}
