import { FC } from 'react'

export interface PageWrapperProps {
    content: React.ReactNode;
    pageTitle: string;
    header: React.ReactNode;
    footer: React.ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = ({ content, header, footer, pageTitle }) => {
    document.title = pageTitle

    return (
        <div className="page-wrapper">
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
