/* eslint-disable max-len */
import { FC } from 'react'

import s from '../../styles/table.module.css'

export interface TableProps {
    data: any[][];
    columnWidths?: number[];
    rowHeights?: number[];
    containerWidth?: string;
    className?: string;
}

export const Table: FC<TableProps> = ({ data, columnWidths = [], rowHeights = [], containerWidth, className }) => (
    <div className={s.tableContainer} style={{ width: containerWidth }}>
        <table className={`${s.table} ${className || ''}`}>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} style={{ height: rowHeights[rowIndex] }}>
                        {row.map((cell, columnIndex) => (
                            <td
                                key={columnIndex}
                                style={{ width: columnWidths[columnIndex] }}
                                className={s.tdTable}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
