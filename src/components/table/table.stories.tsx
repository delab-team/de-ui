/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

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
    render: () => (
        <Table data={data} columnWidths={columnWidths} rowHeights={rowHeights} containerWidth='30%' />
    ),
    args: {}
}
