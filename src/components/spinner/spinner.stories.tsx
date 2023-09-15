/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { Spinner, SpinnerProps } from './spinner'

const story: Meta<SpinnerProps> = {
    title: 'Common/Spinner',
    component: Spinner,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<SpinnerProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <Spinner {...args} />
    ),
    args: {
        size: 'medium',
        color: '#000000'
    }
}
