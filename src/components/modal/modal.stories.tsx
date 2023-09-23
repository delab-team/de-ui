/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button/button'

import { Modal, ModalProps } from './modal'

const story: Meta<ModalProps> = {
    title: 'Modals/Modal',
    component: Modal,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<ModalProps>

const ModalExample = () => {
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpenModal}>Show Modal</Button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Modal window title</h2>
                <p>Contents of the modal window</p>
            </Modal>
        </div>
    )
}

export const Playground: Story = {
    render: () => (
        <ModalExample />
    )
}
