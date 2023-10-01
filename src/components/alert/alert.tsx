/* eslint-disable consistent-return */
/* eslint-disable max-len */
import { ReactNode, useState, useEffect, CSSProperties } from 'react'

import s from '../../styles/alert.module.css'

export interface AlertProps {
    type: 'default' | 'icon' | 'important' | 'rounded' | 'border' | 'extensive-content';
    onClose?: () => void;
    icon?: ReactNode;
    children: ReactNode;
    autoCloseTimeout?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
    centered?: boolean;
    className?: string;
    isTg?: boolean;
    tgStyles?: CSSProperties
}

export const Alert: React.FC<AlertProps> = ({ type, onClose, icon, children, autoCloseTimeout, position, centered, className, tgStyles }) => {
    const [ isVisible, setIsVisible ] = useState<boolean>(true)

    const getAlertClass = () => {
        switch (type) {
            case 'icon':
                return s.iconAlert
            case 'important':
                return s.importantAlert
            case 'rounded':
                return s.roundedAlert
            case 'border':
                return s.borderAlert
            case 'extensive-content':
                return s.extensiveContentAlert
            default:
                return s.defaultAlert
        }
    }

    const getAlertPositionClass = () => {
        if (centered) {
            return s.centeredAlert
        }

        switch (position) {
            case 'top-left':
                return s.topLeftAlert
            case 'top-right':
                return s.topRightAlert
            case 'bottom-left':
                return s.bottomLeftAlert
            case 'bottom-right':
                return s.bottomRightAlert
            default:
                return ''
        }
    }

    useEffect(() => {
        if (autoCloseTimeout && isVisible) {
            const timerId = setTimeout(() => {
                setIsVisible(false)
                if (onClose) {
                    onClose()
                }
            }, autoCloseTimeout)

            return () => {
                clearTimeout(timerId)
            }
        }
    }, [ autoCloseTimeout, isVisible, onClose ])

    const handleAlertClose = () => {
        setIsVisible(false)
        if (onClose) {
            onClose()
        }
    }

    return isVisible ? (
        <div className={`${s.alert} ${getAlertClass()} ${getAlertPositionClass()} ${className || ''}`} style={tgStyles}>
            {icon && <div className={s.alertIcon}>{icon}</div>}
            <div className={s.alertContent}>{children}</div>
            {onClose && (
                <button className={s.closeButton} onClick={handleAlertClose}>
                    &times;
                </button>
            )}
        </div>
    ) : null
}
