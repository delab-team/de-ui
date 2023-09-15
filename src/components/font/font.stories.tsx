/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { Font, FontProps } from './font'

const story: Meta<FontProps> = {
    title: 'Common/Font',
    component: Font,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<FontProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <Font {...args} />
    ),
    args: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#007acc',
        children: 'Custom font applied to this text.'
    }
}
