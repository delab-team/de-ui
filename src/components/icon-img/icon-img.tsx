import { FC } from 'react'

import s from '../../styles/icon-img.module.css'

export interface IconImgProps {
    src: string;
    size?: 16 | 20 | 24 | 32 | 36 | 48;
    type?: 'default' | 'round';
    alt?: string;
    className?: string;
}

export const IconImg: FC<IconImgProps> = ({
    src,
    size = 24,
    type = 'default',
    alt = 'Icon',
    className,
    ...restProps
}) => (
    <img
        src={src}
        alt={alt}
        {...restProps}
        className={`${s.icon} ${s[`icon-${size}`]} ${s[`${type}-icon`]} ${className || ''}`}
    />
)
