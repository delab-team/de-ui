import { FC } from 'react'

import s from '../../styles/rich-cell.module.css'

type RichCellItemType = {
    icon: string;
    name: string;
    amount: number;
    currency: string;
}

export interface RichCellProps {
    items: RichCellItemType[]
    allLink: React.ReactNode
    variant: 'black' | 'white'
    style?: React.CSSProperties
    className?: string
}

const chevron = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.21967 2.46967C4.51256 2.17678 4.98744 2.17678 5.28033 2.46967L8.28033 5.46967C8.57322 5.76256 8.57322 6.23744 8.28033 6.53033L5.28033 9.53033C4.98744 9.82322 4.51256 9.82322 4.21967 9.53033C3.92678 9.23744 3.92678 8.76256 4.21967 8.46967L6.68934 6L4.21967 3.53033C3.92678 3.23744 3.92678 2.76256 4.21967 2.46967Z" fill="white"/>
</svg>

export const RichCell: FC<RichCellProps> = ({ items, allLink, variant, style, className }) => (
    <div className={`${s.richCell} ${variant === 'black' ? s.richCellBlack : s.richCellWhite} ${className || ''}`} style={style}>
        <div className={`${s.richCellTop} ${variant === 'black' ? s.richCellTopBlack : s.richCellTopWhite}`}>
            <div className={s.richTitle}>Balance</div>
            <div className={s.richChevron}>
                {allLink} {chevron}
            </div>
        </div>
        <div className={s.richItems}>
            {items.map((item, i: number) => (
                <div className={`${s.richItem} ${variant === 'black' ? s.richItemBlack : s.richItemWhite}`} key={i}>
                    <img src={item.icon} alt="icon" />
                    <div className={s.richItemInfo}>
                        <div className={s.richItemContent}>
                            <div className={`${s.richItemTitle} ${variant === 'black' ? s.richItemTitleBlack : s.richItemTitleWhite}`}>{item.name}</div>
                            <span className={`${s.richItemAmount} ${variant === 'black' ? s.richItemAmountBlack : s.richItemAmountWhite}`}>{item.amount}</span>
                            <span className={s.richItemCurrency}>{item.currency}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
