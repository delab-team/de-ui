import { FC, Fragment } from 'react'

import { useAppSelector } from '../../store'

import s from '../../styles/cell-buttons.module.css'

type ButtonCellType = {
    buttonComponent: React.ReactNode;
}

export interface ButtonsCellProps {
    buttons: ButtonCellType[]
    variant: 'white' | 'black'
    className?: string
    style?: React.CSSProperties
    tgStyles?: {
        cellInner?: React.CSSProperties | undefined
    }
}

export const ButtonsCell: FC<ButtonsCellProps> = ({
    buttons,
    variant,
    className,
    style,
    tgStyles
}) => {
    const isTg = useAppSelector(state => state.tg.isTg)

    const mergedStyles = isTg ? { ...style, ...tgStyles } : style

    return (
        <div className={`${s.inner} ${className || ''} ${variant === 'white' ? s.innerWhite : s.innerBlack}`} style={mergedStyles}>
            {buttons.map((btn, i: number) => (
                <Fragment key={i}>
                    {btn.buttonComponent}
                </Fragment>
            ))}
        </div>
    )
}
