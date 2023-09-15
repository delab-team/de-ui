/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { PageWrapper, PageWrapperProps } from './page-wrapper'

const story: Meta<PageWrapperProps> = {
    title: 'wrappers/Page-Wrappers',
    component: PageWrapper,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<PageWrapperProps>

export const Playground: Story = {
    render: () => (
        <PageWrapper
            pageTitle="My Page Title"
            header={<header>Header Content</header>}
            footer={<footer>Footer Content</footer>}
            content={
                <main>
                    Your Content
                </main>
            }
        />
    )
}
