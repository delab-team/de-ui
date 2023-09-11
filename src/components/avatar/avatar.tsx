import { FC } from 'react'

import s from './avatar.module.css'

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
}

export const Avatar: FC<AvatarProps> = ({
    size = 48,
    className,
    gradientColor,
    initials,
    fallbackIcon,
    children,
    ...restProps
}: AvatarProps) => {
    const gradientClass = gradientColor ? gradientStyles[gradientColor] : ''

    return (
        <div
            className={`${s.Avatar} ${gradientClass} ${className}`}
            style={{ width: size, height: size }}
            {...restProps}
        >
            {initials && (
                <div className={s.Avatar__initials}>
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
