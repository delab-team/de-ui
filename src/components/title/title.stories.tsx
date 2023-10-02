/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { Title, TitleProps } from './title'
import { AppInner } from '../app-inner/app-inner'

const story: Meta<TitleProps> = {
    title: 'Typography/Title',
    component: Title,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TitleProps>

export const Playground: Story = {
    render: ({ children, ...args }) => (
        <AppInner isTg={true}><Title {...args}>{children}</Title></AppInner>
    ),
    args: { children: 'Lorem text' }
}
