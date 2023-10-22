/* eslint-disable max-len */
import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

export interface LiProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: React.ReactNode | React.ReactNode[];
    tgStyles?: React.CSSProperties | undefined
}

export const Li: FC<LiProps> = ({
    children,
    tgStyles,
    ...rest
}) => {
    const isTg = useIsTg()

    const liTgStyles = isTg ? tgStyles : {}

    return <li {...rest} style={liTgStyles} {...rest}>{children}</li>
}
