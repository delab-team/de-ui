/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'
import { SettingsCell, SettingsCellProps } from './settings-cell'

const meta: Meta<SettingsCellProps> = {
    title: 'Cells/SettingsCell',
    component: SettingsCell,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<SettingsCellProps>

export const Playground: Story = {
    render: ({ ...args }) => <AppInner isTg={false}><SettingsCell {...args} /></AppInner>,
    args: {
        items: [
            {
                label: 'Language',
                text: 'English'
            }
        ],
        style: {
            paddingLeft: '15px',
            paddingRight: '15px',
            borderRadius: '10px'
        },
        tgStyles: {}
    }
}
