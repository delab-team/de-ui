/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { Spinner, SpinnerProps } from './spinner'
import { AppInner } from '../app-inner/app-inner'

const story: Meta<SpinnerProps> = {
    title: 'Common/Spinner',
    component: Spinner,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<SpinnerProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <Spinner {...args} />
        </AppInner>
    ),
    args: {
        size: 'medium',
        color: '#000000',
        tgStyles: '#2E7DDB'
    }
}
