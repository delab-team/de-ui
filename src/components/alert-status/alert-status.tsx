/* eslint-disable max-len */
import { FC } from 'react'

import { Modal } from '../modal/modal'
import { Text } from '../text/text'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/alert-status.module.css'

export interface AlertStatusProps {
    iconSize?: string
    status: 'successful' | 'failed'
    variant: 'white' | 'black'
    children?: React.ReactNode | React.ReactNode[]
    isOpen: boolean
    onClose: () => void
    classNameModal?: string
    classNameTitle?: string
    classNameButton?: string
    tgStyles?: {
        modal?: React.CSSProperties | undefined
        modalTitle?: React.CSSProperties | undefined
        modalButton?: React.CSSProperties | undefined
    }
}

export const AlertStatus: FC<AlertStatusProps> = ({
    iconSize = '30px',
    status,
    variant,
    children,
    tgStyles,
    isOpen,
    onClose,
    classNameModal,
    classNameTitle,
    classNameButton
}) => {
    const isTg = useIsTg()

    const modalStyles = isTg ? { ...(tgStyles?.modal || undefined) } : {}
    const modalTitleStyles = isTg ? { ...tgStyles?.modalTitle || undefined } : {}
    const modalButtonStyles = isTg ? { ...tgStyles?.modalButton || undefined } : {}

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={`${classNameModal} ${s.modal} ${variant === 'white' ? s.white : s.black}`}
            tgStyles={{ modalContent: modalStyles }}
            isCloseButton={false}
        >
            <div className={s.modalTop}>
                {status === 'successful' ? (
                    <div className={s.modalStatus}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 25 25" fill="none">
                            <circle cx="12.5" cy="12.5" r="12" stroke="#1AB233" />
                            <path
                                d="M16.8333 9.79167L10.875 15.75L8.16666 13.0417"
                                stroke="#1AB233"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                ) : (
                    <div className={s.modalStatusErr}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 26 25" fill="none">
                            <path d="M10.4933 9.38306L15.8734 14.7453" stroke="#FF3939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.4933 14.7454L15.8734 9.38314" stroke="#FF3939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25.0433 12.5C25.0433 19.1258 19.6536 24.5 13.0016 24.5C6.34963 24.5 0.959961 19.1258 0.959961 12.5C0.959961 5.87415 6.34963 0.5 13.0016 0.5C19.6536 0.5 25.0433 5.87415 25.0433 12.5Z" stroke="#FF3939"/>
                        </svg>
                    </div>
                )}
            </div>

            <Text className={`${s.modalTitle} ${classNameTitle || ''}`} tgStyles={modalTitleStyles}>{status === 'successful' ? 'Successful' : 'Failed'}</Text>

            {children && (
                <div className={s.modalContent}>{children}</div>
            )}

            <button className={`${s.modalButton} ${classNameButton || ''}`} style={modalButtonStyles} onClick={onClose}>Ok</button>
        </Modal>
    )
}
