import { FC } from 'react'

import s from '../../styles/modal.module.css'

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({
    children,
    onClose,
    isOpen
}) => (
    <>
        {isOpen && (
            <div className={s.modalBackdrop}>
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
