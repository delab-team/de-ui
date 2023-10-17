/* eslint-disable max-len */
import { CSSProperties, FC } from 'react'
import { useIsTg } from '../../hooks/useIsTg'

export interface DivProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
    tgStyles?: CSSProperties;
    style?: CSSProperties;
    children?: React.ReactNode | React.ReactNode[]
}

export const Div: FC<DivProps> = ({ className, tgStyles, children, style, ...rest }) => {
    const isTg = useIsTg()

    const styles = isTg ? { ...style, ...tgStyles } : style

    return (
        <div className={className} style={styles} {...rest}>
            {children}
        </div>
    )
}
