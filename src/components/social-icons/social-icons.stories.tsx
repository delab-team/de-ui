/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { SocialIcons, SocialIconsProps } from './social-icons'

import { AppInner } from '../app-inner/app-inner'

const story: Meta<SocialIconsProps> = {
    title: 'Icons/SocialIcons',
    component: SocialIcons,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<SocialIconsProps>

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <SocialIcons {...args} />
        </AppInner>
    ),
    args: {
        id: 'github',
        size: '32px',
        color: 'red',
        tgStyles: { icon: 'orange' }
    }
}
