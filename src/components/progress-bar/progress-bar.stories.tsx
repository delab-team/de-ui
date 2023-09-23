/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { ProgressBar, ProgressBarProps } from './progress-bar'

const story: Meta<ProgressBarProps> = {
    title: 'Common/ProgressBar',
    component: ProgressBar,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<ProgressBarProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <ProgressBar {...args} />
    ),
    args: {
        type: 'percentOnly',
        size: 'default',
        color: 'blue',
        progress: 95
    }
}
