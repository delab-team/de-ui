import { FC, useState } from 'react'

import { IconSelector } from '../icon-selector/icon-selector'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/tooltip.module.css'

export interface TooltipProps {
    text: string
    children: React.ReactNode
    iconColor?: string
    className?: string
    tgStyles?: {
        tooltipText?: React.CSSProperties | undefined
        tooltipInner?: React.CSSProperties | undefined
        iconButton: string
        button?: React.CSSProperties | undefined
    }
}

export const Tooltip: FC<TooltipProps> = ({ text, children, className, iconColor, tgStyles }) => {
    const [ isTooltipVisible, setTooltipVisible ] = useState<boolean>(false)

    const isTg = useIsTg()

    const showTooltip = () => {
        setTooltipVisible(true)
    }

    const hideTooltip = () => {
        setTooltipVisible(false)
    }

    const tooltipTextStyles = isTg ? tgStyles?.tooltipText : undefined
    const tooltipInnerText = isTg ? tgStyles?.tooltipInner : undefined
    const iconButton = isTg ? (tgStyles?.iconButton || iconColor) : iconColor
    const button = isTg ? tgStyles?.button : undefined

    return (
        <div className={`${s.tooltipContainer} ${className || ''}`}>
            <div
                className={s.tooltipTrigger}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                style={button}
            >
                {children}
                <IconSelector id="info" size="23px" className={s.infoIcon} color={iconButton} />
            </div>
            {isTooltipVisible && (
                <div className={s.tooltip} style={tooltipInnerText}>
                    <span className={s.tooltipText} style={tooltipTextStyles}>{text}</span>
                </div>
            )}
        </div>
    )
}
