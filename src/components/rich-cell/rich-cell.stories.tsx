/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'
import { RichCell, RichCellProps } from './rich-cell'

const meta: Meta<RichCellProps> = {
    title: 'RichCells/RichCell',
    component: RichCell,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<RichCellProps>

const itemsArray = [
    {
        icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026',
        name: 'BNB',
        amount: 323.30611182,
        currency: '₴2211.43'
    },
    {
        icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026',
        name: 'Bitcoin',
        amount: 323.30611182,
        currency: '₴2211.43'
    }
]

export const Playground: Story = {
    render: ({ ...args }) => <AppInner isTg={false}><RichCell {...args} /></AppInner>,
    args: {
        items: itemsArray,
        allLink: (
            <a href="#">See All</a>
        ),
        variant: 'black',
        style: {
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '10px'
        }
    }
}
