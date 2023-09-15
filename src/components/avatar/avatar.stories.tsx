/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from './avatar'

const meta: Meta<AvatarProps> = {
    title: 'Common/Avatar',
    component: Avatar,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<AvatarProps>

export const Playground: Story = {
    render: ({ ...args }) => <Avatar {...args} />,
    args: {
        size: 48,
        gradientColor: 'blue',
        initials: 'EX'
    }
}
