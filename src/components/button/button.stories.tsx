/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './button'

import { AppInner } from '../app-inner/app-inner'

const story: Meta<ButtonProps> = {
    title: 'Common/Button',
    component: Button,
    tags: [ 'autodocs' ]
}

export default story
type Story = StoryObj<ButtonProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <Button {...args} />
        </AppInner>
    ),
    args: {
        children: 'Button',
        size: 'small',
        tgStyles: { background: '#2E7DDB', color: '#fff' }
    }
}
