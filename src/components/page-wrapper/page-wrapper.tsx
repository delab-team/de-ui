import { FC } from 'react'

import s from '../../styles/page-wrapper.module.css'

export interface PageWrapperProps {
    content: React.ReactNode;
    pageTitle: string;
    header: React.ReactNode;
    footer: React.ReactNode;
    containerWidth?: string;
    className?: string;
    headerClassName?: string;
    mainClassName?: string;
    footerClassName?: string;
}

export const PageWrapper: FC<PageWrapperProps> = ({
    content,
    header,
    footer,
    pageTitle,
    containerWidth,
    className,
    headerClassName,
    mainClassName,
    footerClassName
}) => {
    document.title = pageTitle

    const containerStyle = containerWidth ? { width: containerWidth } : undefined

    const wrapperClassName = `${s.pageWrapper} ${className || ''}`

    return (
        <div className={wrapperClassName} style={containerStyle}>
            <div className={headerClassName}>
                {header}
            </div>
            <main className={`${s.main} ${mainClassName || ''}`}>
                {content}
            </main>
            <div className={`${s.footer} ${footerClassName || ''}`}>
                {footer}
            </div>
        </div>
    )
}
