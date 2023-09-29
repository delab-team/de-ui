import { FC, useState } from 'react'

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
}

export const HeaderTabs: FC<HeaderTabsProps> = ({ tabs, variant, style, className }) => {
    const [ activeTabIndex, setActiveTabIndex ] = useState<number>(0)

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index)
    }

    return (
        <header className={`${s.inner} ${variant === 'white' ? s.innerWhite : s.innerBlack} ${className}`} style={style}>
            <div className={s.tabs}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`${s.tab} ${index === activeTabIndex ? s.activeTab : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className={s.tabContent}>
                {tabs[activeTabIndex] && tabs[activeTabIndex].content}
            </div>
        </header>
    )
}
