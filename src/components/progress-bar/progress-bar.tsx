import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/progress-bar.module.css'

export interface ProgressBarProps {
    type: 'default' | 'withLabel' | 'percentOnly';
    size: 'small' | 'large' | 'default'
    color: 'dark' | 'blue' | 'green' | 'red' | 'purple'
    progress: number
    label?: string
    className?: string
    tgStyles?: {
        progressBar?: React.CSSProperties | undefined;
        label?: React.CSSProperties | undefined
    }
}

export const ProgressBar: FC<ProgressBarProps> = ({
    type,
    size,
    color,
    progress,
    label,
    className,
    tgStyles
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

    const isTg = useIsTg()

    const barStyle = { width: `${progress}%` }

    const progressBarStyles = isTg ? { ...barStyle, ...tgStyles?.progressBar } : barStyle
    const labelStyles = isTg ? tgStyles?.label : undefined

    return (
        <div className={s.progressBarContainer}>
            <div className={`${getProgressBarClass()} ${className || ''}`} style={progressBarStyles}>
                {type === 'withLabel' && (
                    <div className={s.label} style={labelStyles}>{label}</div>
                )}
                {type === 'percentOnly' && `${progress}%`}
            </div>
        </div>
    )
}
