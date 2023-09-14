/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from './header'

const story: Meta<HeaderProps> = {
    title: 'Common/Header',
    component: Header
}

export default story

type Story = StoryObj<HeaderProps>

export const Playground: Story = {
    render: () => (
        <Header
            width="100%"
            position="fixed"
            className="custom-header"
            before={<div>Before Content</div>}
            children={<h1>Main Header Content</h1>}
            after={<div>After Content</div>}
        />
    )
}
