import { CSSProperties, FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/cell.module.css'

export interface CellProps {
    className?: string;
    style?: React.CSSProperties;
    tgStyles?: {
        inner?: CSSProperties | undefined;
    };
    disabled?: boolean;
    leftClassName?: string;
    centerClassName?: string;
    rightClassName?: string;
    bottomLeftClassName?: string;
    leftContent?: React.ReactNode | React.ReactNode[]
    centerContent?: React.ReactNode | React.ReactNode[]
    rightContent?: React.ReactNode | React.ReactNode[]
    bottomLeftContent?: React.ReactNode | React.ReactNode[]
    rowLeftClassName?: string;
    rowContentClassName?: string;
    onClick?: (...args: any | any[]) => void;
}

export const Cell: FC<CellProps> = ({
    className,
    style,
    tgStyles,
    disabled = false,
    leftClassName,
    centerClassName,
    rightClassName,
    bottomLeftClassName,
    leftContent,
    centerContent,
    rightContent,
    bottomLeftContent,
    rowLeftClassName,
    rowContentClassName,
    onClick
}) => {
    const isTg = useIsTg()

    const innerStyle = isTg ? { ...style, ...tgStyles?.inner } : style

    return (
        <div onClick={onClick} className={`${className || ''} ${s.cell} ${disabled ? s.noHover : ''}`} style={{ ...innerStyle }}>
            <div className={`${s.row} ${rowLeftClassName || ''}`}>
                {leftContent && <div className={`${leftClassName || ''} ${s.left}`}>{leftContent}</div>}
                <div className={`${rowContentClassName || ''} ${s.rowLeftContent}`}>
                    {centerContent && <div className={`${centerClassName || ''} ${s.center}`}>{centerContent}</div>}
                    {bottomLeftContent && <div className={`${bottomLeftClassName || ''} ${s.bottomLeft}`}>{bottomLeftContent}</div>}
                </div>
            </div>

            {rightContent && <div className={`${rightClassName || ''} ${s.right}`}>{rightContent}</div>}
        </div>
    )
}
