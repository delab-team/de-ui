/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { Footer, FooterProps } from './footer'

const story: Meta<FooterProps> = {
    title: 'Common/Footer',
    component: Footer
}

export default story

type Story = StoryObj<FooterProps>

export const Playground: Story = {
    render: () => (
        <Footer
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png"
            menuItems={[
                { id: '1', url: '/home', label: 'Home' },
                { id: '2', url: '/about', label: 'About' },
                { id: '3', url: '/contact', label: 'Contact' }
            ]
            }
            contactInfo={{
                phoneNumber: '+1 (123) 456-7890',
                email: 'info@example.com',
                address: '123 Main Street, City, Country'
            }}
            backgroundColor="#333"
        >
          Additional custom content goes here
        </Footer>
    )
}
