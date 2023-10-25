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

const success = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 25 25" fill="none">
        <circle cx="12.5" cy="12.5" r="12" stroke="#1AB233"/>
        <path d="M16.8333 9.79169L10.875 15.75L8.16663 13.0417" stroke="#1AB233" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)

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
                <AlertStatus buttonContent="Ok" iconStatus={success} statusTitle='Successful' isOpen={showAlert} onClose={handleCloseAlert} />
            )}
        </div>
    )
}

export const Playground: Story = {
    render: () => <AppInner isTg={false}><AlertExample /></AppInner>,
    args: {  }
}
