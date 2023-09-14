/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './button'

const story: Meta<ButtonProps> = {
    title: 'Common/Button',
    component: Button
}

export default story

type Story = StoryObj<ButtonProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <Button {...args} />
    ),
    args: {
        children: 'Button',
        size: 's'
    }
}
