import { FC, useState } from 'react'
import { IconSelector } from '../icon-selector/icon-selector'

import s from '../../styles/tooltip.module.css'

export interface TooltipProps {
    text: string
    children: React.ReactNode
}

export const Tooltip: FC<TooltipProps> = ({ text, children }) => {
    const [ isTooltipVisible, setTooltipVisible ] = useState<boolean>(false)

    const showTooltip = () => {
        setTooltipVisible(true)
    }

    const hideTooltip = () => {
        setTooltipVisible(false)
    }

    return (
        <div className={s.tooltipContainer}>
            <div
                className={s.tooltipTrigger}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
            >
                {children}
                <IconSelector id="info" className={s.infoIcon} />
            </div>
            {isTooltipVisible && (
                <div className={s.tooltip}>
                    <span className={s.tooltipText}>{text}</span>
                </div>
            )}
        </div>
    )
}
