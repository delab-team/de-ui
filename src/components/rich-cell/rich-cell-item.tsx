import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/rich-cell-item.module.css'

export interface RichCellItemProps {
    icon: string;
    name: string;
    date: string;
    amount: string;
    variant: 'dark' | 'white'
    style?: React.CSSProperties;
    className?: string;
    tgStyles?: {
        innerStyle?: React.CSSProperties | undefined;
        itemTitle?: React.CSSProperties | undefined;
        itemDate?: React.CSSProperties | undefined;
        itemSum?: React.CSSProperties | undefined;
    }
}

export const RichCellItem: FC<RichCellItemProps> = ({
    icon,
    name,
    date,
    amount,
    variant,
    style,
    className,
    tgStyles
}) => {
    const isTg = useIsTg()

    const innerStyle = isTg ? { ...style, ...tgStyles?.innerStyle } : style
    const itemTitleStyle = isTg ? tgStyles?.itemTitle : undefined
    const itemDateStyle = isTg ? tgStyles?.itemDate : undefined
    const itemSumStyle = isTg ? tgStyles?.itemSum : undefined

    return (
        <div className={`${s.item} ${variant === 'dark' ? s.darkItem : s.whiteItem} ${className || ''}`} style={innerStyle}>
            <div className={s.itemInfo}>
                <img src={icon} alt="icon" />
                <div className={s.itemContent}>
                    <div className={s.itemContentTitle} style={itemTitleStyle}>{name}</div>
                    <span className={s.itemContentDate} style={itemDateStyle}>{date}</span>
                </div>
            </div>
            <div className={s.sum} style={itemSumStyle}>
                {amount}
            </div>
        </div>
    )
}
