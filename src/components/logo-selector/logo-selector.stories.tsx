/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { LogoSelector, LogoSelectorProps } from './logo-selector'
import { AppInner } from '../app-inner/app-inner'

const story: Meta<LogoSelectorProps> = {
    title: 'Icons/LogoSelector',
    component: LogoSelector,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<LogoSelectorProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <LogoSelector {...args} />
        </AppInner>
    ),
    args: {
        id: 'ton-symbol',
        height: '32px',
        width: '32px',
        tgStyles: { icon: 'orange' }
    }
}
