/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../button/button'

import { AlertStatus, AlertStatusProps } from './alert-status'
import { AppInner } from '../app-inner/app-inner'

const meta: Meta<AlertStatusProps> = {
    title: 'Modals/AlertStatus',
    component: AlertStatus,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<AlertStatusProps>

const AlertExample = () => {
    const [ showAlert, setShowAlert ] = useState<boolean>(false)

    const handleShowAlert = () => {
        setShowAlert(true)
    }

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    return (
        <div>
            <Button onClick={handleShowAlert}>Show status alert</Button>
            {showAlert && (
                <AlertStatus status="successful" variant="white" isOpen={showAlert} iconSize='35px' onClose={handleCloseAlert} />
            )}
        </div>
    )
}

export const Playground: Story = {
    render: () => <AppInner isTg={false}><AlertExample /></AppInner>,
    args: { variant: 'black' }
}
