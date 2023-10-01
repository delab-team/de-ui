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
    variant: 'black' | 'white';
    className?: string;
}

const selectVariantType = {
    black: s['select--type-black'],
    white: s['select--type-white']
}

const selectItemType = {
    black: s['select-item--type-black'],
    white: s['select-item--type-white']
}

export const Select: FC<SelectProps> = ({ options, selectedValue, onSelect, variant = 'black', className }) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    const toggleSelect = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (value: string) => {
        onSelect(value)
        toggleSelect()
    }

    return (
        <div className={`${s.customSelect} ${selectVariantType[variant]} ${className || ''}`}>
            <div className={`${s.selectHeader} ${isOpen ? s.open : ''}`} onClick={toggleSelect}>
                <div className={s.selectedValue}>{selectedValue}</div>
                <div className={s.arrowIcon}>
                    {isOpen ? <IconSelector id="chevron-up" color={variant === 'black' ? '#fff' : '#000'} size="23px" /> : <IconSelector id="chevron-down" color={variant === 'black' ? '#fff' : '#000'} size="23px" />}
                </div>
            </div>
            {isOpen && (
                <ul className={`${s.optionList} ${selectItemType[variant]}`}>
                    {options.map(option => (
                        option.value !== selectedValue && (
                            <li
                                key={option.value}
                                className={`${s.optionItem}`}
                                onClick={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </li>
                        )
                    ))}
                </ul>
            )}
        </div>
    )
}
