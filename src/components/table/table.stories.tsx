/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'
import { Table, TableProps } from './table'

const story: Meta<TableProps> = {
    title: 'Tables/Table',
    component: Table,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<TableProps>

const data = [
    [ 'A', 'B', 'C' ],
    [ '1', '2', '3' ],
    [ 'X', 'Y', 'Z' ]
]

const columnWidths = [ 100, 150, 80 ]
const rowHeights = [ 40, 30, 50 ]

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <Table {...args} />
        </AppInner>
    ),
    args: {
        data,
        columnWidths,
        rowHeights,
        containerWidth: '30%',
        tgStyles: { td: { color: '#fff' }, tableContainer: { background: '#2E7DDB' } }
    }
}
