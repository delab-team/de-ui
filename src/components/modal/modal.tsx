import { FC } from 'react'

import s from '../../styles/modal.module.css'

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Modal: FC<ModalProps> = ({
    children,
    onClose,
    isOpen,
    className
}) => (
    <>
        {isOpen && (
            <div className={`${s.modalBackdrop} ${className || ''}`}>
                <div className={s.modalContent}>
                    <button className={s.closeButton} onClick={onClose}>
                      &times;
                    </button>
                    {children}
                </div>
            </div>
        )}
    </>
)
