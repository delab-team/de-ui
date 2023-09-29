import { FC } from 'react'

import s from '../../styles/action-cell.module.css'

export interface ActionCellProps {
    items: {
        icon: React.ReactNode;
        title: string;
        onClick?: () => void;
        className?: string;
    }[]
    variant: 'white' | 'black'
    className?: string
    style?: React.CSSProperties
}

export const ActionCell: FC<ActionCellProps> = ({ items, variant, className, style }) => (
    <div className={`${s.inner} ${variant === 'white' ? s.innerWhite : s.innerBlack} ${className || ''}`} style={style}>
        {items.map((el, i) => (
            <div key={i} className={`${s.item} ${el.className || ''} ${variant === 'white' ? s.itemWhite : s.itemBlack}`} onClick={el.onClick}>
                {el.icon}
                <span>{el.title}</span>
            </div>
        ))}
    </div>
)
