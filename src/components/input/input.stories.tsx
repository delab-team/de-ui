/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from './input'

const story: Meta<InputProps> = {
    title: 'Forms/Input',
    component: Input,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<InputProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <Input {...args} />
    ),
    args: {
        variant: 'black',
        placeholder: 'Enter your username',
        error: 'Username is required'
    }
}
