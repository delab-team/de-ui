/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import { Modal } from '../modal/modal'
import { Button } from '../button/button'
import { Text } from '../text/text'
import { Div } from '../div/div'
import { IconSelector } from '../icon-selector/icon-selector'

import s from '../../styles/modal-info-card.module.css'

export interface ModalInfoCardProps {
    modalTitle: string
    isOpen: boolean
    onClose: () => void
    variant?: 'white' | 'black'
    className?: string
    tgStyles?: {
        modal?: React.CSSProperties | undefined
        modalTopButton?: React.CSSProperties | undefined
        modalInfoTopTitle?: React.CSSProperties | undefined
        modalInfoTopSubtitle?: React.CSSProperties | undefined
        modalInfoDetailTitle?: React.CSSProperties | undefined
        modalInfoDetailSubtitle?: React.CSSProperties | undefined
        modalInfoDivider?: React.CSSProperties | undefined
        modalBtnDownload?: React.CSSProperties | undefined
        modalBtnConnect?: React.CSSProperties | undefined
    }
    modalTopTitle?: string
    modalTopSubtitle?: string
    modalTopIcon?: string
    serverTitle?: string
    serverSubtitle?: string
    infoTitle?: string
    infoSubtitle?: string
}

export const ModalInfoCard: FC<ModalInfoCardProps> = ({
    modalTitle,
    isOpen,
    onClose,
    variant = 'white',
    className,
    tgStyles,
    serverTitle,
    serverSubtitle,
    infoTitle,
    infoSubtitle,
    modalTopTitle,
    modalTopSubtitle,
    modalTopIcon
}) => {
    const isTg = useIsTg()

    const modalTg = isTg ? tgStyles?.modal : {}
    const modalTopButtonTg = isTg ? tgStyles?.modalTopButton : {}
    const modalInfoTopTitle = isTg ? tgStyles?.modalInfoTopTitle : {}
    const modalInfoTopSubtitle = isTg ? tgStyles?.modalInfoTopSubtitle : {}
    const modalInfoDetailTitle = isTg ? tgStyles?.modalInfoDetailTitle : {}
    const modalInfoDetailSubtitle = isTg ? tgStyles?.modalInfoDetailSubtitle : {}
    const modalInfoDivider = isTg ? tgStyles?.modalInfoDivider : {}
    const modalBtnDownloadTg = isTg ? tgStyles?.modalBtnDownload : {}
    const modalBtnConnectTg = isTg ? tgStyles?.modalBtnConnect : {}

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCloseButton={false}
            className={`${s.modal} ${variant === 'white' ? s.white : s.black} ${className || ''}`}
            tgStyles={{ modalContent: modalTg }}
        >
            <div className={s.modalTop}>
                <Button className={s.modalTopButton} onClick={onClose} tgStyles={modalTopButtonTg}>
                    Отмена
                </Button>
                <Text className={s.modalTitle}>{modalTitle}</Text>
            </div>

            <Div className={`${s.modalInfo} ${s.modalInfoTop}`}>
                {modalTopIcon && <img src={modalTopIcon} width={25} height={25} alt="img" />}
                <div>
                    <Text className={s.modalInfoTopTitle} tgStyles={modalInfoTopTitle}>{modalTopTitle}</Text>
                    <Text className={s.modalInfoTopSubtitle} tgStyles={modalInfoTopSubtitle}>{modalTopSubtitle}</Text>
                </div>
            </Div>

            <Div className={`${s.modalInfo} ${s.modalInfoContent}`}>
                <div className={s.modalInfoItem}>
                    <IconSelector id="server" size="24px" color="#3E88F7" />
                    <div className={s.modalInfoDetail}>
                        <Text className={s.modalInfoDetailTitle} tgStyles={modalInfoDetailTitle}>{serverTitle}</Text>
                        <Text className={s.modalInfoDetailSubtitle} tgStyles={modalInfoDetailSubtitle}>{serverSubtitle}</Text>
                    </div>
                </div>
                <Div className={s.modalInfoDivider} tgStyles={modalInfoDivider} />
                <div className={s.modalInfoItem}>
                    <IconSelector id="info" size="24px" color="#3E88F7" />
                    <div className={s.modalInfoDetail}>
                        <Text className={s.modalInfoDetailTitle} tgStyles={modalInfoDetailTitle}>{infoTitle}</Text>
                        <Text className={s.modalInfoDetailSubtitle} tgStyles={modalInfoDetailSubtitle}>{infoSubtitle}</Text>
                    </div>
                </div>
            </Div>

            <Div>
                <Button className={s.modalBtnDownload} tgStyles={modalBtnDownloadTg}>
                    <IconSelector id="download" size="23px" color="#3E88F7" />
                    Download
                </Button>
                <Button className={s.modalBtnConnect} tgStyles={modalBtnConnectTg}>
                    <IconSelector id="link" size="23px" color="#FFFFFF" />
                    Connect
                </Button>
            </Div>
        </Modal>
    )
}
