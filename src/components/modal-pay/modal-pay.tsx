/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'

import { Modal } from '../modal/modal'
import { Button } from '../button/button'
import { Text } from '../text/text'
import { Li } from '../li/li'
import { IconSelector } from '../icon-selector/icon-selector'
import { Input } from '../input/input'
import { Div } from '../div/div'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/modal-pay.module.css'

export type PayTokenType = {
    token: string,
    amount: string,
    tokenAddress: string,
    tokenLogo: string
}

export interface ModalPayProps {
    modalTitle: string,
    modalData: PayTokenType[],
    className?: string
    isOpen: boolean
    onClose: () => void
    variant?: 'white' | 'black'
    activePayToken: PayTokenType
    setActivePayToken: (payToken: PayTokenType) => void
    onOtherClick: (...args: any) => void
    tgStyles?: {
        modal?: React.CSSProperties | undefined
        modalTopButton?: React.CSSProperties | undefined
        modalTitle?: React.CSSProperties | undefined
        tokenItem?: React.CSSProperties | undefined
        tokenItemActive?: React.CSSProperties | undefined
        tokenItemAmount?:  React.CSSProperties | undefined
        modalPayAmount?: React.CSSProperties | undefined
        modalPayAmountInput?: React.CSSProperties | undefined
        modalPayAmountToken?: React.CSSProperties | undefined
        payButton?: React.CSSProperties | undefined
    }
}

export const ModalPay: FC<ModalPayProps> = ({
    modalTitle,
    modalData,
    className,
    isOpen,
    onClose,
    variant = 'white',
    activePayToken,
    setActivePayToken,
    onOtherClick,
    tgStyles
}) => {
    const isTg = useIsTg()

    const modal = isTg ? tgStyles?.modal : {}
    const modalTitleTg = isTg ? tgStyles?.modalTitle : {}
    const modalTopButton = isTg ? tgStyles?.modalTopButton : {}
    const tokenItem = isTg ? tgStyles?.tokenItem : {}
    const tokenItemActive = isTg ? tgStyles?.tokenItemActive : {}
    const tokenItemAmount = isTg ? tgStyles?.tokenItemAmount : {}
    const modalPayAmount = isTg ? tgStyles?.modalPayAmount : {}
    const modalPayAmountInput = isTg ? tgStyles?.modalPayAmountInput : {}
    const modalPayAmountToken = isTg ? tgStyles?.modalPayAmountToken : {}
    const payButton = isTg ? tgStyles?.payButton : {}

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCloseButton={false} className={` ${s.modal} ${className} ${variant === 'white' ? s.white : s.black}`} tgStyles={{ modalContent: modal }}>
            <div className={s.modalTop}>
                <button className={s.modalTopButton} style={modalTopButton} onClick={onClose}>
                  Отмена
                </button>
                <Text className={s.modalTitle} tgStyles={modalTitleTg}>{modalTitle}</Text>
            </div>

            <ul className={s.modalTokensList}>
                {modalData.map(el => (
                    <Li className={`${s.tokenItem} ${el.token === activePayToken.token ? s.tokenItemActive : ''}`} tgStyles={el.token === activePayToken.token ? tokenItemActive : tokenItem} key={el.tokenAddress} onClick={() => setActivePayToken(el)}>
                        <img className={s.tokenInfoImg} src={el.tokenLogo} alt="token logo" />
                        <div className={s.tokenDetail}>
                            <Text className={s.tokenItemAmount} tgStyles={tokenItemAmount}>
                                {el.amount} {' '} {el.token}
                            </Text>
                        </div>
                    </Li>
                ))}
                <Li className={s.tokenItem} onClick={onOtherClick} tgStyles={tokenItem}>
                    <IconSelector id="external-link" size="25" color="#3E88F7" />
                    <div className={s.tokenDetail}>
                        <Text className={s.tokenItemAmount}>
                          Other
                        </Text>
                    </div>
                </Li>
            </ul>

            <Div className={s.modalPayAmount} tgStyles={modalPayAmount}>
                <Input className={s.modalPayAmountInput} value={activePayToken.amount} onChange={() => {}} variant='white' readonly tgStyles={{ input: modalPayAmountInput }} />
                <Text className={s.modalPayAmountToken} tgStyles={modalPayAmountToken}>{activePayToken.token}</Text>
            </Div>

            <button className={s.payButton} style={payButton}>
              Pay {activePayToken.amount} {activePayToken.token}
            </button>
        </Modal>
    )
}
