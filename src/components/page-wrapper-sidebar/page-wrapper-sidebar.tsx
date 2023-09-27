import { FC } from 'react'

import s from '../../styles/page-wrapper-sidebar.module.css'

export interface PageWrapperSidebarProps {
    children: React.ReactNode;
    pageTitle: string;
    header: React.ReactNode;
    footer: React.ReactNode;
    sidebar: React.ReactNode;
    containerWidth?: string;
    className?: string;
}

export const PageWrapperSidebar: FC<PageWrapperSidebarProps> = ({
    header,
    footer,
    pageTitle,
    sidebar,
    children,
    containerWidth,
    className
}) => {
    document.title = pageTitle

    const containerStyle = containerWidth ? { width: containerWidth } : undefined

    const wrapperClassName = `${s.pageWrapper} ${className || ''}`

    return (
        <div className={wrapperClassName} style={containerStyle}>
            <div className={s.header}>
                {header}
            </div>
            <div className={s.contentWrapper}>
                <aside className={s.sidebar}>
                    {sidebar}
                </aside>
                <main className={s.main}>
                    {children}
                </main>
            </div>
            <div className={s.footer}>
                {footer}
            </div>
        </div>
    )
}
