/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { ModalInfoCard, ModalInfoCardProps } from './modal-info-card'
import { Button } from '../button/button'

import { AppInner } from '../app-inner/app-inner'

const meta: Meta<ModalInfoCardProps> = {
    title: 'Modals/ModalInfoCard',
    component: ModalInfoCard,
    tags: [ 'autodocs' ]
}

export default meta

type Story = StoryObj<ModalInfoCardProps>

const imgLink = 'https://avatars.githubusercontent.com/u/116884789?s=200&v=4'

const ModalExample = () => {
    const [ show, setShow ] = useState<boolean>(false)

    return (
        <>
            <ModalInfoCard
                modalTitle="Text"
                isOpen={show}
                onClose={() => setShow(false)}
                modalTopTitle="Text"
                modalTopSubtitle="Text"
                modalTopIcon={imgLink}
                infoTitle="Text"
                infoSubtitle="Text"
                serverTitle="Text"
                serverSubtitle="Text"
                variant='white'
            />
            <Button onClick={() => setShow(true)}>Show Modal Search List</Button>
        </>
    )
}

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
            <ModalExample />
        </AppInner>
    ),
    args: {}
}
