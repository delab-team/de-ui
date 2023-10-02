import { FC } from 'react'

import { HeaderTabs, Tab } from '../header-tabs/header-tabs'
import { HeaderSearch } from '../header-search/header-search'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/header-search-tabs.module.css'

export interface HeaderSearchTabsProps {
    variant: 'black' | 'white'
    containerWidth?: number | string
    searchValue: string
    searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    tabsContent: Tab[]
    className?: string
    style?: React.CSSProperties
    tgStyles?: {
        headerInner?: React.CSSProperties | undefined
        headerSearch?: {
            searchBody?: React.CSSProperties | undefined
            icon?: string | undefined
            input?: React.CSSProperties | undefined
        },
        headerTabs?: {
            inner?: React.CSSProperties | undefined;
            tabItem?: React.CSSProperties | undefined;
            tabContent?: React.CSSProperties | undefined;
        }
    }
}

export const HeaderSearchTabs: FC<HeaderSearchTabsProps> = ({
    variant,
    containerWidth,
    searchValue,
    searchOnChange,
    tabsContent,
    className,
    tgStyles,
    style
}) => {
    const styles = {
        ...style,
        maxWidth: `${containerWidth}px`
    }

    const isTg = useIsTg()

    const headerStyles = isTg ? { ...styles, ...tgStyles?.headerInner } : styles

    return (
        <header className={`${s.header} ${variant === 'white' ? s.headerWhite : s.headerBlack} ${className || ''}`} style={headerStyles}>
            <HeaderSearch
                value={searchValue}
                onChange={searchOnChange}
                variant={variant}
                containerWidth={containerWidth || ''} tgStyles={tgStyles?.headerSearch}
            />
            <HeaderTabs tabs={tabsContent} variant={variant} tgStyles={tgStyles?.headerTabs} />
        </header>
    )
}
