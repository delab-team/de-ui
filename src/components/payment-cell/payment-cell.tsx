import { FC, useState } from 'react'

import { Input } from '../input/input'
import { Button } from '../button/button'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/payment-cell.module.css'

export interface PaymentCellProps {
    initialPaymentMethods: string[];
    variant: 'white' | 'black';
    className?: string;
    style?: React.CSSProperties;
    tgStyles?: {
        inner?: React.CSSProperties | undefined;
        title?: React.CSSProperties | undefined;
        inputAdd?: React.CSSProperties | undefined;
        buttonAdd?: React.CSSProperties | undefined;
        paymentItem?: React.CSSProperties | undefined;
        addText?: React.CSSProperties | undefined;
    }
}

export const PaymentCell: FC<PaymentCellProps> = ({
    initialPaymentMethods,
    variant,
    className,
    style,
    tgStyles
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

    const isTg = useIsTg()

    const innerStyles = isTg ? { ...style, ...tgStyles?.inner } : style
    const titleStyles = isTg ? tgStyles?.title : undefined
    const inputAddStyles = isTg ? tgStyles?.inputAdd : undefined
    const buttonAddStyles = isTg ? tgStyles?.buttonAdd : undefined
    const buttonItemStyles = isTg ? tgStyles?.paymentItem : undefined
    const addText = isTg ? tgStyles?.addText : undefined

    return (
        <div className={`${s.inner} ${className || ''} ${variant === 'white' ? s.innerWhite : s.innerBlack}`} style={innerStyles}>
            <div className={s.title} style={titleStyles}>Payment methods</div>
            <div>
                {showInput ? (
                    <div className={s.item} style={{ marginBottom: showInput ? '25px' : '20px'  }}>
                        <Input
                            variant={variant === 'white' ? 'white' : 'black'}
                            type="text"
                            placeholder="Enter payment address"
                            value={newPaymentMethod}
                            onChange={handleInputChange}
                            style={inputAddStyles}
                        />
                        <Button size="medium" variant={variant === 'white' ? 'primary' : 'successfully'} onClick={handleAddPayment} style={buttonAddStyles}>Add</Button>
                    </div>
                ) : (
                    <span onClick={handleAddPayment} className={`${s.add}`} style={addText}>Add a new payment method</span>
                )}
            </div>
            {paymentMethods.map((method, index) => (
                <div key={index} className={` ${variant === 'white' ? s.paymentItemWhite : s.paymentItemBlack}`} style={buttonItemStyles}>{method}</div>
            ))}
        </div>
    )
}
