import { FC, useState } from 'react'

import s from '../../styles/modal-confirm.module.css'

export interface ModalConfirmProps {
    isOpen: boolean;
    title: string;
    message: React.ReactNode;
    onConfirm: () => void;
    onCancel: () => void;
    className?: string;
}

export const ModalConfirm: FC<ModalConfirmProps> = ({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    className
}) => {
    const [ isClosing, setIsClosing ] = useState<boolean>(false)

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
            <div className={s.modalContent}>
                <h2 className={s.title}>{title}</h2>
                <p className={s.message}>{message}</p>
                <div className={s.buttonContainer}>
                    <button className={s.confirmButton} onClick={handleConfirm}>
                      Confirm
                    </button>
                    <button className={s.cancelButton} onClick={handleClose}>
                      Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
