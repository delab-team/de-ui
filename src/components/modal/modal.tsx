import { FC, useRef, useEffect } from 'react'

import s from '../../styles/modal.module.css'

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Modal: FC<ModalProps> = ({ children, onClose, isOpen, className }) => {
    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ isOpen, onClose ])

    return (
        <>
            {isOpen && (
                <div className={s.modalBackdrop} ref={modalRef}>
                    <div className={`${s.modalContent} ${className || ''}`}>
                        <button className={s.closeButton} onClick={onClose}>
                            &times;
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
