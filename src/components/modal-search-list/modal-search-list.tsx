/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'

import { Modal } from '../modal/modal'
import { Button } from '../button/button'
import { Text } from '../text/text'
import { HeaderSearch } from '../header-search/header-search'
import { Li } from '../li/li'
import { Div } from '../div/div'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/modal-search-list.module.css'

export interface ModalSearchListProps {
    modalTitle: string;
    searchValue: string;
    onChangeSearch: (...args: any) => void
    modalData: {
        id: string;
        icon: string;
        title: string;
        actionIcon: React.ReactNode;
        onClick: ({ ...args }: any) => void;
        isActive: boolean;
    }[]
    onClose: () => void;
    isOpen: boolean;
    tgStyles?: {
        modal?: React.CSSProperties | undefined
        modalButton?: React.CSSProperties | undefined
        modalTitle?: React.CSSProperties | undefined;
        modalListItem?: React.CSSProperties | undefined;
        modalListItemTitle?: React.CSSProperties | undefined
        modalListItemInfo?: React.CSSProperties | undefined
        modalInput?: React.CSSProperties | undefined
        modalInputBody?: React.CSSProperties | undefined
    }
    variant?: 'white' | 'black'
    className?: string;
}

export const ModalSearchList: FC<ModalSearchListProps> = ({
    modalTitle,
    searchValue,
    onChangeSearch,
    modalData,
    onClose,
    isOpen,
    tgStyles,
    variant = 'white',
    className
}) => {
    const isActiveIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13.3334 4.66669L6.00002 12L2.66669 8.66669" stroke="#1AB233" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    const isTg = useIsTg()

    const modalTitleStyles = isTg ? tgStyles?.modalTitle : {}
    const modalListItem = isTg ? tgStyles?.modalListItem : {}
    const modalListItemTitle = isTg ? tgStyles?.modalListItemTitle : {}
    const modalListItemInfo = isTg ? tgStyles?.modalListItemInfo : {}
    const modalButton = isTg ? tgStyles?.modalButton : {}

    const modalInput = isTg ? tgStyles?.modalInput : {}
    const modalSearchBody = isTg ? tgStyles?.modalInputBody : {}

    return (
        <Modal isOpen={isOpen} tgStyles={{ modalContent: tgStyles?.modal || {} }} onClose={onClose} isCloseButton={false} className={` ${s.modal} ${className} ${variant === 'white' ? s.white : s.black}`}>
            <div className={s.modalTop}>
                <button className={s.modalTopButton} onClick={onClose} style={modalButton}>
                  Отмена
                </button>
                <Text className={s.modalTitle} tgStyles={modalTitleStyles}>{modalTitle}</Text>
            </div>

            <HeaderSearch className={s.modalSearch} value={searchValue} onChange={onChangeSearch} variant="white"
                tgStyles={{
                    input: modalInput,
                    searchBody: modalSearchBody
                }}
            />

            <ul className={s.modalList}>
                {modalData.map(el => (
                    <Li key={el.id} className={s.modalListItem} onClick={el.onClick} tgStyles={modalListItem}>
                        <Div className={s.modalListItemContent} tgStyles={modalListItemInfo}>
                            <div className={s.modalListItemInfo}>
                                <img src={el.icon} alt={el.title} height={25} width={25} />
                                <Text className={s.modalListItemTitle} tgStyles={modalListItemTitle}>{el.title}</Text>
                            </div>
                            {el.isActive && isActiveIcon}
                        </Div>
                        {el.actionIcon}
                    </Li>
                ))}
            </ul>
        </Modal>
    )
}
