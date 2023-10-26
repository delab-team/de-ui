/* eslint-disable max-len */
import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import { MobileMenuItem, MobileMenuItemProps } from './mobile-item'

import s from '../../styles/mobile-menu.module.css'

export interface MobileMenuProps {
    items: MobileMenuItemProps[];
    borderRadius?: string;
    className?: string;
    style?: React.CSSProperties;
    tgStyles?: {
        menuContainer?: React.CSSProperties | undefined;
        itemStyle?: React.CSSProperties | undefined;
        itemTextStyle?: React.CSSProperties | undefined;
    }
    itemClassName?: string;
}

export const MobileMenu: FC<MobileMenuProps> = ({
    items,
    className,
    style,
    tgStyles,
    itemClassName
}) => {
    const mobileMenuClassName = `${s.mobileMenu} ${className || ''}`

    const isTg = useIsTg()

    const mobileStyles = isTg ? { ...style, ...tgStyles?.menuContainer } : style
    const textStyle = isTg ? tgStyles?.itemTextStyle : undefined
    const itemStyle = isTg ? tgStyles?.itemStyle : undefined

    return (
        <div className={mobileMenuClassName} style={mobileStyles}>
            {items.map((item, index) => (
                <MobileMenuItem key={index} textStyle={textStyle} itemStyle={itemStyle} itemClassName={itemClassName} {...item} />
            ))}
        </div>
    )
}
