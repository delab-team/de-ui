/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Header, HeaderProps } from './header'

import { AppInner } from '../app-inner/app-inner'
import { Button } from '../button/button'

import '../../styles/example.style.css'

const story: Meta<HeaderProps> = {
    title: 'Headers/Header',
    component: Header,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<HeaderProps>

const tgStyles = {}

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
            <Router>
                <Header
                    width="100%"
                    position="static"
                    className="header"
                    before={<img src="https://avatars.githubusercontent.com/u/116884789?s=200&v=4" alt="Logo" className="logo" />}
                    children={
                        <nav className="nav">
                            <ul>
                                <li>
                                    <Link to="/">Главная</Link>
                                </li>
                                <li>
                                    <Link to="/about">О нас</Link>
                                </li>
                                <li>
                                    <Link to="/services">Услуги</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                    }
                    after={
                        <Button size="large" variant='secondary'>Войти</Button>
                    }
                    tgStyles={tgStyles}
                />
            </Router>
        </AppInner>
    )
}
