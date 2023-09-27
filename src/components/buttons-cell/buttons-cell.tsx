import { FC, Fragment } from 'react'

import s from '../../styles/cell-buttons.module.css'

type ButtonCellType = {
    buttonComponent: React.ReactNode;
}

export interface ButtonsCellProps {
    buttons: ButtonCellType[]
    variant: 'white' | 'black'
    className?: string
}

export const ButtonsCell: FC<ButtonsCellProps> = ({ buttons, variant, className }) => (
    <div className={`${s.inner} ${className || ''} ${variant === 'white' ? s.innerWhite : s.innerBlack}`}>
        {buttons.map((btn, i: number) => (
            <Fragment key={i}>
                {btn.buttonComponent}
            </Fragment>
        ))}
    </div>
)
