/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { ModalPay, ModalPayProps, PayTokenType } from './modal-pay'
import { Button } from '../button/button'

import { AppInner } from '../app-inner/app-inner'

const meta: Meta<ModalPayProps> = {
    title: 'Modals/ModalPay',
    component: ModalPay,
    tags: [ 'autodocs' ]
}

export default meta

type Story = StoryObj<ModalPayProps>

const TON = 'https://s2.coinmarketcap.com/static/img/coins/200x200/11419.png'
const DLB = 'https://app.delabwallet.com/logo_black.png'
const BOLT = 'https://ton.app/media/jetton-d4419656-5067-4923-8f44-7ffd3da69242.jpg'

const ModalExample = () => {
    const [ show, setShow ] = useState<boolean>(false)

    const modalData = [
        {
            token: 'TON',
            tokenLogo: TON,
            amount: '10,4',
            tokenAddress: '0:1'
        },
        {
            token: 'DLB',
            tokenLogo: DLB,
            amount: '50',
            tokenAddress: '0:2'
        },
        {
            token: 'BOLT',
            tokenLogo: BOLT,
            amount: '120',
            tokenAddress: '0:3'
        }
    ]

    const [ payToken, setPayToken ] = useState<PayTokenType>(modalData[0])

    const handleCloseModal = () => {
        setShow(false)
    }

    return (
        <>
            <ModalPay
                modalTitle="Pay $20"
                isOpen={show}
                modalData={modalData}
                onClose={handleCloseModal}
                activePayToken={payToken}
                setActivePayToken={setPayToken}
                onOtherClick={() => console.log('Hello)')}
            />
            <Button onClick={() => setShow(true)}>
              Show Modal Search List
            </Button>
        </>
    )
}

export const Playground: Story = {
    render: () => (
        <AppInner isTg={true}>
            <ModalExample />
        </AppInner>
    ),
    args: {}
}
