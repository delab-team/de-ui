import { ButtonHTMLAttributes, ReactNode } from 'react'

import s from '../../styles/button.module.css'

import { Spinner } from '../spinner/spinner'

const buttonSize = { s: s['button--size-s'], m: s['button--size-m'], l: s['button--size-l'] }

const buttonType = {
    default: s['button--type-default'],
    outline: s['button--type-outline'],
    secondary: s['button--type-secondary'],
    tentery: s['button--type-tentery']
}

const buttonAlign = {
    left: s['button--align-left'],
    center: s['button--align-center'],
    right: s['button--align-right']
}

const buttonRounded = { s: s['button--rounded-small'], m: s['button--rounded-medium'], l: s['button--rounded-large'] }

export interface ButtonProps
    extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * icon
     */
    icon?: string
    /**
     * start Icon
     */
    startIcon?: string
    /**
     * end Icon
     */
    endIcon?: string
    /**
     * variant button
     */
    variant?: 'default' | 'outline' | 'secondary' | 'tentery'
    /**
     * size button
     */
    size?: 's' | 'm' | 'l'
    /**
     * loading
     */
    loading?: boolean
    /**
     * disabled
     */
    disabled?: boolean
    /**
     * rounded
     */
    rounded?: 's' | 'm' | 'l'
    /**
     * text align
     */
    textAlign?: 'left' | 'center' | 'right'
    /**
     * children
     */
    children?: ReactNode
}

export const Button = ({
    children,
    size = 's',
    variant = 'default',
    textAlign = 'center',
    rounded = 's',
    startIcon,
    endIcon,
    disabled = false,
    loading,
    ...restProps
}: ButtonProps): JSX.Element => (
    <button
        className={`
          ${s.btn}
          ${buttonSize[size]}
          ${buttonType[variant]}
          ${buttonAlign[textAlign]}
          ${buttonRounded[rounded]}
          ${disabled && s['btn-disabled']}
          ${loading && s['btn-loading']}
        `}
        disabled={disabled}
        {...restProps}
    >
        {loading && <Spinner size="small" />}
        {!!startIcon && <img src={startIcon} alt={startIcon} />}
        {children}
        {!!endIcon && <img src={endIcon} alt={endIcon} />}
    </button>
)
