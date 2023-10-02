import { CSSProperties, FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/header.module.css'

export interface HeaderProps {
    children?: React.ReactNode;
    before?: React.ReactNode;
    after?: React.ReactNode;
    width: string;
    className?: string;
    containerWidth?: number | string
    position?: 'fixed' | 'absolute' | 'relative' | 'static';
    style?: CSSProperties;
    tgStyles?: {
        header?: CSSProperties | undefined;
        before?: CSSProperties | undefined;
        children?: CSSProperties | undefined;
        after?: CSSProperties | undefined;
    }
}

export const Header: FC<HeaderProps> = ({
    width,
    before,
    children,
    after,
    className,
    position = 'static',
    style,
    containerWidth,
    tgStyles
}) => {
    const styles = {
        ...style,
        maxWidth: `${containerWidth}px`
    }

    const isTg = useIsTg()

    const headerStyles = isTg ? { ...styles, ...tgStyles?.header } : styles
    const beforeStyles = isTg ? tgStyles?.before : undefined
    const childrenStyles = isTg ? tgStyles?.children : undefined
    const afterStyles = isTg ? tgStyles?.after : undefined

    return (
        <header className={`${s.header} ${s[position]} ${className}`} style={headerStyles}>
            <div className={s['header-in']} style={{ width }}>
                <div className={s['header-before']} style={beforeStyles}>{before}</div>
                <div className={s['header-children']} style={childrenStyles}>{children}</div>
                <div className={s['header-after']} style={afterStyles}>{after}</div>
            </div>
        </header>
    )
}
