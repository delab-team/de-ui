/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { Li, LiProps } from './li'
import { AppInner } from '../app-inner/app-inner'

const meta: Meta<LiProps> = {
    title: 'Common/Li',
    component: Li,
    tags: [ 'autodocs' ]
}

export default meta

type Story = StoryObj<LiProps>

export const Playground: Story = {
    render: ({ ...args }) => <AppInner isTg={false}><Li {...args} /></AppInner>,
    args: { tgStyles: { backgroundColor: '#2E7DDB' }, children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</> }
}
