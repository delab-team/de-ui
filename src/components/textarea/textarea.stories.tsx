/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from './textarea'

const story: Meta<TextAreaProps> = {
    title: 'Common/Textarea',
    component: TextArea
}

export default story

type Story = StoryObj<TextAreaProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <TextArea {...args} />
    ),
    args: { placeholder: 'Type something...' }
}
