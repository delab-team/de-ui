/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button/button'

import { ModalConfirm, ModalConfirmProps } from './modal-confirm'

const meta: Meta<ModalConfirmProps> = {
    title: 'Modals/ModalConfirm',
    component: ModalConfirm,
    tags: [ 'autodocs' ]
}

export default meta

type Story = StoryObj<ModalConfirmProps>

const ModalConfirmExample = () => {
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleConfirm = () => {
        alert('Action confirmed')
        setIsModalOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpenModal}>Open modal window</Button>
            <ModalConfirm
                isOpen={isModalOpen}
                title="Confirmation"
                message="Are you sure you want to perform this action?"
                onConfirm={handleConfirm}
                onCancel={handleCloseModal}
            />
        </div>
    )
}

export const Playground: Story = {
    render: () => <ModalConfirmExample />,
    args: {}
}
