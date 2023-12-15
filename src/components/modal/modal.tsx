/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import { FC, useRef, useEffect, useState } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/modal.module.css'

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    buttonClass?: string;
    tgStyles?: {
        modalContent?: React.CSSProperties | undefined;
        closeButton?: React.CSSProperties | undefined;
    }
    isCloseButton?: boolean;
}

export const Modal: FC<ModalProps> = ({ children, onClose, isOpen, className, tgStyles, buttonClass, isCloseButton = true }) => {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const [ startY, setStartY ] = useState<number | null>(null)
    const [ isClosing, setIsClosing ] = useState<boolean>(false)

    const handleCloseModal = () => {
        setIsClosing(true)

        setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, 500)
    }

    useEffect(() => {
        const handleTouchStart = (event: TouchEvent) => {
            setStartY(event.touches[0].clientY)
        }

        const handleTouchMove = (event: TouchEvent) => {
            if (modalRef.current) {
                const scrollTop = modalRef.current.scrollTop
                const clientY = event.touches[0].clientY

                if (scrollTop === 0 && clientY > startY!) {
                    handleCloseModal()
                }
            }
        }

        const handleTouchEnd = () => {
            setStartY(null)
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleCloseModal()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        document.addEventListener('touchstart', handleTouchStart)
        document.addEventListener('touchmove', handleTouchMove)
        document.addEventListener('touchend', handleTouchEnd)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleTouchStart)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleTouchEnd)
        }
    }, [ isOpen, onClose, startY ])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [ isOpen ])

    const isTg = useIsTg()

    const contentStyles = isTg ? tgStyles?.modalContent : undefined
    const closeStyles = isTg ? tgStyles?.closeButton : undefined

    return (
        <>
            {isOpen && (
                <div className={s.modalBackdrop}>
                    <div className={`${s.modalContent} ${isClosing ? s.closing : ''} ${className || ''}`} style={contentStyles} ref={modalRef}>
                        {isCloseButton && (
                            <button className={`${s.closeButton} ${buttonClass || ''}`} onClick={onClose} style={closeStyles}>
                                &times;
                            </button>
                        )}
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
