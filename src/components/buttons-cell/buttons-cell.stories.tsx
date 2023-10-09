/* eslint-disable import/namespace */
/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'
import { Button } from '../button/button'
import { ButtonsCell, ButtonsCellProps } from './buttons-cell'

const story: Meta<ButtonsCellProps> = {
    title: 'Cells/ButtonsCell',
    component: ButtonsCell,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<ButtonsCellProps>

const buttonsArray = [
    { buttonComponent: <Button variant='danger'>Delete</Button> },
    { buttonComponent: <Button variant='successfully'>Submit</Button> }
]

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}><ButtonsCell {...args} /></AppInner>
    ),
    args: {
        buttons: buttonsArray,
        variant: 'black',
        style: {
            paddingLeft: '15px',
            paddingRight: '15px',
            borderRadius: '10px'
        },
        tgStyles: { cellInner: { backgroundColor: '#2E7DDB' } }
    }
}
