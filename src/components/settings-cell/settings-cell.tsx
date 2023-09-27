import { FC } from 'react'

import s from '../../styles/settings-cell.module.css'

export interface SettingsCellProps {
    variant: 'white' | 'black';
    items: {
        label: string
        text: string
        onClick?: () => void
    }[];
    className?: string;
}

export const SettingsCell: FC<SettingsCellProps> = ({ variant, items, className }) => (
    <div className={`${s.inner} ${variant === 'white' ? s.innerWhite : s.innerBlack} ${className || ''}`}>
        <div className={s.innerTitle}>Settings</div>
        <ul>
            {items.map((el, i: number) => (
                <li className={`${s.item} ${variant === 'white' ? s.itemWhite : s.itemBlack}`} key={i}>
                    <span className={`${s.itemLabel} ${variant === 'white' ? s.itemLabelWhite : s.itemLabelBlack}`}>{el.label}</span>
                    <span className={s.itemText} onClick={el.onClick}>{el.text}</span>
                </li>
            ))}
        </ul>
    </div>
)
