/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../button/button'

import { Alert, AlertProps } from './alert'
import { AppInner } from '../app-inner/app-inner'

const meta: Meta<AlertProps> = {
    title: 'Modals/Alert',
    component: Alert,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<AlertProps>

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
            <Button onClick={handleShowAlert}>Show alert</Button>
            {showAlert && (
                <Alert
                    type="important"
                    onClose={handleCloseAlert}
                    icon={<span>🚀</span>}
                    autoCloseTimeout={5000}
                    position="top-right"
                >
                  This is an alert with an icon and auto-close after 5 seconds!
                </Alert>
            )}
        </div>
    )
}

export const Playground: Story = {
    render: () => <AppInner isTg={false}><AlertExample /></AppInner>,
    args: {}
}
