/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { SettingsCell, SettingsCellProps } from './settings-cell'

const meta: Meta<SettingsCellProps> = {
    title: 'Cells/SettingsCell',
    component: SettingsCell,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<SettingsCellProps>

export const Playground: Story = {
    render: ({ ...args }) => <SettingsCell {...args} />,
    args: {
        items: [
            {
                label: 'Language',
                text: 'English'
            }
        ]
    }
}
