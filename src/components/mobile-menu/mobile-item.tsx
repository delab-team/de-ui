import { FC } from 'react'

import s from '../../styles/mobile-menu.module.css'

export interface MobileMenuItemProps {
    icon?: React.ReactNode;
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    onClick?: () => void;
    textStyle?: React.CSSProperties | undefined;
    itemStyle?: React.CSSProperties | undefined;
}

export const MobileMenuItem: FC<MobileMenuItemProps> = ({
    icon,
    text,
    backgroundColor = 'transparent',
    textColor = 'black',
    onClick,
    textStyle,
    itemStyle
}) => (
    <div
        className={s.mobileMenuItem}
        style={{ backgroundColor, color: textColor, ...itemStyle }}
        onClick={onClick}
    >
        {icon}
        <span style={textStyle}>{text}</span>
    </div>
)
