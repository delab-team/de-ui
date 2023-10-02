import { CSSProperties, FC, useState } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/header-tabs.module.css'

export interface Tab {
    title: string;
    content: React.ReactNode;
}

export interface HeaderTabsProps {
    tabs: Tab[];
    variant: 'white' | 'black'
    style?: React.CSSProperties;
    className?: string;
    tgStyles?: {
        inner?: CSSProperties | undefined;
        tabItem?: CSSProperties | undefined;
        tabContent?: CSSProperties | undefined;
    }
}

export const HeaderTabs: FC<HeaderTabsProps> = ({ tabs, variant, style, className, tgStyles }) => {
    const [ activeTabIndex, setActiveTabIndex ] = useState<number>(0)

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index)
    }

    const isTg = useIsTg()

    const innerStyles = isTg ? { ...style, ...tgStyles?.inner } : style
    const tabItemStyles = isTg ? tgStyles?.tabItem : undefined
    const tabContentStyles = isTg ? tgStyles?.tabContent : undefined

    return (
        <header className={`${s.inner} ${variant === 'white' ? s.innerWhite : s.innerBlack} ${className}`} style={innerStyles}>
            <div className={s.tabs}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`${s.tab} ${index === activeTabIndex ? s.activeTab : ''}`}
                        onClick={() => handleTabClick(index)}
                        style={tabItemStyles}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className={s.tabContent} style={tabContentStyles}>
                {tabs[activeTabIndex] && tabs[activeTabIndex].content}
            </div>
        </header>
    )
}
