/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { PageWrapperSidebar, PageWrapperSidebarProps } from './page-wrapper-sidebar'

const story: Meta<PageWrapperSidebarProps> = {
    title: 'wrappers/page-wrapper-sidebar',
    component: PageWrapperSidebar,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<PageWrapperSidebarProps>

export const Playground: Story = {
    render: () => (
        <PageWrapperSidebar
            pageTitle="My Page Title"
            header={<header>Header Content</header>}
            footer={<footer>Footer Content</footer>}
            sidebar={<aside>Sidebar Content</aside>}
        >
            <main>
                Your page's main content
            </main>
        </PageWrapperSidebar>
    )
}
