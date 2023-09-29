import { FC, Fragment } from 'react'

import s from '../../styles/cell-buttons.module.css'

type ButtonCellType = {
    buttonComponent: React.ReactNode;
}

export interface ButtonsCellProps {
    buttons: ButtonCellType[]
    variant: 'white' | 'black'
    className?: string
    style?: React.CSSProperties
}

export const ButtonsCell: FC<ButtonsCellProps> = ({ buttons, variant, className, style }) => (
    <div className={`${s.inner} ${className || ''} ${variant === 'white' ? s.innerWhite : s.innerBlack}`} style={style}>
        {buttons.map((btn, i: number) => (
            <Fragment key={i}>
                {btn.buttonComponent}
            </Fragment>
        ))}
    </div>
)
