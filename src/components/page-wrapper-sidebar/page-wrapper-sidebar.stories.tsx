/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { PageWrapperSidebar, PageWrapperSidebarProps } from './page-wrapper-sidebar'

import { Footer } from '../footer/footer'
import { Button } from '../button/button'
import { Header } from '../header/header'

import '../header/example.style.css'
import './example.style.css'

const story: Meta<PageWrapperSidebarProps> = {
    title: 'wrappers/page-wrapper-sidebar',
    component: PageWrapperSidebar,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<PageWrapperSidebarProps>

export const Playground: Story = {
    render: () => (
        <Router>
            <PageWrapperSidebar
                pageTitle="My Page Title"
                header={
                    <Header
                        width="100%"
                        position="static"
                        className="header"
                        before={<img src="https://avatars.githubusercontent.com/u/116884789?s=200&v=4" alt="Logo" className="logo" />}
                        children={
                            <nav className="nav">
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contacts</Link>
                                    </li>
                                </ul>
                            </nav>
                        }
                        after={
                            <Button size="l">Войти</Button>
                        }
                    />
                }
                footer={
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
                }
                sidebar={
                    <aside className="sidebar">
                        <h2>Menu</h2>
                        <ul>
                            <li>
                                <Link to="/">Main</Link>
                            </li>
                            <li>
                                <Link to="/about">About us</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contacts</Link>
                            </li>
                        </ul>
                    </aside>
                }
            >
                <main>
                    Your page's main content
                </main>
            </PageWrapperSidebar>
        </Router>
    )
}
