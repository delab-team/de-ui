import { FC } from 'react'

import s from '../../styles/mobile-menu.module.css'

export interface MobileMenuItemProps {
    icon?: React.ReactNode;
    text: string;
    backgroundColor?: string;
    textColor?: string;
    onClick?: () => void;
}

export const MobileMenuItem: FC<MobileMenuItemProps> = ({
    icon,
    text,
    backgroundColor = 'transparent',
    textColor = 'black',
    onClick
}) => (
    <div
        className={s.mobileMenuItem}
        style={{ backgroundColor, color: textColor }}
        onClick={onClick}
    >
        {icon}
        <span>{text}</span>
    </div>
)
