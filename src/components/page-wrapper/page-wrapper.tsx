import { FC } from 'react'

import s from '../../styles/page-wrapper.module.css'

export interface PageWrapperProps {
    content: React.ReactNode;
    pageTitle: string;
    header: React.ReactNode;
    footer: React.ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = ({ content, header, footer, pageTitle }) => {
    document.title = pageTitle

    return (
        <div className={s.pageWrapper}>
            <header>
                {header}
            </header>
            <main>
                {content}
            </main>
            <footer>
                {footer}
            </footer>
        </div>
    )
}
