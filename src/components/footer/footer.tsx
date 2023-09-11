import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './footer.module.css'

interface MenuItem {
    id: string;
    url: string;
    label: string;
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
    footerClass?: string;
    menuItems2?: MenuItem[];
    menuItems3?: MenuItem[];
}

export const Footer: FC<FooterProps> = ({
    logo,
    menuItems,
    contactInfo,
    backgroundColor = '#333',
    children,
    footerClass,
    menuItems2,
    menuItems3
}) => (
    <footer className={`${styles.footer} ${footerClass}`} style={{ backgroundColor }}>
        <div className={styles['footer-content']}>
            <div className={styles['footer-logo']}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles['footer-menu']}>
                <ul>
                    {menuItems.map(menuItem => (
                        <li key={menuItem.id}>
                            <Link to={menuItem.url}>{menuItem.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {menuItems2 && (
                <div className={styles['footer-menu']}>
                    <ul>
                        {menuItems2.map(menuItem => (
                            <li key={menuItem.id}>
                                <Link to={menuItem.url}>{menuItem.label}</Link>
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
                                <Link to={menuItem.url}>{menuItem.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {contactInfo && (
                <div className={styles['footer-contact']}>
                    <h4>Contact Us</h4>
                    <p>
                        Phone: <a href={`tel:${contactInfo.phoneNumber}`}>{contactInfo.phoneNumber}</a>
                        <br />
                        Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
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
