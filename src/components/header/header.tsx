import { CSSProperties, FC } from 'react'

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
}

export const Header: FC<HeaderProps> = ({
    width,
    before,
    children,
    after,
    className,
    position = 'static',
    style,
    containerWidth
}) => {
    const styles = {
        ...style,
        maxWidth: `${containerWidth}px`
    }

    return (
        <header className={`${s.header} ${s[position]} ${className}`} style={styles}>
            <div className={s['header-in']} style={{ width }}>
                <div className={s['header-before']}>{before}</div>
                <div className={s['header-children']}>{children}</div>
                <div className={s['header-after']}>{after}</div>
            </div>
        </header>
    )
}
