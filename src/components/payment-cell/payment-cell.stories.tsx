/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { PaymentCell, PaymentCellProps } from './payment-cell'

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
        <div>
            <PaymentCell
                initialPaymentMethods={paymentMethods}
                variant='black'
                style={styles}
            />
        </div>
    )
}

export const Playground: Story = {
    render: () => <Example />,
    args: {}
}
