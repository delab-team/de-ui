import { FC } from 'react'

import s from '../../styles/header-search.module.css'

export interface HeaderSearchProps {
    value: string
    type?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    containerWidth?: number | string
    variant?: 'white' | 'black'
    style?: React.CSSProperties
}

const searchIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6.50006 1C9.53765 1 12.0001 3.46256 12.0001 6.50029C12.0001 7.74868 11.5842 8.89993 10.8835 9.82304L14.7791 13.7233C15.0718 14.0164 15.0715 14.4913 14.7785 14.784C14.4854 15.0767 14.0105 15.0764 13.7178 14.7834L9.82266 10.8839C8.89959 11.5847 7.74839 12.0006 6.50006 12.0006C3.46246 12.0006 1 9.53802 1 6.50029C1 3.46256 3.46246 1 6.50006 1ZM6.50006 2.5C4.2909 2.5 2.5 4.29098 2.5 6.50029C2.5 8.70961 4.2909 10.5006 6.50006 10.5006C8.70921 10.5006 10.5001 8.70961 10.5001 6.50029C10.5001 4.29098 8.70921 2.5 6.50006 2.5Z" fill="#99A2AD"/>
    </svg>
)

export const HeaderSearch: FC<HeaderSearchProps> = ({
    value,
    onChange,
    className,
    containerWidth,
    type = 'string',
    variant,
    style
}) => {
    const styles: React.CSSProperties = {
        ...style,
        maxWidth: `${containerWidth}px`
    }
    return (
        <div
            className={`${s.searchBody} ${variant === 'white' ? s.searchBodyWhite : s.searchBodyBlack} 
        ${className || ''}`}
            style={styles}
        >
            {searchIcon}
            <input type={type} value={value} onChange={onChange} placeholder="Search" className={s.searchInput} />
        </div>
    )
}
