import { FC } from 'react'

import s from '../../styles/rich-cell-item.module.css'

export interface RichCellItemProps {
    icon: string;
    name: string;
    date: string;
    amount: string;
    variant: 'dark' | 'white'
}

export const RichCellItem: FC<RichCellItemProps> = ({
    icon,
    name,
    date,
    amount,
    variant
}) => (
    <div className={`${s.item} ${variant === 'dark' ? s.darkItem : s.whiteItem}`}>
        <div className={s.itemInfo}>
            <img src={icon} alt="icon" />
            <div className={s.itemContent}>
                <div className={s.itemContentTitle}>{name}</div>
                <span className={s.itemContentDate}>{date}</span>
            </div>
        </div>
        <div className={s.sum}>
            {amount}
        </div>
    </div>
)
