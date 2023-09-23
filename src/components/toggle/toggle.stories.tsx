/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { Toggle, ToggleProps } from './toggle'

const story: Meta<ToggleProps> = {
    title: 'Common/Toggle',
    component: Toggle,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<ToggleProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <Toggle {...args} />
    ),
    args: {}
}
