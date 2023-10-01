/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { PaymentCell, PaymentCellProps } from './payment-cell'
import { AppInner } from '../app-inner/app-inner'

const meta: Meta<PaymentCellProps> = {
    title: 'Cells/PaymentCell',
    component: PaymentCell,
    tags: [ 'autodocs' ]
}
export default meta
type Story = StoryObj<PaymentCellProps>

function Example () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ paymentMethods, setPaymentMethods ] = useState<string[]>([])

    const styles =  {
        paddingLeft: '15px',
        paddingRight: '15px',
        borderRadius: '10px'
    }

    return (
        <AppInner isTg={false}>
            <PaymentCell
                initialPaymentMethods={paymentMethods}
                variant='black'
                style={styles}
            />
        </AppInner>
    )
}

export const Playground: Story = {
    render: () => <Example />,
    args: {}
}
