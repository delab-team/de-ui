/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'
import { Cell, CellProps } from './cell'

const meta: Meta<CellProps> = {
    title: 'Common/Cell ',
    component: Cell,
    tags: [ 'autodocs' ]
}

export default meta
type Story = StoryObj<CellProps>

const img = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026'

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <Cell {...args} />
        </AppInner>
    ),
    args: {
        leftContent: <img src={img} width="47px" height="47px" style={{ borderRadius: '50%' }} />,
        centerContent: 'Bitcoin',
        rightContent: <span style={{ color: '#4BB34B' }}>+ 500 BTC</span>,
        bottomLeftContent: <span style={{ fontSize: '13px', color: '#818C99' }}>today at 17 : 00</span>,
        tgStyles: {}
    }
}
