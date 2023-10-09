/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './text'

import { AppInner } from '../app-inner/app-inner'

const story: Meta<TextProps> = {
    title: 'Typography/Text',
    component: Text,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TextProps>

export const Playground: Story = {
    render: ({ children, ...args }) => (
        <AppInner isTg={false}><Text {...args}>{children}</Text></AppInner>
    ),
    args: { children: 'Lorem text', tgStyles: { color: '#2E7DDB' } }
}
