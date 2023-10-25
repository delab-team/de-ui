/* eslint-disable max-len */
import { FC } from 'react'

import { Modal } from '../modal/modal'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/alert-status.module.css'

export interface AlertStatusProps {
    statusTitle: string
    iconStatus: React.ReactNode;
    children?: React.ReactNode | React.ReactNode[]
    isOpen: boolean
    onClose: () => void
    classNameModal?: string
    buttonContent: React.ReactNode;
    classNameTitle?: string
    classNameButton?: string
    classNameStatus?: string
    classNameContent?: string
    tgStyles?: {
        modal?: React.CSSProperties | undefined
        modalTitle?: React.CSSProperties | undefined
        modalButton?: React.CSSProperties | undefined
    }
}

export const AlertStatus: FC<AlertStatusProps> = ({
    buttonContent,
    statusTitle,
    iconStatus,
    children,
    tgStyles,
    isOpen,
    onClose,
    classNameModal,
    classNameTitle,
    classNameButton,
    classNameStatus,
    classNameContent
}) => {
    const isTg = useIsTg()

    const modalStyles = isTg ? { ...(tgStyles?.modal || undefined) } : {}
    const modalTitleStyles = isTg ? { ...tgStyles?.modalTitle || undefined } : {}
    const modalButtonStyles = isTg ? { ...tgStyles?.modalButton || undefined } : {}

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={`${classNameModal} ${s.modal}`}
            tgStyles={{ modalContent: modalStyles }}
            isCloseButton={false}
        >
            <div className={s.modalTop}>
                <div className={`${s.modalStatus} ${classNameStatus || ''}`}>
                    {iconStatus}
                </div>
            </div>

            <div className={`${s.modalTitle} ${classNameTitle || ''}`} style={modalTitleStyles}>{statusTitle}</div>

            {children && (
                <div className={`${s.modalContent}  ${classNameContent || ''}`}>{children}</div>
            )}

            <button className={`${s.modalButton} ${classNameButton || ''}`} style={modalButtonStyles} onClick={onClose}>{buttonContent}</button>
        </Modal>
    )
}
