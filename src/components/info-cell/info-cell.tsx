import { CSSProperties, FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/info-cell.module.css'

export interface InfoCellProps {
    phone?: string
    email?: string
    connectedDevices?: number
    variant: 'white' | 'black'
    className?: string
    style?: React.CSSProperties
    tgStyles?: {
        inner?: CSSProperties | undefined,
        iconColor?: string | undefined,
        titleItem?: CSSProperties | undefined,
        contacts?: CSSProperties | undefined
    }
}

export const InfoCell: FC<InfoCellProps> = ({
    phone,
    email,
    connectedDevices,
    variant,
    className,
    style,
    tgStyles
}) => {
    const formatPhoneNumber = (phoneNumber: string) => {
        if (!phoneNumber) return ''

        const numericPhoneNumber = phoneNumber.replace(/\D/g, '')

        if (numericPhoneNumber.length < 9) return phoneNumber

        const formattedPhoneNumber = '+' + numericPhoneNumber.slice(0, 3) + ' ** *** *** ' + numericPhoneNumber.slice(-2)

        return formattedPhoneNumber
    }

    const formatEmail = (emailAddress: string) => {
        if (!emailAddress) return ''

        const [ username, domain ] = emailAddress.split('@')

        if (!username || !domain) return emailAddress

        return `${username.charAt(0)}${'*'.repeat(username.length - 1)}@${domain}`
    }

    const isTg = useIsTg()

    let iconsStyles: string | undefined = ''

    if (!isTg && variant === 'white') {
        iconsStyles = '#232323'
    } else if (!isTg && variant === 'black') {
        iconsStyles = '#fff'
    } else if (isTg && tgStyles?.iconColor !== undefined) {
        iconsStyles = tgStyles?.iconColor
    }

    const innerStyle = isTg ? { ...style, ...tgStyles?.inner } : style
    const titleStyles = isTg ? tgStyles?.titleItem : undefined
    const contactsStyles = isTg ? tgStyles?.contacts : undefined

    const phoneIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
                d="M16.1117 17.259L15.3776 17.9931C15.1815 18.1894 14.8892 18.254 14.6287 18.1585C13.8986 17.8901 12.9853 17.2085 11.8886 16.1117C10.793 15.016 10.1105 14.1026 9.84301 13.3715C9.74731 13.1111 9.81148 12.8188 10.0075 12.6225L10.7425 11.8884C12.0967 10.5341 12.2205 8.40112 11.0268 6.98541L10.165 5.96103C9.18127 4.79101 7.40905 4.67312 6.20545 5.69651C5.75782 6.08229 5.42131 6.5806 5.23068 7.13996C5.14829 7.38346 5.09509 7.63587 5.07218 7.8919C4.63135 11.1642 6.20941 14.5989 9.80536 18.1952C13.4013 21.7914 16.8348 23.3686 20.1078 22.9278C20.9581 22.8466 21.7444 22.4407 22.303 21.7944C23.3273 20.5917 23.2085 18.8183 22.0395 17.8346L21.0152 16.9717C19.5976 15.7799 17.4658 15.9047 16.1117 17.259ZM13.3029 14.6976C13.8267 15.2215 14.2835 15.6188 14.6528 15.8894C16.7761 13.766 20.0799 13.5724 22.3038 15.4421L23.3273 16.3044C25.3566 18.0122 25.5595 21.0553 23.8161 23.1023C22.9208 24.138 21.6607 24.7886 20.3748 24.9099C16.3927 25.4462 12.3881 23.6067 8.39109 19.6093C4.394 15.6119 2.55375 11.6062 3.08014 7.71368C3.11714 7.30007 3.20309 6.89231 3.33759 6.49481C3.64309 5.59837 4.18239 4.79977 4.90991 4.17284C6.94717 2.44061 9.98872 2.64353 11.6954 4.67346L12.5558 5.69618C14.428 7.91652 14.2362 11.223 12.1558 13.3035C12.3817 13.7169 12.7789 14.1735 13.3029 14.6976Z"
                fill={iconsStyles}
            />
        </svg>
    )

    const emailIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
                d="M8.12777 4L20.1765 4.00178C21.7514 4.02088 22.5731 4.19668 23.4253 4.65245C24.2514 5.09427 24.9057 5.74859 25.3475 6.57471C25.8318 7.48019 26 8.35117 26 10.1278V17.8722C26 19.6488 25.8318 20.5198 25.3475 21.4253C24.9057 22.2514 24.2514 22.9057 23.4253 23.3475C22.5198 23.8318 21.6488 24 19.8722 24H8.12777C6.35117 24 5.48019 23.8318 4.57471 23.3475C3.74859 22.9057 3.09427 22.2514 2.65245 21.4253C2.16819 20.5198 2 19.6488 2 17.8722L2.00178 9.82346C2.02088 8.24858 2.19668 7.42693 2.65245 6.57471C3.09427 5.74859 3.74859 5.09427 4.57471 4.65245C5.48019 4.16819 6.35117 4 8.12777 4ZM23.6872 7.72802L16.8284 14.5858C15.3184 16.0958 12.9014 16.1461 11.3309 14.7368L11.1716 14.5858L4.31283 7.72802C4.08341 8.24279 4 8.8316 4 10.1278V17.8722C4 19.3469 4.10796 19.906 4.41608 20.4821C4.67149 20.9597 5.04032 21.3285 5.51791 21.5839C6.02626 21.8558 6.52132 21.9718 7.6438 21.9954L8.12777 22H19.8722C21.3469 22 21.906 21.892 22.4821 21.5839C22.9597 21.3285 23.3285 20.9597 23.5839 20.4821C23.8558 19.9737 23.9718 19.4787 23.9954 18.3562L24 17.8722V10.1278C24 8.8316 23.9166 8.24279 23.6872 7.72802ZM19.8722 6H8.12777C6.8316 6 6.24279 6.08341 5.72802 6.31283L12.5858 13.1716C13.3257 13.9115 14.5012 13.9505 15.287 13.2884L15.4142 13.1716L22.272 6.31283C21.7572 6.08341 21.1684 6 19.8722 6Z"
                fill={iconsStyles}
            />
        </svg>
    )

    const devicesIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
                d="M8.84583 9L11.4194 9.00182C12.6168 9.01894 13.2646 9.15935 13.9369 9.51889C14.6 9.87355 15.1265 10.4 15.4811 11.0631C15.8663 11.7834 16 12.4756 16 13.8458V21.1542C16 22.5244 15.8663 23.2166 15.4811 23.9369C15.1265 24.6 14.6 25.1265 13.9369 25.4811C13.2166 25.8663 12.5244 26 11.1542 26H8.84583C7.47564 26 6.78342 25.8663 6.06313 25.4811C5.39998 25.1265 4.87355 24.6 4.51889 23.9369C4.13367 23.2166 4 22.5244 4 21.1542L4.00182 13.5806C4.01894 12.3832 4.15936 11.7354 4.51889 11.0631C4.87355 10.4 5.39998 9.87355 6.06313 9.51889C6.78342 9.13367 7.47564 9 8.84583 9ZM17.8722 2C19.6488 2 20.5198 2.16819 21.4253 2.65245C22.2514 3.09427 22.9057 3.74859 23.3475 4.57471C23.8033 5.42693 23.9791 6.24858 23.9982 7.82346L24 8.12777V19.8722C24 21.6488 23.8318 22.5198 23.3475 23.4253C22.9057 24.2514 22.2514 24.9057 21.4253 25.3475C20.5412 25.8204 19.6935 25.9906 18.0093 25.9997C17.4571 26.0026 17.0069 25.5573 17.004 25.005C17.001 24.4527 17.4463 24.0026 17.9986 23.9997C19.383 23.9922 19.9204 23.8843 20.4821 23.5839C20.9597 23.3285 21.3285 22.9597 21.5839 22.4821C21.8558 21.9737 21.9718 21.4787 21.9954 20.3562L22 19.8722V8.12777L21.9954 7.6438C21.9718 6.52132 21.8558 6.02626 21.5839 5.51791C21.3285 5.04032 20.9597 4.67149 20.4821 4.41608C19.9737 4.14421 19.4787 4.02817 18.3566 4.00463L17.8727 4L14.8672 4.00147C13.5777 4.01654 13.0637 4.1242 12.5179 4.41608C12.0403 4.67149 11.6715 5.04032 11.4161 5.51791C11.3163 5.70454 11.247 5.86463 11.1932 6.04356L11.144 6.23047C11.0203 6.76871 10.4836 7.10473 9.94536 6.98099C9.40712 6.85725 9.0711 6.3206 9.19484 5.78236C9.29702 5.33789 9.43976 4.9724 9.65245 4.57471C10.0943 3.74859 10.7486 3.09427 11.5747 2.65245C12.3813 2.22107 13.1542 2.0428 14.5643 2.00686L14.855 2.00154L17.8722 2ZM11.1542 11L8.62719 11.0011C7.72318 11.0112 7.36934 11.0884 7.00633 11.2825C6.69171 11.4508 6.45077 11.6917 6.28251 12.0063C6.07344 12.3973 6 12.7776 6 13.8458V21.1542C6 22.2224 6.07344 22.6027 6.28251 22.9937C6.45077 23.3083 6.69171 23.5492 7.00633 23.7175C7.34141 23.8967 7.66869 23.9762 8.42809 23.9953L8.84583 24H11.1542C12.2224 24 12.6027 23.9266 12.9937 23.7175C13.3083 23.5492 13.5492 23.3083 13.7175 22.9937C13.8967 22.6586 13.9762 22.3313 13.9953 21.5719L14 21.1542V13.8458C14 12.7776 13.9266 12.3973 13.7175 12.0063C13.5492 11.6917 13.3083 11.4508 12.9937 11.2825C12.6027 11.0734 12.2224 11 11.1542 11Z"
                fill={iconsStyles}
            />
        </svg>
    )

    return (
        <div className={`${s.inner} ${variant === 'white' ? s.innerWhite : s.innerBlack} ${className || ''}`} style={innerStyle}>
            {phone && (
                <div className={`${s.item} ${variant === 'white' ? s.itemWhite : s.itemBlack}`}>
                    <div className={s.itemInfo}>
                        {phoneIcon}
                        <span className={s.itemTitle} style={titleStyles}>Number</span>
                    </div>
                    <div
                        className={s.itemData}
                        style={contactsStyles}
                    >
                        {formatPhoneNumber(phone)}
                    </div>
                </div>
            )}
            {email && (
                <div className={`${s.item} ${variant === 'white' ? s.itemWhite : s.itemBlack}`}>
                    <div className={s.itemInfo}>
                        {emailIcon}
                        <span className={s.itemTitle} style={titleStyles}>Email</span>
                    </div>
                    <div className={s.itemData} style={contactsStyles}>{formatEmail(email)}</div>
                </div>
            )}
            {connectedDevices && (
                <div className={`${s.item} ${variant === 'white' ? s.itemWhite : s.itemBlack}`}>
                    <div className={s.itemInfo}>
                        {devicesIcon}
                        <span
                            className={s.itemTitle}
                            style={titleStyles}>Connected Devices:</span>
                    </div>
                    <div className={s.itemData} style={contactsStyles}>{connectedDevices}</div>
                </div>
            )}
        </div>
    )
}
