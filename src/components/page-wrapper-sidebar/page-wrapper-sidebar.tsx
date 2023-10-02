import { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/page-wrapper-sidebar.module.css'

export interface PageWrapperSidebarProps {
    children: React.ReactNode;
    pageTitle: string;
    header: React.ReactNode;
    footer: React.ReactNode;
    sidebar: React.ReactNode;
    containerWidth?: string;
    className?: string;
    tgStyles?: {
        wrapper?: React.CSSProperties | undefined;
        header?: React.CSSProperties | undefined;
        contentWrapper?: React.CSSProperties | undefined;
        sidebar?: React.CSSProperties | undefined;
        main?: React.CSSProperties | undefined;
        footer?: React.CSSProperties | undefined;
    };
}

export const PageWrapperSidebar: FC<PageWrapperSidebarProps> = ({
    header,
    footer,
    pageTitle,
    sidebar,
    children,
    containerWidth,
    className,
    tgStyles
}) => {
    document.title = pageTitle

    const containerStyle = containerWidth ? { width: containerWidth } : undefined

    const wrapperClassName = `${s.pageWrapper} ${className || ''}`

    const isTg = useIsTg()

    const wrapperStyles = isTg ? { ...containerStyle, ...tgStyles?.wrapper } : containerStyle
    const headerStyle = isTg ? tgStyles?.header : undefined
    const wrapperStyle = isTg ? tgStyles?.contentWrapper : undefined
    const sidebarStyle = isTg ? tgStyles?.sidebar : undefined
    const mainStyle = isTg ? tgStyles?.main : undefined
    const footerStyle = isTg ? tgStyles?.footer : undefined

    return (
        <div className={wrapperClassName} style={wrapperStyles}>
            <div className={s.header} style={headerStyle}>
                {header}
            </div>
            <div className={s.contentWrapper} style={wrapperStyle}>
                <aside className={s.sidebar} style={sidebarStyle}>
                    {sidebar}
                </aside>
                <main className={s.main} style={mainStyle}>
                    {children}
                </main>
            </div>
            <div className={s.footer} style={footerStyle}>
                {footer}
            </div>
        </div>
    )
}
