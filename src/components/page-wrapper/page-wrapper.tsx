import { CSSProperties, FC } from 'react'

import { useAppSelector } from '../../store'

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
    tgStyles?: {
        wrapperStyles?: CSSProperties | undefined;
        headerStyles?: CSSProperties | undefined;
        mainStyles?: CSSProperties | undefined;
        footerStyles?: CSSProperties | undefined;
    }
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
    footerClassName,
    tgStyles
}) => {
    document.title = pageTitle

    const containerStyle = containerWidth ? { width: containerWidth } : undefined

    const wrapperClassName = `${s.pageWrapper} ${className || ''}`

    const isTg = useAppSelector(state => state.tg.isTg)

    const mergedStyles = isTg ? { ...containerStyle, ...tgStyles?.wrapperStyles } : containerStyle
    const headerStyles = isTg ? tgStyles?.headerStyles : undefined
    const mainStyles = isTg ? tgStyles?.mainStyles : undefined
    const footerStyles = isTg ? tgStyles?.footerStyles : undefined

    return (
        <div className={wrapperClassName} style={mergedStyles}>
            <div className={headerClassName} style={headerStyles}>
                {header}
            </div>
            <main className={`${s.main} ${mainClassName || ''}`} style={mainStyles}>
                {content}
            </main>
            <div className={`${s.footer} ${footerClassName || ''}`} style={footerStyles}>
                {footer}
            </div>
        </div>
    )
}
