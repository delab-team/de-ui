/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { IconSelector, IconSelectorProps } from './icon-selector'

import { AppInner } from '../app-inner/app-inner'

const story: Meta<IconSelectorProps> = {
    title: 'Icons/IconSelector',
    component: IconSelector,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<IconSelectorProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <IconSelector {...args} />
        </AppInner>
    ),
    args: {
        id: 'bell',
        size: '32px',
        color: 'transparent',
        tgStyles: { stroke: '#e00cf3' }
    }
}
