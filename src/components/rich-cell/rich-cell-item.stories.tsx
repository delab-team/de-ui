/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { RichCellItem, RichCellItemProps } from './rich-cell-item'

const meta: Meta<RichCellItemProps> = {
    title: 'RichCells/RichCellItem',
    component: RichCellItem,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<RichCellItemProps>

const icons = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026'

export const Playground: Story = {
    render: ({ ...args }) => <RichCellItem {...args} />,
    args: {
        variant: 'dark',
        icon: icons,
        name: 'Bitcoin',
        date: 'today at 17:00',
        amount: '+ 500 BTC'
    }
}
