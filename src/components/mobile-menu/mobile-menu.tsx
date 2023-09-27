import { CSSProperties, FC } from 'react'
import { MobileMenuItem, MobileMenuItemProps } from './mobile-item'

import s from '../../styles/mobile-menu.module.css'

export interface MobileMenuProps {
    items: MobileMenuItemProps[];
    backgroundMenu?: string | CSSProperties;
    borderRadius?: string;
    className?: string;
}

export const MobileMenu: FC<MobileMenuProps> = ({
    items,
    backgroundMenu,
    borderRadius,
    className
}) => {
    let backgroundStyle: CSSProperties = {}

    if (typeof backgroundMenu === 'string') {
        backgroundStyle = { background: backgroundMenu }
    } else if (backgroundMenu) {
        backgroundStyle = backgroundMenu
    }

    if (borderRadius) {
        backgroundStyle.borderRadius = borderRadius
    }

    const mobileMenuClassName = `${s.mobileMenu} ${className || ''}`

    return (
        <div className={mobileMenuClassName} style={backgroundStyle}>
            {items.map((item, index) => (
                <MobileMenuItem key={index} {...item} />
            ))}
        </div>
    )
}
