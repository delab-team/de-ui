/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { Input, InputProps } from './input'
import { AppInner } from '../app-inner/app-inner'

const story: Meta<InputProps> = {
    title: 'Forms/Input',
    component: Input,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<InputProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={true}>
            <Input {...args} />
        </AppInner>
    ),
    args: {
        variant: 'black',
        placeholder: 'Enter your username',
        error: 'Username is required',
        tgStyles: {}
    }
}
