import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/spinner.module.css'

export interface SpinnerProps {
    size?: 'small' | 'medium' | 'large'
    color?: string
    className?: string
    tgStyles?: string | undefined
}

export const Spinner: FC<SpinnerProps> = ({ size = 'medium', color = '#000000', className, tgStyles }) => {
    const spinnerClassName = `${s.spinner} ${s[size]}`

    const isTg = useIsTg()

    return (
        <div className={`${spinnerClassName} ${className || ''}`} style={{ borderTopColor: isTg ? tgStyles || color : color }}></div>
    )
}
