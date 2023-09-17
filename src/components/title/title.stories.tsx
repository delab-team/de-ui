/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { Title, TitleProps } from './title'

const story: Meta<TitleProps> = {
    title: 'Typography/Title',
    component: Title,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TitleProps>

export const Playground: Story = {
    render: ({ children, ...args }) => (
        <Title {...args} >{children}</Title>
    ),
    args: { children: 'Lorem text' }
}
