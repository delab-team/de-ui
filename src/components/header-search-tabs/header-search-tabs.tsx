import { FC } from 'react'

import { HeaderTabs, Tab } from '../header-tabs/header-tabs'
import { HeaderSearch } from '../header-search/header-search'

import s from '../../styles/header-search-tabs.module.css'

export interface HeaderSearchTabsProps {
    variant: 'black' | 'white'
    containerWidth: number
    searchValue: string
    searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    tabsContent: Tab[]
    className?: string
    style?: React.CSSProperties
}

export const HeaderSearchTabs: FC<HeaderSearchTabsProps> = ({
    variant,
    containerWidth,
    searchValue,
    searchOnChange,
    tabsContent,
    className,
    style
}) => {
    const styles = {
        ...style,
        maxWidth: `${containerWidth}px`
    }
    return (
        <header className={`${s.header} ${variant === 'white' ? s.headerWhite : s.headerBlack} ${className || ''}`} style={styles}>
            <HeaderSearch
                value={searchValue}
                onChange={searchOnChange}
                variant={variant}
                containerWidth={containerWidth}
            />
            <HeaderTabs tabs={tabsContent} variant={variant} />
        </header>
    )
}
