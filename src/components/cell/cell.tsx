import React from 'react'
import classNames from 'classnames'

import styles from '../../styles/cell.module.css'

export interface CellProps {
    before?: React.ReactNode;
    badgeBeforeTitle?: React.ReactNode;
    badgeAfterTitle?: React.ReactNode;
    badgeBeforeSubtitle?: React.ReactNode;
    badgeAfterSubtitle?: React.ReactNode;
    indicator?: React.ReactNode;
    children?: React.ReactNode;
    after?: React.ReactNode;
    expandable?: boolean | 'auto' | 'always';
    multiline?: boolean;
    subhead?: React.ReactNode;
    subtitle?: React.ReactNode;
    extraSubtitle?: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export const Cell: React.FC<CellProps> = ({
    before,
    badgeBeforeTitle,
    badgeAfterTitle,
    badgeBeforeSubtitle,
    badgeAfterSubtitle,
    indicator,
    children,
    after,
    expandable,
    multiline,
    subhead,
    subtitle,
    extraSubtitle,
    className,
    disabled
}) => {
    const hasChevron = expandable === 'always'

    const hasAfter = !!after || hasChevron

    return (
        <div
            className={classNames(
                styles.Cell,
                disabled && styles['Cell--disabled'],
                className,
                { [styles['Cell--multiline']]: multiline }
            )}
        >
            {before && <div className={styles.Cell__before}>{before}</div>}
            <div className={styles.Cell__main}>
                {subhead && (
                    <div className={styles.Cell__subhead}>{subhead}</div>
                )}
                <div className={styles.Cell__content}>
                    {badgeBeforeTitle && (
                        <div className={styles.Cell__badge}>{badgeBeforeTitle}</div>
                    )}
                    <div className={styles.Cell__children}>{children}</div>
                    {badgeAfterTitle && (
                        <span className={styles.Cell__badge}>{badgeAfterTitle}</span>
                    )}
                </div>
                {subtitle && (
                    <div className={styles.Cell__content}>
                        {badgeBeforeSubtitle && (
                            <span className={styles.Cell__badge}>{badgeBeforeSubtitle}</span>
                        )}
                        <div className={styles.Cell__subtitle}>{subtitle}</div>
                        {badgeAfterSubtitle && (
                            <span className={styles.Cell__badge}>{badgeAfterSubtitle}</span>
                        )}
                    </div>
                )}
                {extraSubtitle && (
                    <div className={styles.Cell__extraSubtitle}>{extraSubtitle}</div>
                )}
            </div>
            {indicator && (
                <div className={styles.Cell__indicator}>{indicator}</div>
            )}
            {hasAfter && (
                <div className={styles.Cell__after}>
                    {after}
                    {hasChevron && (
                        <div className={styles.Cell__chevronIcon}>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
