import React, { FC } from 'react'

import s from './page-wrapper-sidebar.module.css'

export interface PageWrapperSidebarProps {
    children: React.ReactNode;
    pageTitle: string;
    header: React.ReactNode;
    footer: React.ReactNode;
    sidebar: React.ReactNode;
}

export const PageWrapperSidebar: FC<PageWrapperSidebarProps> = ({
    header,
    footer,
    pageTitle,
    sidebar,
    children
}) => {
    document.title = pageTitle

    return (
        <div className={s.pageWrapper}>
            <header className={s.header}>
                {header}
            </header>
            <div className={s.contentWrapper}>
                <aside className={s.sidebar}>
                    {sidebar}
                </aside>
                <main className={s.main}>
                    {children}
                </main>
            </div>
            <footer className={s.footer}>
                {footer}
            </footer>
        </div>
    )
}
