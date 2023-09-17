/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './text'

const story: Meta<TextProps> = {
    title: 'Typography/Text',
    component: Text,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TextProps>

export const Playground: Story = {
    render: ({ children, ...args }) => (
        <Text {...args} >{children}</Text>
    ),
    args: { children: 'Lorem text' }
}
