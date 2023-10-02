/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipProps } from './tooltip'

import { AppInner } from '../app-inner/app-inner'

const story: Meta<TooltipProps> = {
    title: 'Common/Tooltip',
    component: Tooltip,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TooltipProps>

export const Playground: Story = {
    render: ({ children, text, iconColor, tgStyles }) => (
        <AppInner isTg={false}>
            <Tooltip text={text} iconColor={iconColor} tgStyles={tgStyles}>
                {children}
            </Tooltip>
        </AppInner>
    ),
    args: {
        children: 'Hover over me',
        text: 'And one more element',
        iconColor: '#000',
        tgStyles: { iconButton: 'black' }
    }
}
