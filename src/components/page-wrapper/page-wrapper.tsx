import { FC } from 'react'

import s from '../../styles/page-wrapper.module.css'

export interface PageWrapperProps {
    content: React.ReactNode;
    pageTitle: string;
    header: React.ReactNode;
    footer: React.ReactNode;
    containerWidth?: string;
    className?: string;
}

export const PageWrapper: FC<PageWrapperProps> = ({
    content,
    header,
    footer,
    pageTitle,
    containerWidth,
    className
}) => {
    document.title = pageTitle

    const containerStyle = containerWidth ? { width: containerWidth } : undefined

    const wrapperClassName = `${s.pageWrapper} ${className || ''}`

    return (
        <div className={wrapperClassName} style={containerStyle}>
            <div>
                {header}
            </div>
            <main className={s.main}>
                {content}
            </main>
            <div className={s.footer}>
                {footer}
            </div>
        </div>
    )
}
