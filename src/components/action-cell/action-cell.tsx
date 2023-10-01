import { CSSProperties, FC } from 'react'

import { useAppSelector } from '../../store'

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
    tgStyles?: {
        cellInner?: CSSProperties | undefined
        title?: CSSProperties | undefined
    }
    style: CSSProperties
}

export const ActionCell: FC<ActionCellProps> = ({ items, variant, className, tgStyles, style }) => {
    const isTg = useAppSelector(state => state.tg.isTg)

    const mergedStyles = isTg ? { ...style, ...tgStyles?.cellInner } : style
    const titleStyles = isTg ? tgStyles?.title : undefined

    return (
        <div className={`${s.inner} ${variant === 'white' ? s.innerWhite : s.innerBlack} ${className || ''}`} style={mergedStyles}>
            {items.map((el, i) => (
                <div key={i} className={`${s.item} ${el.className || ''} ${variant === 'white' ? s.itemWhite : s.itemBlack}`} onClick={el.onClick}>
                    {el.icon}
                    <span style={titleStyles}>{el.title}</span>
                </div>
            ))}
        </div>
    )
}
