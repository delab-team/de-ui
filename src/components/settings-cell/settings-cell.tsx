import { FC } from 'react'
import { v1 } from 'uuid'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/settings-cell.module.css'

export interface SettingsCellProps {
    variant: 'white' | 'black';
    items: {
        label: string
        text: string
        onClick?: () => void
    }[];
    className?: string;
    style?: React.CSSProperties;
    tgStyles?: {
        inner?: React.CSSProperties | undefined;
        innerTitle?: React.CSSProperties | undefined;
        settingsItem?: React.CSSProperties | undefined;
        settingsText?: React.CSSProperties | undefined;
    }
}

export const SettingsCell: FC<SettingsCellProps> = ({
    variant,
    items,
    className,
    style,
    tgStyles
}) => {
    const isTg = useIsTg()

    const innerStyles = isTg ? { ...style, ...tgStyles?.inner } : style
    const innerTitleStyles = isTg ? tgStyles?.innerTitle : undefined
    const settingsItem = isTg ? tgStyles?.settingsItem : undefined
    const settingsText = isTg ? tgStyles?.settingsText : undefined

    return (
        <div className={`${s.inner} ${variant === 'white' ? s.innerWhite : s.innerBlack} ${className || ''}`} style={innerStyles}>
            <div className={s.innerTitle} style={innerTitleStyles}>Settings</div>
            <ul>
                {items.map(el => (
                    <li className={`${s.item} ${variant === 'white' ? s.itemWhite : s.itemBlack}`} key={v1()} style={settingsItem}>
                        <span className={`${s.itemLabel} ${variant === 'white' ? s.itemLabelWhite : s.itemLabelBlack}`}>{el.label}</span>
                        <span
                            className={s.itemText}
                            onClick={el.onClick}
                            style={settingsText}
                        >
                            {el.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
