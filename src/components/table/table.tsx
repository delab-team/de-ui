/* eslint-disable max-len */
import { CSSProperties, FC } from 'react'
import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/table.module.css'

export interface TableProps {
    data: any[][];
    columnWidths?: number[];
    rowHeights?: number[];
    containerWidth?: string;
    className?: string;
    tgStyles?: {
        tableContainer?: CSSProperties | undefined
        td?: CSSProperties | undefined
    }
}

export const Table: FC<TableProps> = ({ data, columnWidths = [], rowHeights = [], containerWidth, className, tgStyles }) => {
    const isTg = useIsTg()

    const tableStyles = { width: containerWidth }

    const tableContainerStyles = isTg ? { ...tableStyles, ...tgStyles?.tableContainer } : tableStyles

    return (
        <div className={s.tableContainer} style={tableContainerStyles}>
            <table className={`${s.table} ${className || ''}`}>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} style={{ height: rowHeights[rowIndex] }}>
                            {row.map((cell, columnIndex) => {
                                const tdStyle = { width: columnWidths[columnIndex] }
                                const tdStyles = isTg ? { ...tdStyle, ...tgStyles?.td } : tdStyle
                                return <td
                                    key={columnIndex}
                                    style={tdStyles}
                                    className={s.tdTable}
                                >
                                    {cell}
                                </td>
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
