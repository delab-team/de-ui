/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { Div, DivProps } from './div'
import { AppInner } from '../app-inner/app-inner'

const meta: Meta<DivProps> = {
    title: 'Common/Div',
    component: Div,
    tags: [ 'autodocs' ]
}

export default meta

type Story = StoryObj<DivProps>

export const Playground: Story = {
    render: ({ ...args }) => <AppInner isTg={false}><Div {...args} /></AppInner>,
    args: { tgStyles: { backgroundColor: '#2E7DDB' }, children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</> }
}
