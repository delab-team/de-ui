import { FC } from 'react'

import s from './header.module.css'

export interface HeaderProps {
    children?: React.ReactNode;
    before?: React.ReactNode;
    after?: React.ReactNode;
    width: string;
    className?: string;
    position?: 'fixed' | 'absolute' | 'relative' | 'static';
}

export const Header: FC<HeaderProps> = ({
    width,
    before,
    children,
    after,
    className,
    position = 'static'
}) => (
    <div className={`${s.header} ${s[position]} ${className}`}>
        <div className={s['header-in']} style={{ width }}>
            <div className={s['header-before']}>{before}</div>
            <div className={s['header-children']}>{children}</div>
            <div className={s['header-after']}>{after}</div>
        </div>
    </div>
)
