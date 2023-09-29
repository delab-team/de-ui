/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from './textarea'

const story: Meta<TextAreaProps> = {
    title: 'Forms/Textarea',
    component: TextArea,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TextAreaProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <TextArea {...args} />
    ),
    args: { placeholder: 'Type something...', variant: 'black' }
}
