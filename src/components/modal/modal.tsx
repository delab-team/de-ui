import { FC, useRef, useEffect } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/modal.module.css'

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    tgStyles?: {
        modalContent?: React.CSSProperties | undefined;
        closeButton?: React.CSSProperties | undefined;
    }
}

export const Modal: FC<ModalProps> = ({ children, onClose, isOpen, className, tgStyles }) => {
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

    const isTg = useIsTg()

    const contentStyles = isTg ? tgStyles?.modalContent : undefined
    const closeStyles = isTg ? tgStyles?.closeButton : undefined

    return (
        <>
            {isOpen && (
                <div className={s.modalBackdrop} ref={modalRef}>
                    <div className={`${s.modalContent} ${className || ''}`} style={contentStyles}>
                        <button className={s.closeButton} onClick={onClose} style={closeStyles}>
                            &times;
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
