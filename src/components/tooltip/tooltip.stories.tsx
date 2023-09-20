/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from './tooltip'

const story: Meta<TooltipProps> = {
    title: 'Common/Tooltip',
    component: Tooltip,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TooltipProps>

export const Playground: Story = {
    render: ({ children, text }) => (
        <Tooltip text={text}>
            {children}
        </Tooltip>
    ),
    args: { children: 'Hover over me', text: 'And one more element' }
}
