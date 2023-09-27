/* eslint-disable max-len */
import { CSSProperties, FC } from 'react'

import s from '../../styles/mobile-header.module.css'

type MobileItem = {
    icon?: React.ReactNode
    text?: string
    backgroundColor?: string
    onClick?: () => void
    isActive?: boolean
    mobileComponent?: React.ReactNode
}

export interface MobileHeaderProps {
    mobileTop: (MobileItem | null)[]
    mobileBottom?: (MobileItem | null)[]
    mobileClassName?: string
    mobileTopClassName?: string
    mobileBottomClassName?: string
    activeTopColor?: string
    inactiveTopColor?: string
    activeBottomColor?: string
    inactiveBottomColor?: string
    backgroundHeader?: string | CSSProperties
    borderRadiusHeader?: string
}

export const MobileHeader: FC<MobileHeaderProps> = ({
    mobileTop,
    mobileBottom,
    mobileClassName,
    mobileTopClassName,
    mobileBottomClassName,
    activeTopColor = 'white',
    inactiveTopColor = 'black',
    activeBottomColor = 'white',
    inactiveBottomColor = 'black',
    backgroundHeader,
    borderRadiusHeader
}) => {
    let backgroundStyle: CSSProperties = {}

    if (typeof backgroundHeader === 'string') {
        backgroundStyle = { background: backgroundHeader }
    } else if (backgroundHeader) {
        backgroundStyle = backgroundHeader
    }

    if (borderRadiusHeader) {
        backgroundStyle.borderRadius = borderRadiusHeader
    }

    return (
        <div className={`${s.mobile} ${mobileClassName}`} style={backgroundStyle}>
            <div className={s.mobileTopContainer}>
                {mobileTop.map((el: MobileItem | null, i) => (
                    el !== null && (
                        <div key={i} className={`${s.mobileItem} ${s.mobileTopItem} ${mobileTopClassName} ${el.isActive ? s.activeItem : ''}`}>
                            {el.icon && <div className={s.mobileIcon}>{el.icon}</div>}
                            {el.text && (
                                <span
                                    className={s.mobileText}
                                    style={{
                                        backgroundColor: el.isActive ? el.backgroundColor || 'rgba(0, 0, 0, 0)' : 'transparent',
                                        color: el.isActive ? activeTopColor : inactiveTopColor
                                    }}
                                >
                                    {el.text}
                                </span>
                            )}
                            {el.mobileComponent && (
                                <div className={s.mobileInput}>
                                    {el.mobileComponent}
                                </div>
                            )}
                        </div>
                    )
                ))}
            </div>

            {mobileBottom && (
                <div className={`${s.mobileBottomContainer} ${mobileBottomClassName}`}>
                    {mobileBottom.map((el: MobileItem | null, i) => (
                        el !== null && (
                            <div key={i} className={`${s.mobileItem} ${s.mobileTopItem} ${mobileTopClassName} ${el.isActive ? s.activeItem : ''}`}>
                                {el.icon && <div className={s.mobileIcon}>{el.icon}</div>}
                                {el.text && (
                                    <span
                                        className={s.mobileText}
                                        style={{
                                            backgroundColor: el.isActive ? el.backgroundColor || 'rgba(0, 0, 0, 0)' : 'transparent',
                                            color: el.isActive ? activeBottomColor : inactiveBottomColor
                                        }}
                                    >
                                        {el.text}
                                    </span>
                                )}
                                {el.mobileComponent && (
                                    <div className={s.mobileInput}>
                                        {el.mobileComponent}
                                    </div>
                                )}
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    )
}
