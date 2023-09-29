import { FC, useState } from 'react'

import { Input } from '../input/input'
import { Button } from '../button/button'

import s from '../../styles/payment-cell.module.css'

export interface PaymentCellProps {
    initialPaymentMethods: string[];
    variant: 'white' | 'black';
    className?: string;
    style?: React.CSSProperties;
}

export const PaymentCell: FC<PaymentCellProps> = ({
    initialPaymentMethods,
    variant,
    className,
    style
}) => {
    const [ paymentMethods, setPaymentMethods ] = useState<string[]>(initialPaymentMethods)
    const [ newPaymentMethod, setNewPaymentMethod ] = useState<string>('')
    const [ showInput, setShowInput ] = useState<boolean>(false)

    const handleAddPayment = () => {
        if (showInput) {
            if (newPaymentMethod.trim() !== '') {
                setPaymentMethods([ ...paymentMethods, newPaymentMethod ])
                setNewPaymentMethod('')
            }
        }
        setShowInput(!showInput)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPaymentMethod(e.target.value)
    }

    return (
        <div className={`${s.inner} ${className || ''} ${variant === 'white' ? s.innerWhite : s.innerBlack}`} style={style}>
            <div className={s.title}>Payment methods</div>
            <div>
                {showInput ? (
                    <div className={s.item} style={{ marginBottom: showInput ? '25px' : '20px'  }}>
                        <Input
                            variant={variant === 'white' ? 'white' : 'black'}
                            type="text"
                            placeholder="Enter payment address"
                            value={newPaymentMethod}
                            onChange={handleInputChange}
                        />
                        <Button size="medium" variant={variant === 'white' ? 'primary' : 'successfully'} onClick={handleAddPayment}>Add</Button>
                    </div>
                ) : (
                    <span onClick={handleAddPayment} className={`${s.add}`}>Add a new payment method</span>
                )}
            </div>
            {paymentMethods.map((method, index) => (
                <div key={index} className={` ${variant === 'white' ? s.paymentItemWhite : s.paymentItemBlack}`}>{method}</div>
            ))}
        </div>
    )
}
