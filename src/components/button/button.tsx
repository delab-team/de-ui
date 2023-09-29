import { ButtonHTMLAttributes, ReactNode } from 'react'

import s from '../../styles/button.module.css'

import { Spinner } from '../spinner/spinner'

const buttonSize = { small: s['button--size-s'], medium: s['button--size-m'], large: s['button--size-l'], stretched: s['button--size-str'] }

const buttonType = {
    primary: s['button--type-primary'],
    secondary: s['button--type-secondary'],
    outline: s['button--type-outline'],
    tertiary: s['button--type-tertiary'],
    successfully: s['button--type-successfully'],
    danger: s['button--type-danger']
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
    variant?: 'primary' | 'secondary' | 'outline' | 'successfully' | 'danger'
    /**
     * size button
     */
    size?: 'small' | 'medium' | 'large' | 'stretched'
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
    /**
     * className
    */
    className?: string
}

export const Button = ({
    children,
    size = 'small',
    variant = 'primary',
    textAlign = 'center',
    rounded = 's',
    startIcon,
    endIcon,
    disabled = false,
    loading,
    className,
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
          ${className || ''}
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
