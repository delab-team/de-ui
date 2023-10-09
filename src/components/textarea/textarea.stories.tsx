/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from './textarea'
import { AppInner } from '../app-inner/app-inner'

const story: Meta<TextAreaProps> = {
    title: 'Forms/Textarea',
    component: TextArea,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TextAreaProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <TextArea {...args} />
        </AppInner>
    ),
    args: { placeholder: 'Type something...', variant: 'black', tgStyles: { background: '#2E7DDB', color: '#fff' } }
}
