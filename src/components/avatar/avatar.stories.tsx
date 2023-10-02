/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from './avatar'
import { AppInner } from '../app-inner/app-inner'

const meta: Meta<AvatarProps> = {
    title: 'Common/Avatar',
    component: Avatar,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<AvatarProps>

export const Playground: Story = {
    render: ({ ...args }) => <AppInner isTg={false}><Avatar {...args} /></AppInner>,
    args: {
        size: 48,
        gradientColor: 'blue',
        initials: 'EX',
        tgStyles: {}
    }
}
