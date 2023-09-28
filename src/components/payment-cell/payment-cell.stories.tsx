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
    console.log('🚀 ~ file: payment-cell.stories.tsx:19 ~ App ~ paymentMethods:', paymentMethods)

    return (
        <div>
            <PaymentCell
                initialPaymentMethods={paymentMethods}
                variant='black'
            />
        </div>
    )
}

export const Playground: Story = {
    render: () => <Example />,
    args: {}
}
