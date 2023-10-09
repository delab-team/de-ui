/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'
import { MobileMenu, MobileMenuProps } from './mobile-menu'

import { IconSelector } from '../icon-selector/icon-selector'

const story: Meta<MobileMenuProps> = {
    title: 'Menu/MobileMenu',
    component: MobileMenu,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<MobileMenuProps>

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
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
                        icon: <IconSelector id="user" color="#fff" size="24px" />,
                        text: 'Профиль',
                        backgroundColor: 'transparent',
                        textColor: 'white',
                        onClick: () => {}
                    },
                    {
                        icon: <IconSelector id="credit-card" color="#fff" size="24px" />,
                        text: 'Пополнить',
                        backgroundColor: 'transparent',
                        textColor: 'white',
                        onClick: () => {}
                    }
                ]}
                style={{ borderRadius: '100px' }}
                tgStyles={{ menuContainer: { background: '#2E7DDB' } }}
                />
            </div>
        </AppInner>
    )
}
