/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { InfoCell, InfoCellProps } from './info-cell'

const meta: Meta<InfoCellProps> = {
    title: 'Cells/InfoCell',
    component: InfoCell,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<InfoCellProps>

export const Playground: Story = {
    render: ({ ...args }) => <InfoCell {...args} />,
    args: {
        phone: '+380950917161',
        email: 'gmail@gmail.com',
        connectedDevices: 2,
        variant: 'black',
        style: {
            paddingLeft: '15px',
            paddingRight: '15px',
            borderRadius: '10px'
        }
    }
}
