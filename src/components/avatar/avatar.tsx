import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/avatar.module.css'

type GradientColor = keyof typeof gradientStyles

const gradientStyles = {
    red: s['Avatar--gradient-red'],
    orange: s['Avatar--gradient-orange'],
    yellow: s['Avatar--gradient-yellow'],
    green: s['Avatar--gradient-green'],
    blue: s['Avatar--gradient-blue'],
    'l-blue': s['Avatar--gradient-l-blue'],
    violet: s['Avatar--gradient-violet']
} as const

export interface AvatarProps {
    size?: number;
    className?: string;
    gradientColor?: GradientColor;
    initials?: string;
    fallbackIcon?: string;
    children?: React.ReactNode;
    tgStyles?: {
        avatarInner?: React.CSSProperties;
        initials?: React.CSSProperties | undefined;
    }
}

export const Avatar: FC<AvatarProps> = ({
    size = 48,
    className,
    gradientColor,
    initials,
    fallbackIcon,
    children,
    tgStyles,
    ...restProps
}: AvatarProps) => {
    const gradientClass = gradientColor ? gradientStyles[gradientColor] : ''

    const isTg = useIsTg()

    const innerStyles = { width: size, height: size }

    const innerStyle = isTg ? { ...innerStyles, ...tgStyles } : innerStyles
    const initialsStyle = isTg ? tgStyles?.initials : undefined

    return (
        <div
            className={`${s.Avatar} ${gradientClass} ${className}`}
            style={innerStyle}
            {...restProps}
        >
            {initials && (
                <div className={s.Avatar__initials} style={initialsStyle}>
                    {initials}
                </div>
            )}
            {fallbackIcon && !initials && (
                <img
                    src={fallbackIcon}
                    alt="Fallback Icon"
                    className={s['Avatar__fallback-icon']}
                />
            )}
            {children}
        </div>
    )
}
