/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { IconImg, IconImgProps } from './icon-img'

const story: Meta<IconImgProps> = {
    title: 'Icons/IconsImg',
    component: IconImg
}

export default story

type Story = StoryObj<IconImgProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <IconImg {...args} />
    ),
    args: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png',
        size: 48,
        type: 'default',
        alt: 'icon'
    }
}
