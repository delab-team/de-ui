/* eslint-disable max-len */
import { FC } from 'react'
import { useIsTg } from '../../hooks/useIsTg'

import styles from '../../styles/footer.module.css'

interface MenuItem {
    id: string;
    link: React.ReactNode;
}

interface ContactInfo {
    phoneNumber: string;
    email: string;
    address: string;
}

export interface FooterProps {
    logo: string;
    menuItems: MenuItem[];
    contactInfo?: ContactInfo;
    backgroundColor?: string;
    children?: React.ReactNode;
    className?: string;
    menuItems2?: MenuItem[];
    menuItems3?: MenuItem[];
    logoSize?: number;
    logoWidth?: number;
    tgStyles?: {
        footerInner?: React.CSSProperties | undefined;
        logo?: React.CSSProperties | undefined;
        menuLi?: React.CSSProperties | undefined;
        phoneNumber?: React.CSSProperties | undefined;
        email?: React.CSSProperties | undefined;
    }
}

export const Footer: FC<FooterProps> = ({
    logo,
    menuItems,
    contactInfo,
    backgroundColor = '#333',
    children,
    className,
    menuItems2,
    menuItems3,
    logoSize,
    logoWidth,
    tgStyles
}) => {
    const isTg = useIsTg()

    const footerInnerStyles = isTg ? { ...tgStyles?.footerInner, backgroundColor } : { backgroundColor }

    const logoStyles = isTg ? tgStyles?.logo : undefined
    const menuLi = isTg ? tgStyles?.menuLi : undefined
    const phoneNumberStyles = isTg ? tgStyles?.phoneNumber : undefined
    const emailStyles = isTg ? tgStyles?.email : undefined

    return (
        <footer className={`${styles.footer} ${className}`} style={footerInnerStyles}>
            <div className={styles['footer-content']}>
                <div className={styles['footer-logo']}>
                    <img src={logo} alt="Logo" height={logoSize} width={logoWidth} style={logoStyles} />
                </div>
                <div className={styles['footer-menu']}>
                    <ul>
                        {menuItems.map(menuItem => (
                            <li key={menuItem.id} style={menuLi}>
                                {menuItem.link}
                            </li>
                        ))}
                    </ul>
                </div>
                {menuItems2 && (
                    <div className={styles['footer-menu']}>
                        <ul>
                            {menuItems2.map(menuItem => (
                                <li key={menuItem.id}>
                                    {menuItem.link}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {menuItems3 && (
                    <div className={styles['footer-menu']}>
                        <ul>
                            {menuItems3.map(menuItem => (
                                <li key={menuItem.id}>
                                    {menuItem.link}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {contactInfo && (
                    <div className={styles['footer-contact']}>
                        <h4>Contact Us</h4>
                        <p>
                        Phone: <a href={`tel:${contactInfo.phoneNumber}`} style={phoneNumberStyles}>{contactInfo.phoneNumber}</a>
                            <br />
                        Email: <a href={`mailto:${contactInfo.email}`} style={emailStyles}>{contactInfo.email}</a>
                            <br />
                        Address: {contactInfo.address}
                        </p>
                    </div>
                )}
                <div className={styles['footer-custom-content']}>
                    {children}
                </div>
            </div>
        </footer>
    )
}
