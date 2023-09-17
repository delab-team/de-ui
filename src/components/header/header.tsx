import { CSSProperties, FC } from 'react'

import s from './header.module.css'

export interface HeaderProps {
    children?: React.ReactNode;
    before?: React.ReactNode;
    after?: React.ReactNode;
    width: string;
    className?: string;
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
    style
}) => (
    <header className={`${s.header} ${s[position]} ${className}`} style={style}>
        <div className={s['header-in']} style={{ width }}>
            <div className={s['header-before']}>{before}</div>
            <div className={s['header-children']}>{children}</div>
            <div className={s['header-after']}>{after}</div>
        </div>
    </header>
)
