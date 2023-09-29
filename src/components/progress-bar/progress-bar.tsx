import { FC } from 'react'

import s from '../../styles/progress-bar.module.css'

export interface ProgressBarProps {
    type: 'default' | 'withLabel' | 'percentOnly';
    size: 'small' | 'large' | 'default'
    color: 'dark' | 'blue' | 'green' | 'red' | 'purple'
    progress: number
    label?: string
    className?: string
}

export const ProgressBar: FC<ProgressBarProps> = ({
    type,
    size,
    color,
    progress,
    label,
    className
}) => {
    const getProgressBarClass = () => {
        let progressBarClass = s.progressBar

        if (type === 'withLabel') {
            progressBarClass += ` ${s.withLabel}`
        }

        if (size === 'small') {
            progressBarClass += ` ${s.small}`
        } else if (size === 'large') {
            progressBarClass += ` ${s.large}`
        }

        switch (color) {
            case 'dark':
                progressBarClass += ` ${s.dark}`
                break
            case 'blue':
                progressBarClass += ` ${s.blue}`
                break
            case 'green':
                progressBarClass += ` ${s.green}`
                break
            case 'red':
                progressBarClass += ` ${s.red}`
                break
            case 'purple':
                progressBarClass += ` ${s.purple}`
                break
            default:
                progressBarClass += ` ${s.default}`
                break
        }

        return progressBarClass
    }

    return (
        <div className={s.progressBarContainer}>
            <div className={`${getProgressBarClass()} ${className || ''}`} style={{ width: `${progress}%` }}>
                {type === 'withLabel' && (
                    <div className={s.label}>{label}</div>
                )}
                {type === 'percentOnly' && `${progress}%`}
            </div>
        </div>
    )
}
