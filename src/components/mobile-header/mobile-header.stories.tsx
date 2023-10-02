/* eslint-disable import/namespace */
/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'
import { MobileHeader, MobileHeaderProps } from './mobile-header'

import { IconSelector } from '../icon-selector/icon-selector'
import { Input } from '../input/input'

const story: Meta<MobileHeaderProps> = {
    title: 'Mobile/MobileHeader',
    component: MobileHeader,
    tags: [ 'autodocs' ]
}

export default story

const mobileTopItems = [
    { text: 'Edit', isActive: false },
    { mobileComponent: <Input variant="white" value="" onChange={() => {}}  size="xsmall" /> },
    { icon: <IconSelector id="user" color="#fff" size="25px" />, isActive: false }
]

const mobileBottomItems = [
    {  text: 'Home', isActive: false },
    {  text: 'Profile', isActive: false },
    {  text: 'Categories', isActive: false },
    {  text: 'Search', isActive: false }
]

type Story = StoryObj<MobileHeaderProps>

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <MobileHeader
                    mobileTop={mobileTopItems}
                    mobileBottom={mobileBottomItems}
                    mobileClassName="custom-mobile-header"
                    mobileTopClassName="custom-top-item"
                    mobileBottomClassName="custom-bottom-item"
                    backgroundHeader="#333"
                    borderRadiusHeader='20px'
                    inactiveBottomColor='#fff'
                    activeTopColor="#007bff"
                    inactiveTopColor='white'
                />
            </div>
        </AppInner>
    )

}
