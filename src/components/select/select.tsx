import { FC, useState } from 'react'
import { IconSelector } from '../icon-selector/icon-selector'

import s from '../../styles/select.module.css'

interface Option {
    value: string;
    label: string;
}

export interface SelectProps {
    options: Option[];
    selectedValue: string;
    onSelect: (value: string) => void;
}

export const Select: FC<SelectProps> = ({ options, selectedValue, onSelect }) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    const toggleSelect = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (value: string) => {
        onSelect(value)
        toggleSelect()
    }

    return (
        <div className={s.customSelect}>
            <div className={`${s.selectHeader} ${isOpen ? s.open : ''}`} onClick={toggleSelect}>
                <div className={s.selectedValue}>{selectedValue}</div>
                <div className={s.arrowIcon}>
                    {isOpen ? <IconSelector id="chevron-up" size="23px" color="#fff"/> : <IconSelector id="chevron-down" size="23px" color="#fff" />}
                </div>
            </div>
            {isOpen && (
                <ul className={s.optionList}>
                    {options.map(option => (
                        <li
                            key={option.value}
                            className={s.optionItem}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
