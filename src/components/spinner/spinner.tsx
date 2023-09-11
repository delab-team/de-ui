import { FC } from 'react'

import s from './spinner.module.css'

export interface SpinnerProps {
    size?: 'small' | 'medium' | 'large'
    color?: string
}

export const Spinner: FC<SpinnerProps> = ({ size = 'medium', color = '#000000' }) => {
    const spinnerClassName = `${s.spinner} ${s[size]}`

    return (
        <div className={spinnerClassName} style={{ borderTopColor: color }}></div>
    )
}
