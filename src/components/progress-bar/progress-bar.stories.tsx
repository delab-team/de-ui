/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'

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
        <AppInner isTg={false}>
            <ProgressBar {...args} />
        </AppInner>
    ),
    args: {
        type: 'percentOnly',
        size: 'default',
        color: 'blue',
        progress: 95,
        tgStyles: { progressBar: { backgroundColor: 'purple' } }
    }
}
