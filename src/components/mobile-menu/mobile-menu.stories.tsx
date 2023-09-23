/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { MobileMenu, MobileMenuProps } from './mobile-menu'

import { IconSelector } from '../icon-selector/icon-selector'

const story: Meta<MobileMenuProps> = {
    title: 'Mobile/MobileMenu',
    component: MobileMenu,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<MobileMenuProps>

export const Playground: Story = {
    render: () => (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <MobileMenu items={[
                {
                    icon: <IconSelector id="home" color="#fff" size="24px" />,
                    text: 'Главная',
                    backgroundColor: 'transparent',
                    textColor: 'white',
                    onClick: () => {}
                },
                {
                    icon: <IconSelector id="profile" color="#fff" size="24px" />,
                    text: 'Профиль',
                    backgroundColor: 'transparent',
                    textColor: 'white',
                    onClick: () => {}
                },
                {
                    icon: <IconSelector id="settings" color="#fff" size="24px" />,
                    text: 'Профиль',
                    backgroundColor: 'transparent',
                    textColor: 'white',
                    onClick: () => {}
                }
            ]} backgroundMenu="#333" borderRadius='100px' />
        </div>
    )
}