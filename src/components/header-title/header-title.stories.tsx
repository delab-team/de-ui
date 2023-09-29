/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { HeaderTitle, HeaderTitleProps } from './header-title'

const story: Meta<HeaderTitleProps> = {
    title: 'Headers/HeaderTitle',
    component: HeaderTitle,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<HeaderTitleProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <HeaderTitle {...args} />
    ),
    args: {
        title: 'Home',
        subtitle: 'Home',
        containerWidth: 800,
        style: {
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '10px'
        }
    }
}
