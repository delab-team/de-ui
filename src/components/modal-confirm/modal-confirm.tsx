/* eslint-disable max-len */
import { FC, useState } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/modal-confirm.module.css'

export interface ModalConfirmProps {
    isOpen: boolean;
    title: string;
    message: React.ReactNode;
    onConfirm: () => void;
    onCancel: () => void;
    className?: string;
    tgStyles?: {
        modalContent?: React.CSSProperties | undefined;
        title?: React.CSSProperties | undefined
        message?: React.CSSProperties | undefined
        buttonConfirm?: React.CSSProperties | undefined
        buttonCancel?: React.CSSProperties | undefined
    }
    confirmButtonContent: React.ReactNode
    cancelButtonContent: React.ReactNode
}

export const ModalConfirm: FC<ModalConfirmProps> = ({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    className,
    tgStyles,
    confirmButtonContent,
    cancelButtonContent
}) => {
    const [ isClosing, setIsClosing ] = useState<boolean>(false)

    const isTg = useIsTg()

    const contentStyles = isTg ? tgStyles?.modalContent : undefined
    const titleStyles = isTg ? tgStyles?.title : undefined
    const messageStyles = isTg ? tgStyles?.message : undefined
    const buttonConfirmStyles = isTg ? tgStyles?.buttonConfirm : undefined
    const buttonCancelStyles = isTg ? tgStyles?.buttonCancel : undefined

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            onCancel()
            setIsClosing(false)
        }, 300)
    }

    const handleConfirm = () => {
        onConfirm()
        setIsClosing(false)
    }

    if (!isOpen && !isClosing) return null

    return (
        <div className={`${s.modal} ${isClosing ? s.closing : ''} ${className || ''}`}>
            <div className={s.modalContent} style={contentStyles}>
                <h2 className={s.title} style={titleStyles}>{title}</h2>
                <p className={s.message} style={messageStyles}>{message}</p>
                <div className={s.buttonContainer}>
                    <button className={s.confirmButton} onClick={handleConfirm} style={buttonConfirmStyles}>
                        {confirmButtonContent}
                    </button>
                    <button className={s.cancelButton} onClick={handleClose} style={buttonCancelStyles}>
                        {cancelButtonContent}
                    </button>
                </div>
            </div>
        </div>
    )
}
