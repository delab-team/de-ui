/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { Footer, FooterProps } from './footer'
import { AppInner } from '../app-inner/app-inner'

const story: Meta<FooterProps> = {
    title: 'Common/Footer',
    component: Footer,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<FooterProps>

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
            <Router>
                <Footer
                    logo="https://avatars.githubusercontent.com/u/116884789?s=200&v=4"
                    logoSize={80}
                    logoWidth={80}
                    menuItems={[
                        { id: '1', link: <Link to="example">Example</Link> },
                        { id: '2', link: <Link to="about">About us</Link> },
                        { id: '3', link: <Link to="news">News</Link> }
                    ]}
                    menuItems2={[
                        { id: '4', link: <Link to="products">Products</Link> },
                        { id: '5', link: <Link to="services">Services</Link> },
                        { id: '6', link: <Link to="contact">Contact</Link> }
                    ]}
                    menuItems3={[
                        { id: '7', link: <Link to="blog">Blog</Link> },
                        { id: '8', link: <Link to="portfolio">Portfolio</Link> },
                        { id: '9', link: <Link to="events">Events</Link> }
                    ]}

                    contactInfo={{
                        phoneNumber: '+1 (123) 456-7890',
                        email: 'info@example.com',
                        address: '123 Main Street, City, Country'
                    }}
                    backgroundColor="#333"
                />
            </Router>
        </AppInner>
    )
}
