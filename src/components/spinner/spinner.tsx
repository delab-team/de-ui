import { FC } from 'react'

import s from '../../styles/spinner.module.css'

export interface SpinnerProps {
    size?: 'small' | 'medium' | 'large'
    color?: string
    className?: string
}

export const Spinner: FC<SpinnerProps> = ({ size = 'medium', color = '#000000', className }) => {
    const spinnerClassName = `${s.spinner} ${s[size]}`

    return (
        <div className={`${spinnerClassName} ${className || ''}`} style={{ borderTopColor: color }}></div>
    )
}
