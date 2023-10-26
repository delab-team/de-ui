import { FC } from 'react'
import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/mobile-menu.module.css'

export interface MobileMenuItemProps {
    icon?: React.ReactNode;
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    onClick?: () => void;
    textStyle?: React.CSSProperties | undefined;
    itemStyle?: React.CSSProperties | undefined;
    tgStyles?: {
        item?: React.CSSProperties | undefined;
        text?: React.CSSProperties | undefined;
    };
    itemClassName?: string;
}

export const MobileMenuItem: FC<MobileMenuItemProps> = ({
    icon,
    text,
    backgroundColor = 'transparent',
    textColor = 'black',
    onClick,
    textStyle,
    itemStyle,
    tgStyles,
    itemClassName
}) => {
    const isTg = useIsTg()

    const itemStyles = isTg ? tgStyles?.item : itemStyle
    const textStyles = isTg ? tgStyles?.text : textStyle

    return (
        <div
            className={`${s.mobileMenuItem} ${itemClassName || ''}`}
            style={{ backgroundColor, color: textColor, ...itemStyle, ...itemStyles }}
            onClick={onClick}
        >
            {icon}
            <span style={{ ...textStyle, ...textStyles }}>{text}</span>
        </div>
    )
}
