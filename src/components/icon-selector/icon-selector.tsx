/* eslint-disable max-len */
import React, { FC } from 'react'

import { useIsTg } from '../../hooks/useIsTg'

export interface IconSelectorProps {
    id:
    | 'arrow-down-left'
    | 'arrow-down-right'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-up-left'
    | 'arrow-up-right'
    | 'arrow-up'
    | 'home'
    | 'image'
    | 'bell-off'
    | 'bell'
    | 'briefcase'
    | 'calendar'
    | 'camera-off'
    | 'camera'
    | 'check-circle'
    | 'check-square'
    | 'help-circle'
    | 'info'
    | 'check'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'cloud'
    | 'clipboard'
    | 'compass'
    | 'heart'
    | 'link'
    | 'copy'
    | 'corner-down-left'
    | 'corner-down-right'
    | 'corner-left-down'
    | 'corner-left-up'
    | 'corner-right-down'
    | 'corner-right-up'
    | 'corner-up-left'
    | 'grid'
    | 'lock'
    | 'corner-up-right'
    | 'credit-card'
    | 'crop'
    | 'delete'
    | 'download-cloud'
    | 'download'
    | 'edit-2'
    | 'edit'
    | 'external-link'
    | 'eye-off'
    | 'eye'
    | 'file-minus'
    | 'file-plus'
    | 'file-text'
    | 'file'
    | 'folder'
    | 'log-out'
    | 'navigation-2'
    | 'paperclip'
    | 'plus-square'
    | 'plus'
    | 'power'
    | 'repeat'
    | 'rotate-ccw'
    | 'rotate-cw'
    | 'save'
    | 'scissors'
    | 'search'
    | 'server'
    | 'phone'
    | 'play-circle'
    | 'settings'
    | 'share'
    | 'share-2'
    | 'plus-circle'
    | 'shuffle'
    | 'shopping-cart'
    | 'thumbs-down'
    | 'thumbs-up'
    | 'slash'
    | 'star'
    | 'sun'
    | 'trash-2'
    | 'trash'
    | 'trending-down'
    | 'trending-up'
    | 'tv'
    | 'user-x'
    | 'user'
    | 'users'
    | 'video-off'
    | 'video'
    | 'volume-1'
    | 'volume-2'
    | 'volume-x'
    | 'volume'
    | 'wifi-off'
    | 'wifi'
    | 'x-circle'
    | 'unlock'
    | 'upload-cloud'
    | 'q-square'
    | 'x'
    | 'user-check'
    | 'user-minus'
    | 'zap'
    | 'zoom-in'
    | 'user-plus'
    | 'zoom-out'
    | 'info-2'
    | 'upload'
    size?: string
    color?: string
    className?: string
    tgStyles?: {
        stroke?: string
    }
}

export const IconSelector: FC<IconSelectorProps> = ({ id, size, color = '#000', className, tgStyles }) => {
    const base = [
        {
            id: 'arrow-down-left',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M28.5 9.5L9.5 28.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M23.75 28.5H9.5V14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'arrow-down-right',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M9.75 9.5L29.25 28.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.625 28.5H29.25V14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'arrow-down',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M19 6.33334V31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M28.5 22.1667L19 31.6667L9.5 22.1667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'arrow-left',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M31.6666 19H6.33331"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.8333 28.5L6.33331 19L15.8333 9.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'arrow-right',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M6.33331 19H31.6666"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.1667 9.5L31.6667 19L22.1667 28.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'arrow-up-left',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M28.5 28.5L9.5 9.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M23.75 9.5H9.5V23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'arrow-up-right',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M9.5 28.5L28.5 9.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.25 9.5H28.5V23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'arrow-up',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M19 31.6667V6.33334"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.5 15.8333L19 6.33334L28.5 15.8333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'home',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.875 14.25L19.5 3.16666L34.125 14.25V31.6667C34.125 33.4156 32.6699 34.8333 30.875 34.8333H8.125C6.33007 34.8333 4.875 33.4156 4.875 31.6667V14.25Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.625 34.8333V19H24.375V34.8333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'image',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H31.25C32.3546 4.75 33.25 5.64543 33.25 6.75V31.25C33.25 32.3546 32.3546 33.25 31.25 33.25H6.75C5.64543 33.25 4.75 32.3546 4.75 31.25V6.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4583 15.8333C14.77 15.8333 15.8333 14.77 15.8333 13.4583C15.8333 12.1467 14.77 11.0833 13.4583 11.0833C12.1467 11.0833 11.0833 12.1467 11.0833 13.4583C11.0833 14.77 12.1467 15.8333 13.4583 15.8333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.25 23.75L25.3333 15.8333L7.91666 33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'bell-off',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        d="M13.0521 3.84715C12.5742 4.12392 12.4112 4.73573 12.6879 5.21366C12.9647 5.69158 13.5765 5.85465 14.0544 5.57788L13.0521 3.84715ZM30.0833 14.625L29.0833 14.6245V14.625H30.0833ZM29.0833 21.125C29.0833 21.6773 29.531 22.125 30.0833 22.125C30.6356 22.125 31.0833 21.6773 31.0833 21.125H29.0833ZM26.9166 28.625C27.4689 28.625 27.9166 28.1773 27.9166 27.625C27.9166 27.0727 27.4689 26.625 26.9166 26.625V28.625ZM3.16663 26.625C2.61434 26.625 2.16663 27.0727 2.16663 27.625C2.16663 28.1773 2.61434 28.625 3.16663 28.625V26.625ZM7.91663 14.625H8.91663L8.91663 14.6238L7.91663 14.625ZM10.045 9.84189C10.2932 9.34851 10.0944 8.74735 9.601 8.49917C9.10762 8.25099 8.50647 8.44976 8.25828 8.94313L10.045 9.84189ZM22.6097 34.6171C22.8814 34.1363 22.7120 33.5262 22.2312 33.2544C21.7504 32.9827 21.1403 33.1522 20.8686 33.633L22.6097 34.6171ZM17.1314 33.633C16.8596 33.1522 16.2495 32.9827 15.7687 33.2544C15.2879 33.5262 15.1185 34.1363 15.3902 34.6171L17.1314 33.633ZM14.0544 5.57788C17.1720 3.77243 20.9860 3.80179 24.0771 5.65543L25.1057 3.94020C21.3910 1.71265 16.7994 1.67705 13.0521 3.84715L14.0544 5.57788ZM24.0771 5.65543C27.1714 7.51097 29.0851 10.9228 29.0833 14.6245L31.0833 14.6255C31.0855 10.2375 28.8171 6.16585 25.1057 3.94020L24.0771 5.65543ZM29.0833 14.625V21.125H31.0833V14.625H29.0833ZM26.9166 26.625H3.16663V28.625H26.9166V26.625ZM3.16663 28.625C6.36659 28.625 8.91663 25.97 8.91663 22.75H6.91663C6.91663 24.9148 5.21337 26.625 3.16663 26.625V28.625ZM8.91663 22.75V14.625H6.91663V22.75H8.91663ZM8.91663 14.6238C8.91458 12.9589 9.30197 11.3189 10.045 9.84189L8.25828 8.94313C7.37387 10.7013 6.9142 12.6502 6.91663 14.6262L8.91663 14.6238ZM20.8686 33.633C20.4751 34.3291 19.7597 34.7443 19 34.7443V36.7443C20.4983 36.7443 21.8701 35.9255 22.6097 34.6171L20.8686 33.633ZM19 34.7443C18.2402 34.7443 17.5248 34.3291 17.1314 33.633L15.3902 34.6171C16.1298 35.9255 17.5016 36.7443 19 36.7443V34.7443Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.58337 1.625L36.4167 37.375"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

            )
        },
        {
            id: 'bell',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <path
                        d="M3.25 26.625C2.69772 26.625 2.25 27.0727 2.25 27.625C2.25 28.1773 2.69772 28.625 3.25 28.625V26.625ZM8.125 14.625H7.125H8.125ZM30.875 14.625H31.875H30.875ZM22.3113 34.125L23.1763 34.6268C23.3557 34.3174 23.3563 33.9358 23.1778 33.6259C22.9993 33.316 22.6689 33.125 22.3113 33.125V34.125ZM16.6888 34.125V33.125C16.3311 33.125 16.0007 33.316 15.8222 33.6259C15.6437 33.9358 15.6443 34.3174 15.8238 34.6268L16.6888 34.125ZM35.75 26.625H3.25V28.625H35.75V26.625ZM3.25 28.625C6.49467 28.625 9.125 25.9947 9.125 22.75H7.125C7.125 24.8901 5.3901 26.625 3.25 26.625V28.625ZM9.125 22.75V14.625H7.125V22.75H9.125ZM9.125 14.625C9.125 8.89505 13.77 4.25 19.5 4.25V2.25C12.6655 2.25 7.125 7.79048 7.125 14.625H9.125ZM19.5 4.25C25.23 4.25 29.875 8.89505 29.875 14.625H31.875C31.875 7.79048 26.3345 2.25 19.5 2.25V4.25ZM29.875 14.625V22.75H31.875V14.625H29.875ZM29.875 22.75C29.875 25.9947 32.5053 28.625 35.75 28.625V26.625C33.6099 26.625 31.875 24.8901 31.875 22.75H29.875ZM21.4463 33.6232C21.0437 34.3171 20.3022 34.7442 19.5 34.7442V36.7442C21.0153 36.7442 22.4159 35.9375 23.1763 34.6268L21.4463 33.6232ZM19.5 34.7442C18.6978 34.7442 17.9563 34.3171 17.5538 33.6232L15.8238 34.6268C16.5841 35.9375 17.9847 36.7442 19.5 36.7442V34.7442ZM16.6888 35.125H22.3113V33.125H16.6888V35.125Z"
                        fill="black"
                        strokeWidth="2"
                    />
                </svg>
            )
        },
        {
            id: 'briefcase',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.16669 13.375C3.16669 12.2704 4.06212 11.375 5.16669 11.375H32.8334C33.9379 11.375 34.8334 12.2704 34.8334 13.375V32.125C34.8334 33.2296 33.9379 34.125 32.8334 34.125H5.16669C4.06212 34.125 3.16669 33.2296 3.16669 32.125V13.375Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.3334 34.125V8.125C25.3334 6.33007 23.9156 4.875 22.1667 4.875H15.8334C14.0845 4.875 12.6667 6.33007 12.6667 8.125V34.125"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'calendar',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.75 8.5C4.75 7.39543 5.64543 6.5 6.75 6.5H31.25C32.3546 6.5 33.25 7.39543 33.25 8.5V33.75C33.25 34.8546 32.3546 35.75 31.25 35.75H6.75C5.64543 35.75 4.75 34.8546 4.75 33.75V8.5Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.3333 3.25V9.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.6667 3.25V9.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.75 16.25H33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'camera-off',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.58331 1.625L36.4166 37.375"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.25 35.125C33.8023 35.125 34.25 34.6773 34.25 34.125C34.25 33.5727 33.8023 33.125 33.25 33.125V35.125ZM1.58331 30.875H0.583313H1.58331ZM9.49998 10.75C10.0523 10.75 10.5 10.3023 10.5 9.75C10.5 9.19772 10.0523 8.75 9.49998 8.75V10.75ZM14.25 3.875C13.6977 3.875 13.25 4.32272 13.25 4.875C13.25 5.42728 13.6977 5.875 14.25 5.875V3.875ZM23.75 4.875L24.5886 4.33026C24.4041 4.04633 24.0886 3.875 23.75 3.875V4.875ZM26.9166 9.75L26.078 10.2947C26.2625 10.5787 26.5781 10.75 26.9166 10.75V9.75ZM35.4166 28.1775C35.4166 28.7298 35.8644 29.1775 36.4166 29.1775C36.9689 29.1775 37.4166 28.7298 37.4166 28.1775H35.4166ZM25.0253 25.3847C25.3317 24.9252 25.2076 24.3043 24.748 23.998C24.2885 23.6916 23.6677 23.8158 23.3613 24.2753L25.0253 25.3847ZM15.9647 16.6134C16.4167 16.296 16.5257 15.6723 16.2083 15.2203C15.8909 14.7683 15.2672 14.6592 14.8153 14.9766L15.9647 16.6134ZM33.25 33.125H4.74998V35.125H33.25V33.125ZM4.74998 33.125C3.57769 33.125 2.58331 32.1423 2.58331 30.875H0.583313C0.583313 33.1976 2.42447 35.125 4.74998 35.125V33.125ZM2.58331 30.875V13H0.583313V30.875H2.58331ZM2.58331 13C2.58331 11.7327 3.57769 10.75 4.74998 10.75V8.75C2.42447 8.75 0.583313 10.6774 0.583313 13H2.58331ZM4.74998 10.75H9.49998V8.75H4.74998V10.75ZM14.25 5.875H23.75V3.875H14.25V5.875ZM22.9114 5.41974L26.078 10.2947L27.7553 9.20526L24.5886 4.33026L22.9114 5.41974ZM26.9166 10.75H33.25V8.75H26.9166V10.75ZM33.25 10.75C34.4223 10.75 35.4166 11.7327 35.4166 13H37.4166C37.4166 10.6774 35.5755 8.75 33.25 8.75V10.75ZM35.4166 13V28.1775H37.4166V13H35.4166ZM23.3613 24.2753C22.1456 26.0987 19.9973 26.9847 17.9118 26.5507L17.5044 28.5088C20.4066 29.1127 23.3671 27.8719 25.0253 25.3847L23.3613 24.2753ZM17.9118 26.5507C15.8235 26.1162 14.1707 24.435 13.7405 22.2571L11.7784 22.6447C12.3594 25.5858 14.6048 27.9055 17.5044 28.5088L17.9118 26.5507ZM13.7405 22.2571C13.3099 20.0772 14.1953 17.8559 15.9647 16.6134L14.8153 14.9766C12.3845 16.6837 11.1978 19.7055 11.7784 22.6447L13.7405 22.2571Z"
                        fill="black"
                        strokeWidth="2"
                    />
                </svg>
            )
        },
        {
            id: 'camera',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36.4166 30.875C36.4166 32.6699 34.9989 34.125 33.25 34.125H4.74998C3.00108 34.125 1.58331 32.6699 1.58331 30.875V13C1.58331 11.2051 3.00108 9.75 4.74998 9.75H11.0833L14.25 4.875H23.75L26.9166 9.75H33.25C34.9989 9.75 36.4166 11.2051 36.4166 13V30.875Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 27.625C22.4978 27.625 25.3334 24.7149 25.3334 21.125C25.3334 17.5351 22.4978 14.625 19 14.625C15.5022 14.625 12.6667 17.5351 12.6667 21.125C12.6667 24.7149 15.5022 27.625 19 27.625Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'check-circle',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        d="M33.25 19.6137V21.125C33.246 28.3216 28.6303 34.6583 21.906 36.6988C15.1817 38.7393 7.95055 35.9975 4.13402 29.9602C0.317492 23.923 0.824709 16.0284 5.38061 10.5577C9.93651 5.08707 17.4558 3.34348 23.8608 6.2725"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M34.8334 6.5L17.4167 24.375L12.6667 19.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'check-square',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        d="M12.6667 17.875L17.4167 22.75L34.8333 4.875"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.6667 19.5V30.875C31.6667 32.6699 30.2489 34.125 28.5 34.125H6.33332C4.58442 34.125 3.16666 32.6699 3.16666 30.875V8.125C3.16666 6.33007 4.58442 4.875 6.33332 4.875H23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'help-circle',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <path
                        d="M14.7712 14.625C15.5601 12.3826 17.8512 11.036 20.1942 11.4379C22.5371 11.8398 24.2485 13.8729 24.245 16.25C24.245 19.5 19.37 21.125 19.37 21.125"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5 35.75C28.4746 35.75 35.75 28.4746 35.75 19.5C35.75 10.5254 28.4746 3.25 19.5 3.25C10.5254 3.25 3.25 10.5254 3.25 19.5C3.25 28.4746 10.5254 35.75 19.5 35.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="19.5" cy="27.625" r="1.625" fill="none" stroke="black" strokeWidth="2" />
                </svg>
            )

        },
        {
            id: 'info',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 35.75C27.7445 35.75 34.8333 28.4746 34.8333 19.5C34.8333 10.5254 27.7445 3.25 19 3.25C10.2555 3.25 3.16666 10.5254 3.16666 19.5C3.16666 28.4746 10.2555 35.75 19 35.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M19 26V19.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <ellipse cx="19" cy="13" rx="1.58333" ry="1.625" fill="none" stroke="black" strokeWidth="2" />
                </svg>
            )
        },
        {
            id: 'check',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M31.6667 11.0833L14.25 28.5L6.33337 20.5833"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'chevron-down',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M9.75 14.25L19.5 23.75L29.25 14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'chevron-left',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                    <path
                        d="M10.75 20.5L1.25 11L10.75 1.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'chevron-right',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                    <path
                        d="M1.25 20.5L10.75 11L1.25 1.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'chevron-up',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M28.5 23.75L19 14.25L9.5 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'cloud',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 10.001H17.74C16.7004 5.97489 12.7499 3.4164 8.65079 4.11456C4.55168 4.81273 1.67084 8.53475 2.02271 12.678C2.37458 16.8212 5.84185 20.0041 9.99998 20.001H19C21.7614 20.001 24 17.7624 24 15.001C24 12.2396 21.7614 10.001 19 10.001Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'clipboard',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M25.3333 6.33334H28.5C30.2489 6.33334 31.6666 7.75111 31.6666 9.50001V31.6667C31.6666 33.4156 30.2489 34.8333 28.5 34.8333H9.49998C7.75108 34.8333 6.33331 33.4156 6.33331 31.6667V9.50001C6.33331 7.75111 7.75108 6.33334 9.49998 6.33334H12.6666"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6667 4.16666C12.6667 3.61437 13.1144 3.16666 13.6667 3.16666H24.3334C24.8856 3.16666 25.3334 3.61437 25.3334 4.16666V8.49999C25.3334 9.05227 24.8856 9.49999 24.3334 9.49999H13.6667C13.1144 9.49999 12.6667 9.05227 12.6667 8.49999V4.16666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'compass',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 34.8333C27.7445 34.8333 34.8333 27.7445 34.8333 19C34.8333 10.2555 27.7445 3.16666 19 3.16666C10.2555 3.16666 3.16666 10.2555 3.16666 19C3.16666 27.7445 10.2555 34.8333 19 34.8333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.7133 12.2867L22.3567 22.3567L12.2867 25.7133L15.6433 15.6433L25.7133 12.2867V12.2867Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'heart',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.865 7.29916C32.1888 5.66514 29.9149 4.7471 27.5438 4.7471C25.1727 4.7471 22.8987 5.66514 21.2225 7.29916L19.5 8.97749L17.7775 7.29916C14.2864 3.89754 8.62614 3.89754 5.13501 7.29916C1.64388 10.7008 1.64388 16.2159 5.13501 19.6175L6.85751 21.2958L19.5 33.6142L32.1425 21.2958L33.865 19.6175C35.542 17.9842 36.4842 15.7686 36.4842 13.4583C36.4842 11.148 35.542 8.9324 33.865 7.29916Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'link',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M15.8333 20.5833C17.2092 22.4227 19.3161 23.5738 21.6072 23.7378C23.8983 23.9019 26.1478 23.0628 27.7717 21.4383L32.5217 16.6883C35.5219 13.582 35.479 8.64432 32.4252 5.59059C29.3715 2.53686 24.4338 2.49396 21.3275 5.49415L18.6042 8.20165"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.1667 17.4167C20.7908 15.5773 18.6839 14.4262 16.3928 14.2621C14.1017 14.098 11.8523 14.9372 10.2283 16.5617L5.47835 21.3117C2.47815 24.418 2.52106 29.3557 5.57478 32.4094C8.62851 35.4631 13.5662 35.506 16.6725 32.5058L19.38 29.7983"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'copy',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.25 16.25C14.25 15.1454 15.1454 14.25 16.25 14.25H32.8333C33.9379 14.25 34.8333 15.1454 34.8333 16.25V32.8333C34.8333 33.9379 33.9379 34.8333 32.8333 34.8333H16.25C15.1454 34.8333 14.25 33.9379 14.25 32.8333V16.25Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.91663 23.75H6.33329C4.58439 23.75 3.16663 22.3322 3.16663 20.5833V6.33334C3.16663 4.58444 4.58439 3.16667 6.33329 3.16667H20.5833C22.3322 3.16667 23.75 4.58444 23.75 6.33334V7.91667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'corner-down-left',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M14.625 15.8333L6.5 23.75L14.625 31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M32.5 6.33333V17.4167C32.5 20.9145 29.5899 23.75 26 23.75H6.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'corner-down-right',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M23.75 15.8333L31.6667 23.75L23.75 31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.33331 6.33333V17.4167C6.33331 20.9145 9.16884 23.75 12.6666 23.75H31.6666"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'corner-left-down',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M22.1666 23.75L14.25 31.6667L6.33331 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.6667 6.33333H20.5833C17.0855 6.33333 14.25 9.16886 14.25 12.6667V31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'corner-left-up',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M22.1666 14.25L14.25 6.33333L6.33331 14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.6667 31.6667H20.5833C17.0855 31.6667 14.25 28.8311 14.25 25.3333V6.33333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'corner-right-down',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M15.8333 23.75L23.75 31.6667L31.6666 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.33331 6.33333H17.4166C20.9144 6.33333 23.75 9.16886 23.75 12.6667V31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'corner-right-up',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M15.8333 14.25L23.75 6.33333L31.6666 14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.33331 31.6667H17.4166C20.9144 31.6667 23.75 28.8311 23.75 25.3333V6.33333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'corner-up-left',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M14.25 22.1667L6.33334 14.25L14.25 6.33333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.6667 31.6667V20.5833C31.6667 17.0855 28.8311 14.25 25.3333 14.25H6.33334"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'grid',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.875 4.75H16.25V15.8333H4.875V4.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.75 4.75H34.125V15.8333H22.75V4.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.75 22.1667H34.125V33.25H22.75V22.1667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.875 22.1667H16.25V33.25H4.875V22.1667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'lock',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.75 19.4167C4.75 18.3121 5.64543 17.4167 6.75 17.4167H31.25C32.3546 17.4167 33.25 18.3121 33.25 19.4167V32.8333C33.25 33.9379 32.3546 34.8333 31.25 34.8333H6.75C5.64543 34.8333 4.75 33.9379 4.75 32.8333V19.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.0833 17.4167V11.0833C11.0833 6.71108 14.6278 3.16667 19 3.16667C23.3723 3.16667 26.9167 6.71108 26.9167 11.0833V17.4167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'corner-up-right',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        d="M23.75 22.75L31.6667 14.625L23.75 6.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.33337 32.5V21.125C6.33337 17.5351 9.1689 14.625 12.6667 14.625H31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'credit-card',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.625 8.5C1.625 7.39543 2.52043 6.5 3.625 6.5H35.375C36.4796 6.5 37.375 7.39543 37.375 8.5V30.5C37.375 31.6046 36.4796 32.5 35.375 32.5H3.625C2.52043 32.5 1.625 31.6046 1.625 30.5V8.5Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.625 16.25H37.375"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'crop',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        d="M9.70583 1.625L9.5 26C9.5 27.7949 10.9178 29.25 12.6667 29.25H36.4167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.58331 9.96125L25.3333 9.75C27.0822 9.75 28.5 11.2051 28.5 13V37.375"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'delete',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.25 6.5H12.6666L1.58331 19.5L12.6666 32.5H33.25C34.9989 32.5 36.4166 31.0449 36.4166 29.25V9.75C36.4166 7.95507 34.9989 6.5 33.25 6.5Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M28.5 14.625L19 24.375"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 14.625L28.5 24.375"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'download-cloud',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        d="M12.6667 29.25L19 35.75L25.3334 29.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 21.125V35.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.0601 31.0213C35.885 28.9825 37.0963 25.2997 36.0532 21.921C35.0102 18.5422 31.9535 16.2472 28.5001 16.25H26.5051C25.2009 11.0337 20.898 7.18266 15.6852 6.56646C10.4724 5.95027 5.42915 8.69648 3.00366 13.4719C0.578168 18.2474 1.27269 24.0633 4.75008 28.0963"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'download',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        d="M4.75 27.625V32.5C4.75 34.2949 6.16776 35.75 7.91667 35.75H30.0833C31.8322 35.75 33.25 34.2949 33.25 32.5V27.625"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.6667 19.5L19 26L25.3334 19.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M19 3.25V26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 'edit-2',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.3333 4.875L33.25 13L12.6667 34.125H4.75V26L25.3333 4.875V4.875Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'edit',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M33.25 21.6283V30.0833C33.25 31.8322 31.8322 33.25 30.0833 33.25H7.91667C6.16776 33.25 4.75 31.8322 4.75 30.0833V7.91667C4.75 6.16776 6.16776 4.75 7.91667 4.75H16.3717"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.5 3.16666L34.8333 9.5L19 25.3333H12.6666V19L28.5 3.16666V3.16666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'external-link',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M29.25 20.5833V30.0833C29.25 31.8322 27.7949 33.25 26 33.25H8.125C6.33007 33.25 4.875 31.8322 4.875 30.0833V12.6667C4.875 10.9178 6.33007 9.5 8.125 9.5H17.875"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.375 4.75H34.125V14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.25 22.1667L34.125 4.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'eye-off',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M29.0112 29.2003C29.4504 28.8655 29.5351 28.238 29.2003 27.7988C28.8655 27.3595 28.238 27.2749 27.7988 27.6097L29.0112 29.2003ZM19 31.6667V32.6667C19.0054 32.6667 19.0109 32.6666 19.0163 32.6665L19 31.6667ZM1.58331 19L0.702157 18.5272C0.548523 18.8135 0.543574 19.1566 0.688886 19.4472L1.58331 19ZM10.2019 10.3898C10.6408 10.0546 10.7249 9.42704 10.3898 8.9881C10.0546 8.54915 9.42702 8.46504 8.98808 8.80022L10.2019 10.3898ZM15.4471 5.73965C14.9093 5.86552 14.5754 6.40349 14.7013 6.94124C14.8272 7.47899 15.3651 7.81288 15.9029 7.68701L15.4471 5.73965ZM19 6.33333L18.9976 7.33333H19V6.33333ZM36.4166 19L37.2986 19.4714C37.4515 19.1854 37.4561 18.8429 37.3111 18.5528L36.4166 19ZM32.2315 23.407C31.8759 23.8296 31.9302 24.4604 32.3528 24.816C32.7754 25.1716 33.4062 25.1173 33.7618 24.6947L32.2315 23.407ZM23.0883 23.0384C23.4648 22.6343 23.4424 22.0016 23.0384 21.6251C22.6343 21.2485 22.0015 21.2709 21.625 21.6749L23.0883 23.0384ZM16.325 16.3749C16.7291 15.9984 16.7514 15.3657 16.3749 14.9616C15.9984 14.5576 15.3656 14.5352 14.9616 14.9117L16.325 16.3749ZM27.7988 27.6097C25.2619 29.5434 22.173 30.6147 18.9836 30.6668L19.0163 32.6665C22.6325 32.6074 26.1349 31.3928 29.0112 29.2003L27.7988 27.6097ZM19 30.6667C13.8578 30.6667 9.74967 27.7264 6.86493 24.6494C5.43169 23.1206 4.32968 21.588 3.58611 20.4366C3.21495 19.8619 2.93472 19.3848 2.74867 19.054C2.65568 18.8887 2.58633 18.7602 2.54102 18.6745C2.51837 18.6317 2.50174 18.5997 2.49117 18.5791C2.48589 18.5688 2.48212 18.5614 2.47988 18.557C2.47876 18.5548 2.47802 18.5533 2.47766 18.5526C2.47749 18.5523 2.4774 18.5521 2.47742 18.5521C2.47742 18.5521 2.4775 18.5523 2.47751 18.5523C2.47761 18.5525 2.47774 18.5528 1.58331 19C0.688886 19.4472 0.689063 19.4476 0.689265 19.448C0.689364 19.4482 0.689591 19.4486 0.68979 19.449C0.690189 19.4498 0.690685 19.4508 0.691279 19.452C0.692466 19.4543 0.694044 19.4575 0.69601 19.4613C0.699942 19.4691 0.70543 19.4799 0.712469 19.4936C0.726546 19.5209 0.746828 19.56 0.773268 19.61C0.826141 19.7099 0.903683 19.8535 1.00552 20.0345C1.20912 20.3965 1.51027 20.9089 1.90603 21.5217C2.69632 22.7454 3.87036 24.3794 5.40586 26.0173C8.45863 29.2736 13.0588 32.6667 19 32.6667V30.6667ZM2.46447 19.4728C4.36654 15.9281 7.00467 12.8312 10.2019 10.3898L8.98808 8.80022C5.56422 11.4147 2.73907 14.7312 0.702157 18.5272L2.46447 19.4728ZM15.9029 7.68701C16.9173 7.44957 17.9558 7.33088 18.9976 7.33333L19.0023 5.33333C17.8055 5.33052 16.6124 5.46687 15.4471 5.73965L15.9029 7.68701ZM19 7.33333C24.1421 7.33333 28.2503 10.2736 31.135 13.3506C32.5683 14.8794 33.6703 16.412 34.4138 17.5634C34.785 18.1381 35.0652 18.6152 35.2513 18.946C35.3443 19.1113 35.4136 19.2398 35.4589 19.3255C35.4816 19.3683 35.4982 19.4003 35.5088 19.4209C35.5141 19.4312 35.5178 19.4386 35.5201 19.443C35.5212 19.4452 35.5219 19.4467 35.5223 19.4474C35.5225 19.4477 35.5226 19.4479 35.5225 19.4479C35.5225 19.4478 35.5225 19.4477 35.5225 19.4477C35.5223 19.4475 35.5222 19.4472 36.4166 19C37.3111 18.5528 37.3109 18.5524 37.3107 18.552C37.3106 18.5518 37.3104 18.5514 37.3102 18.551C37.3098 18.5502 37.3093 18.5492 37.3087 18.548C37.3075 18.5457 37.3059 18.5425 37.3039 18.5387C37.3 18.5309 37.2945 18.5201 37.2875 18.5064C37.2734 18.4791 37.2531 18.44 37.2267 18.39C37.1738 18.2901 37.0963 18.1465 36.9944 17.9655C36.7908 17.6035 36.4897 17.0911 36.0939 16.4783C35.3036 15.2546 34.1296 13.6206 32.5941 11.9827C29.5413 8.72644 24.9412 5.33333 19 5.33333V7.33333ZM35.5347 18.5286C34.6064 20.2652 33.4993 21.9002 32.2315 23.407L33.7618 24.6947C35.1193 23.0814 36.3046 21.3308 37.2986 19.4714L35.5347 18.5286ZM21.625 21.6749C20.6902 22.6782 19.2823 23.0912 17.9536 22.7519L17.4587 24.6897C19.496 25.21 21.6548 24.5767 23.0883 23.0384L21.625 21.6749ZM17.9536 22.7519C16.6249 22.4125 15.5874 21.3751 15.2481 20.0464L13.3103 20.5413C13.8306 22.5786 15.4214 24.1694 17.4587 24.6897L17.9536 22.7519ZM15.2481 20.0464C14.9088 18.7177 15.3218 17.3098 16.325 16.3749L14.9616 14.9117C13.4232 16.3452 12.79 18.504 13.3103 20.5413L15.2481 20.0464Z"
                        fill="black"
                        strokeWidth="2"
                    />
                    <path
                        d="M1.58331 1.58334L36.4166 36.4167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'eye',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.58331 19C1.58331 19 7.91665 6.33334 19 6.33334C30.0833 6.33334 36.4166 19 36.4166 19C36.4166 19 30.0833 31.6667 19 31.6667C7.91665 31.6667 1.58331 19 1.58331 19Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 23.75C21.6234 23.75 23.75 21.6234 23.75 19C23.75 16.3766 21.6234 14.25 19 14.25C16.3766 14.25 14.25 16.3766 14.25 19C14.25 21.6234 16.3766 23.75 19 23.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'file-minus',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.1666 3.16666H9.49998C7.75108 3.16666 6.33331 4.58443 6.33331 6.33333V31.6667C6.33331 33.4156 7.75108 34.8333 9.49998 34.8333H28.5C30.2489 34.8333 31.6666 33.4156 31.6666 31.6667V12.6667L22.1666 3.16666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.1667 3.16666V12.6667H31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.25 23.75H23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'file-plus',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.1666 3.16666H9.49998C7.75108 3.16666 6.33331 4.58443 6.33331 6.33333V31.6667C6.33331 33.4156 7.75108 34.8333 9.49998 34.8333H28.5C30.2489 34.8333 31.6666 33.4156 31.6666 31.6667V12.6667L22.1666 3.16666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.1667 3.16666V12.6667H31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M19 28.5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M14.25 23.75H23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'file-text',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.1666 3.16666H9.49998C7.75108 3.16666 6.33331 4.58443 6.33331 6.33333V31.6667C6.33331 33.4156 7.75108 34.8333 9.49998 34.8333H28.5C30.2489 34.8333 31.6666 33.4156 31.6666 31.6667V12.6667L22.1666 3.16666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.1667 3.16666V12.6667H31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.3334 20.5833H12.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.3334 26.9167H12.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.8334 14.25H14.25H12.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'file',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5833 3.16666H9.50001C7.75111 3.16666 6.33334 4.58443 6.33334 6.33333V31.6667C6.33334 33.4156 7.75111 34.8333 9.50001 34.8333H28.5C30.2489 34.8333 31.6667 33.4156 31.6667 31.6667V14.25L20.5833 3.16666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.5833 3.16666V14.25H31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'folder',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.75 30.0833C35.75 31.8322 34.2949 33.25 32.5 33.25H6.5C4.70507 33.25 3.25 31.8322 3.25 30.0833V7.91667C3.25 6.16776 4.70507 4.75 6.5 4.75H14.625L17.875 9.5H32.5C34.2949 9.5 35.75 10.9178 35.75 12.6667V30.0833Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'log-out',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M15.8333 34.8333H7.91667C6.16776 34.8333 4.75 33.4156 4.75 31.6667V6.33333C4.75 4.58443 6.16776 3.16666 7.91667 3.16666H15.8333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M26.9167 25.3333L33.25 19L26.9167 12.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.25 19H14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'navigation-2',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 4.75L30.0833 34.8333L19 28.5L7.91666 34.8333L19 4.75V4.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'navigation',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.16663 19L33.25 4.75L19 34.8333L15.8333 22.1667L3.16663 19V19Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'paperclip',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M34.8372 18.4652L19.9034 33.016C16.0937 36.7281 9.9169 36.7281 6.10717 33.016C2.29745 29.304 2.29745 23.2856 6.10717 19.5735L21.0409 5.02269C23.5807 2.54799 27.6986 2.54799 30.2384 5.02269C32.7782 7.49738 32.7782 11.5097 30.2384 13.9844L15.2884 28.5352C14.0185 29.7725 11.9596 29.7725 10.6897 28.5352C9.41977 27.2978 9.41977 25.2917 10.6897 24.0544L24.4859 10.6277"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'plus-square',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H31.25C32.3546 4.75 33.25 5.64543 33.25 6.75V31.25C33.25 32.3546 32.3546 33.25 31.25 33.25H6.75C5.64543 33.25 4.75 32.3546 4.75 31.25V6.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 12.6667V25.3333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.6667 19H25.3334"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'plus',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M19 7.91666V30.0833"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.91669 19H30.0834"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'power',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M29.07 10.5133C34.6336 16.0788 34.6326 25.1005 29.0678 30.6648C23.5029 36.229 14.4812 36.229 8.91634 30.6648C3.3515 25.1005 3.35051 16.0788 8.91415 10.5133"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 3.16666V19"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'repeat',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M26.9167 1.58334L33.25 7.91667L26.9167 14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.75 17.4167V14.25C4.75 10.7522 7.58553 7.91666 11.0833 7.91666H33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.0833 36.4167L4.75 30.0833L11.0833 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.25 20.5833V23.75C33.25 27.2478 30.4145 30.0833 26.9167 30.0833H4.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'rotate-ccw',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M3.16669 6.33334V15.8333H12.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.14085 23.75C9.24986 29.7361 15.0636 33.6059 21.3999 33.2412C27.7362 32.8766 33.0676 28.3653 34.4759 22.1767C35.8842 15.9882 33.0299 9.61416 27.4753 6.54354C21.9208 3.47292 15.005 4.44594 10.5134 8.93L3.16669 15.8333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'rotate-cw',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M34.8333 6.33334V15.8333H25.3333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M30.8592 23.75C28.7448 29.7347 22.9272 33.5995 16.5908 33.2288C10.2545 32.8581 4.92717 28.3413 3.52507 22.1509C2.12298 15.9605 4.98416 9.5891 10.5424 6.52435C16.1006 3.45959 23.0158 4.44045 27.5025 8.93L34.8333 15.8333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'save',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.875 33.25H8.125C6.33007 33.25 4.875 31.8322 4.875 30.0833V7.91667C4.875 6.16776 6.33007 4.75 8.125 4.75H26L34.125 12.6667V30.0833C34.125 31.8322 32.6699 33.25 30.875 33.25Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M27.625 33.25V20.5833H11.375V33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.375 4.75V12.6667H24.375"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'scissors',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5 14.25C12.1234 14.25 14.25 12.1234 14.25 9.5C14.25 6.87665 12.1234 4.75 9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5C4.75 12.1234 6.87665 14.25 9.5 14.25Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5 33.25C12.1234 33.25 14.25 31.1234 14.25 28.5C14.25 25.8766 12.1234 23.75 9.5 23.75C6.87665 23.75 4.75 25.8766 4.75 28.5C4.75 31.1234 6.87665 33.25 9.5 33.25Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.6667 6.33334L12.8567 25.1433"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.9108 22.9267L31.6667 31.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.8567 12.8567L19 19"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'search',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.625 28.5C23.1834 28.5 28.5 23.1834 28.5 16.625C28.5 10.0666 23.1834 4.75 16.625 4.75C10.0666 4.75 4.75 10.0666 4.75 16.625C4.75 23.1834 10.0666 28.5 16.625 28.5Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.2501 33.25L25.0167 25.0167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'server',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.25 5.16667C3.25 4.0621 4.14543 3.16667 5.25 3.16667H33.75C34.8546 3.16667 35.75 4.0621 35.75 5.16667V13.8333C35.75 14.9379 34.8546 15.8333 33.75 15.8333H5.25C4.14543 15.8333 3.25 14.9379 3.25 13.8333V5.16667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.25 24.1667C3.25 23.0621 4.14543 22.1667 5.25 22.1667H33.75C34.8546 22.1667 35.75 23.0621 35.75 24.1667V32.8333C35.75 33.9379 34.8546 34.8333 33.75 34.8333H5.25C4.14543 34.8333 3.25 33.9379 3.25 32.8333V24.1667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <ellipse cx="9.75" cy="9.5" rx="1.625" ry="1.58333" fill="none" />
                    <ellipse cx="9.75" cy="28.5" rx="1.625" ry="1.58333" fill="none" />
                </svg>
            )
        },
        {
            id: 'phone',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.25 26.79V31.54C33.2536 32.4316 32.8812 33.2835 32.2242 33.8863C31.5671 34.4891 30.6864 34.7869 29.7984 34.7067C24.9262 34.1773 20.2461 32.5124 16.1342 29.8458C12.3086 27.4149 9.06514 24.1714 6.63419 20.3458C3.95833 16.2152 2.29308 11.5124 1.77336 6.61833C1.69336 5.73304 1.98912 4.85489 2.58841 4.19839C3.18769 3.54189 4.0353 3.1675 4.92419 3.16666H9.67419C11.2636 3.15102 12.6184 4.31611 12.8409 5.88999C13.0413 7.4101 13.4132 8.90264 13.9492 10.3392C14.3842 11.4964 14.106 12.8009 13.2367 13.68L11.2259 15.6908C13.4798 19.6548 16.7619 22.9369 20.7259 25.1908L22.7367 23.18C23.6158 22.3107 24.9203 22.0325 26.0775 22.4675C27.514 23.0035 29.0066 23.3753 30.5267 23.5758C32.1188 23.8004 33.2899 25.1826 33.25 26.79Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'play-circle',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 34.8333C27.7445 34.8333 34.8334 27.7445 34.8334 19C34.8334 10.2555 27.7445 3.16667 19 3.16667C10.2555 3.16667 3.16669 10.2555 3.16669 19C3.16669 27.7445 10.2555 34.8333 19 34.8333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8333 12.6667L25.3333 19L15.8333 25.3333V12.6667V12.6667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'settings',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 23.75C21.6234 23.75 23.75 21.6234 23.75 19C23.75 16.3766 21.6234 14.25 19 14.25C16.3766 14.25 14.25 16.3766 14.25 19C14.25 21.6234 16.3766 23.75 19 23.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.7166 23.75C30.2854 24.7271 30.4923 25.8682 31.2391 26.6317L31.3341 26.7267C31.9288 27.3206 32.2629 28.1266 32.2629 28.9671C32.2629 29.8075 31.9288 30.6135 31.3341 31.2075C30.7402 31.8021 29.9342 32.1362 29.0937 32.1362C28.2533 32.1362 27.4473 31.8021 26.8533 31.2075L26.7583 31.1125C25.9948 30.3657 24.8537 30.1588 23.8766 30.59C22.9196 31.0002 22.2975 31.9396 22.2933 32.9808V33.25C22.2933 34.9989 20.8755 36.4167 19.1266 36.4167C17.3777 36.4167 15.96 34.9989 15.96 33.25V33.1075C15.9349 32.0351 15.2568 31.0869 14.25 30.7167C13.2729 30.2854 12.1318 30.4924 11.3683 31.2392L11.2733 31.3342C10.6793 31.9288 9.87336 32.2629 9.0329 32.2629C8.19243 32.2629 7.38645 31.9288 6.79248 31.3342C6.19785 30.7402 5.86374 29.9342 5.86374 29.0937C5.86374 28.2533 6.19785 27.4473 6.79248 26.8533L6.88748 26.7583C7.63428 25.9949 7.84119 24.8537 7.40998 23.8767C6.99979 22.9196 6.06041 22.2975 5.01915 22.2933H4.74998C3.00108 22.2933 1.58331 20.8756 1.58331 19.1267C1.58331 17.3778 3.00108 15.96 4.74998 15.96H4.89248C5.96492 15.9349 6.91303 15.2568 7.28331 14.25C7.71453 13.2729 7.50762 12.1318 6.76081 11.3683L6.66581 11.2733C6.07119 10.6794 5.73707 9.87337 5.73707 9.03291C5.73707 8.19245 6.07119 7.38646 6.66581 6.79249C7.25978 6.19787 8.06577 5.86375 8.90623 5.86375C9.74669 5.86375 10.5527 6.19787 11.1466 6.79249L11.2416 6.88749C12.0051 7.6343 13.1463 7.84121 14.1233 7.40999H14.25C15.2071 6.9998 15.8292 6.06043 15.8333 5.01916V4.74999C15.8333 3.00109 17.2511 1.58333 19 1.58333C20.7489 1.58333 22.1666 3.00109 22.1666 4.74999V4.89249C22.1708 5.93376 22.7929 6.87314 23.75 7.28333C24.727 7.71454 25.8682 7.50763 26.6316 6.76083L26.7266 6.66583C27.3206 6.0712 28.1266 5.73709 28.9671 5.73709C29.8075 5.73709 30.6135 6.0712 31.2075 6.66583C31.8021 7.25979 32.1362 8.06578 32.1362 8.90624C32.1362 9.74671 31.8021 10.5527 31.2075 11.1467L31.1125 11.2417C30.3657 12.0051 30.1588 13.1463 30.59 14.1233V14.25C31.0002 15.2071 31.9395 15.8292 32.9808 15.8333H33.25C34.9989 15.8333 36.4166 17.2511 36.4166 19C36.4166 20.7489 34.9989 22.1667 33.25 22.1667H33.1075C32.0662 22.1708 31.1268 22.7929 30.7166 23.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'share',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.5 12.6667C31.1234 12.6667 33.25 10.54 33.25 7.91667C33.25 5.29332 31.1234 3.16667 28.5 3.16667C25.8766 3.16667 23.75 5.29332 23.75 7.91667C23.75 10.54 25.8766 12.6667 28.5 12.6667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5 23.75C12.1234 23.75 14.25 21.6234 14.25 19C14.25 16.3766 12.1234 14.25 9.5 14.25C6.87665 14.25 4.75 16.3766 4.75 19C4.75 21.6234 6.87665 23.75 9.5 23.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.5 34.8333C31.1234 34.8333 33.25 32.7067 33.25 30.0833C33.25 27.46 31.1234 25.3333 28.5 25.3333C25.8766 25.3333 23.75 27.46 23.75 30.0833C23.75 32.7067 25.8766 34.8333 28.5 34.8333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.6008 21.3908L24.415 27.6925"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.3992 10.3075L13.6008 16.6092"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'share-2',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M6.33331 19V31.6667C6.33331 33.4156 7.75108 34.8333 9.49998 34.8333H28.5C30.2489 34.8333 31.6666 33.4156 31.6666 31.6667V19"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.3334 9.50001L19 3.16667L12.6667 9.50001"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 3.16667V23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'plus-circle',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 34.8333C27.7445 34.8333 34.8333 27.7445 34.8333 19C34.8333 10.2555 27.7445 3.16667 19 3.16667C10.2555 3.16667 3.16666 10.2555 3.16666 19C3.16666 27.7445 10.2555 34.8333 19 34.8333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 12.6667V25.3333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.6667 19H25.3333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'shield',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5 34.8333C19.5 34.8333 32.5 28.5 32.5 19V6.33334L19.5 3.16667L6.5 6.33334V19C6.5 28.5 19.5 34.8333 19.5 34.8333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'shuffle',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M23.75 4.75H31.6667V12.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.75 31.6667L31.6667 4.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.6667 25.3333V33.25H23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.1667 23.75L31.6667 33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.75 6.33333L12.6667 14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'shopping-cart',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6667 36.4167C14.4156 36.4167 15.8333 34.9989 15.8333 33.25C15.8333 31.5011 14.4156 30.0833 12.6667 30.0833C10.9178 30.0833 9.5 31.5011 9.5 33.25C9.5 34.9989 10.9178 36.4167 12.6667 36.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31.6667 36.4167C33.4156 36.4167 34.8333 34.9989 34.8333 33.25C34.8333 31.5011 33.4156 30.0833 31.6667 30.0833C29.9178 30.0833 28.5 31.5011 28.5 33.25C28.5 34.9989 29.9178 36.4167 31.6667 36.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.97754 9.50001H36.4167L33.7567 22.7842C33.4579 24.2887 32.1237 25.3627 30.59 25.3333H13.8542C12.2542 25.3469 10.8955 24.1648 10.6875 22.5783L8.28087 4.33834C8.07444 2.76387 6.73382 1.58575 5.14587 1.58334H1.58337"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'thumbs-down',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M16.25 23.7499H17.25C17.25 23.1976 16.8022 22.7499 16.25 22.7499V23.7499ZM21.125 34.8332V35.8332C21.5166 35.8332 21.8722 35.6045 22.0348 35.2482L21.125 34.8332ZM27.625 20.5832L28.5348 20.9982C28.5942 20.8679 28.625 20.7264 28.625 20.5832H27.625ZM27.625 3.16652H28.625C28.625 2.61423 28.1772 2.16652 27.625 2.16652V3.16652ZM9.29495 3.16652L9.28394 4.16652H9.29495V3.16652ZM6.04495 5.85819L7.03279 6.01364L7.03305 6.01198L6.04495 5.85819ZM3.80245 20.1082L2.81461 19.9527L2.81437 19.9543L3.80245 20.1082ZM7.05245 23.7499V22.7498L7.04142 22.7499L7.05245 23.7499ZM27.625 3.16666V2.16666C27.0727 2.16666 26.625 2.61437 26.625 3.16666H27.625ZM31.9637 3.16666V4.16666C31.9694 4.16666 31.9752 4.16661 31.9809 4.16651L31.9637 3.16666ZM35.75 6.33332H36.75C36.75 6.28733 36.7468 6.24138 36.7405 6.19582L35.75 6.33332ZM35.75 17.4167L36.7405 17.5542C36.7468 17.5086 36.75 17.4627 36.75 17.4167H35.75ZM31.9637 20.5833L31.9809 19.5835C31.9752 19.5834 31.9694 19.5833 31.9637 19.5833V20.5833ZM27.625 20.5833H26.625C26.625 21.1356 27.0727 21.5833 27.625 21.5833V20.5833ZM15.25 23.7499V30.0832H17.25V23.7499H15.25ZM15.25 30.0832C15.25 33.2832 17.9049 35.8332 21.125 35.8332V33.8332C18.9602 33.8332 17.25 32.1299 17.25 30.0832H15.25ZM22.0348 35.2482L28.5348 20.9982L26.7151 20.1682L20.2151 34.4182L22.0348 35.2482ZM28.625 20.5832V3.16652H26.625V20.5832H28.625ZM27.625 2.16652H9.29495V4.16652H27.625V2.16652ZM9.30596 2.16658C7.20782 2.14347 5.37925 3.63291 5.05685 5.7044L7.03305 6.01198C7.19665 4.96088 8.1409 4.15387 9.28394 4.16646L9.30596 2.16658ZM5.05711 5.70273L2.81461 19.9527L4.79029 20.2636L7.03279 6.01364L5.05711 5.70273ZM2.81437 19.9543C2.62464 21.1722 2.99464 22.4056 3.81709 23.3271L5.30927 21.9954C4.88035 21.5148 4.69408 20.8813 4.79053 20.2621L2.81437 19.9543ZM3.81709 23.3271C4.6383 24.2473 5.82612 24.7634 7.06348 24.7498L7.04142 22.7499C6.37184 22.7573 5.73944 22.4774 5.30927 21.9954L3.81709 23.3271ZM7.05245 24.7499H16.25V22.7499H7.05245V24.7499ZM27.625 4.16666H31.9637V2.16666H27.625V4.16666ZM31.9809 4.16651C33.3992 4.14207 34.5765 5.15312 34.7594 6.47083L36.7405 6.19582C36.413 3.83671 34.3355 2.12564 31.9465 2.16681L31.9809 4.16651ZM34.75 6.33332V17.4167H36.75V6.33332H34.75ZM34.7594 17.2792C34.5765 18.5969 33.3992 19.6079 31.9809 19.5835L31.9465 21.5832C34.3355 21.6243 36.413 19.9133 36.7405 17.5542L34.7594 17.2792ZM31.9637 19.5833H27.625V21.5833H31.9637V19.5833ZM28.625 20.5833V3.16666H26.625V20.5833H28.625Z"
                        fill="black"
                        strokeWidth="2"
                    />
                </svg>
            )
        },
        {
            id: 'thumbs-up',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M22.1667 14.25H21.1667C21.1667 14.8023 21.6144 15.25 22.1667 15.25V14.25ZM22.1667 7.91666H23.1667H22.1667ZM17.4167 3.16666V2.16666C17.0215 2.16666 16.6634 2.39939 16.5029 2.76052L17.4167 3.16666ZM11.0834 17.4167L10.1695 17.0105C10.1127 17.1384 10.0834 17.2767 10.0834 17.4167H11.0834ZM11.0834 34.8333H10.0834C10.0834 35.3856 10.5311 35.8333 11.0834 35.8333V34.8333ZM28.9434 34.8333L28.9547 33.8333H28.9434V34.8333ZM32.11 32.1417L31.1216 31.9901L31.1213 31.9917L32.11 32.1417ZM34.295 17.8917L35.2835 18.0432L35.2837 18.0417L34.295 17.8917ZM31.1284 14.25V15.2501L31.1397 15.2499L31.1284 14.25ZM11.0834 34.8333V35.8333C11.6356 35.8333 12.0834 35.3856 12.0834 34.8333H11.0834ZM11.0834 17.4167H12.0834C12.0834 16.8644 11.6356 16.4167 11.0834 16.4167V17.4167ZM23.1667 14.25V7.91666H21.1667V14.25H23.1667ZM23.1667 7.91666C23.1667 4.74102 20.5923 2.16666 17.4167 2.16666V4.16666C19.4878 4.16666 21.1667 5.84559 21.1667 7.91666H23.1667ZM16.5029 2.76052L10.1695 17.0105L11.9972 17.8228L18.3305 3.57279L16.5029 2.76052ZM10.0834 17.4167V34.8333H12.0834V17.4167H10.0834ZM11.0834 35.8333H28.9434V33.8333H11.0834V35.8333ZM28.932 35.8333C31.0097 35.8567 32.7872 34.3459 33.0987 32.2916L31.1213 31.9917C30.9593 33.06 30.0351 33.8456 28.9547 33.8334L28.932 35.8333ZM33.0985 32.2932L35.2835 18.0432L33.3066 17.7401L31.1216 31.9901L33.0985 32.2932ZM35.2837 18.0417C35.4671 16.8331 35.1106 15.6049 34.3084 14.6824L32.7992 15.9947C33.2163 16.4744 33.4017 17.1131 33.3063 17.7416L35.2837 18.0417ZM34.3084 14.6824C33.5062 13.7599 32.3394 13.2362 31.117 13.2501L31.1397 15.2499C31.7753 15.2427 32.3821 15.515 32.7992 15.9947L34.3084 14.6824ZM31.1284 13.25H22.1667V15.25H31.1284V13.25ZM11.0834 33.8333H6.33335V35.8333H11.0834V33.8333ZM6.33335 33.8333C5.13674 33.8333 4.16669 32.8633 4.16669 31.6667H2.16669C2.16669 33.9678 4.03217 35.8333 6.33335 35.8333V33.8333ZM4.16669 31.6667V20.5833H2.16669V31.6667H4.16669ZM4.16669 20.5833C4.16669 19.3867 5.13674 18.4167 6.33335 18.4167V16.4167C4.03217 16.4167 2.16669 18.2821 2.16669 20.5833H4.16669ZM6.33335 18.4167H11.0834V16.4167H6.33335V18.4167ZM10.0834 17.4167V34.8333H12.0834V17.4167H10.0834Z"
                        fill="black"
                        strokeWidth="2"
                    />
                </svg>
            )
        },
        {
            id: 'slash',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 34.8333C27.7445 34.8333 34.8334 27.7445 34.8334 19C34.8334 10.2555 27.7445 3.16666 19 3.16666C10.2555 3.16666 3.16669 10.2555 3.16669 19C3.16669 27.7445 10.2555 34.8333 19 34.8333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.80585 7.80585L30.1942 30.1942"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'star',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 3.16666L23.8925 13.0783L34.8334 14.6775L26.9167 22.3883L28.785 33.2817L19 28.1358L9.21502 33.2817L11.0834 22.3883L3.16669 14.6775L14.1075 13.0783L19 3.16666V3.16666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'sun',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 26.9167C23.3722 26.9167 26.9166 23.3723 26.9166 19C26.9166 14.6278 23.3722 11.0833 19 11.0833C14.6277 11.0833 11.0833 14.6278 11.0833 19C11.0833 23.3723 14.6277 26.9167 19 26.9167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 1.58334V4.75001"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 33.25V36.4167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.68164 6.68167L8.92997 8.93"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.07 29.07L31.3183 31.3183"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.58331 19H4.74998"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.25 19H36.4167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.68164 31.3183L8.92997 29.07"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.07 8.93L31.3183 6.68167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'trash-2',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M4.75 9.5H7.91667H33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.0834 9.49999C31.0834 8.94771 30.6356 8.49999 30.0834 8.49999C29.5311 8.49999 29.0834 8.94771 29.0834 9.49999H31.0834ZM8.91669 9.49999C8.91669 8.94771 8.46897 8.49999 7.91669 8.49999C7.3644 8.49999 6.91669 8.94771 6.91669 9.49999H8.91669ZM11.6667 9.49999C11.6667 10.0523 12.1144 10.5 12.6667 10.5C13.219 10.5 13.6667 10.0523 13.6667 9.49999H11.6667ZM24.3334 9.49999C24.3334 10.0523 24.7811 10.5 25.3334 10.5C25.8856 10.5 26.3334 10.0523 26.3334 9.49999H24.3334ZM29.0834 9.49999V31.6667H31.0834V9.49999H29.0834ZM29.0834 31.6667C29.0834 32.8633 28.1133 33.8333 26.9167 33.8333V35.8333C29.2179 35.8333 31.0834 33.9678 31.0834 31.6667H29.0834ZM26.9167 33.8333H11.0834V35.8333H26.9167V33.8333ZM11.0834 33.8333C9.88674 33.8333 8.91669 32.8633 8.91669 31.6667H6.91669C6.91669 33.9678 8.78217 35.8333 11.0834 35.8333V33.8333ZM8.91669 31.6667V9.49999H6.91669V31.6667H8.91669ZM13.6667 9.49999V6.33332H11.6667V9.49999H13.6667ZM13.6667 6.33332C13.6667 5.13671 14.6367 4.16666 15.8334 4.16666V2.16666C13.5322 2.16666 11.6667 4.03214 11.6667 6.33332H13.6667ZM15.8334 4.16666H22.1667V2.16666H15.8334V4.16666ZM22.1667 4.16666C23.3633 4.16666 24.3334 5.13671 24.3334 6.33332H26.3334C26.3334 4.03214 24.4679 2.16666 22.1667 2.16666V4.16666ZM24.3334 6.33332V9.49999H26.3334V6.33332H24.3334Z"
                        fill="black"
                        strokeWidth="2"
                    />
                    <path
                        d="M15.8333 17.4167V26.9167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.1667 17.4167V26.9167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'trash',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M4.75 9.5H7.91667H33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.0833 9.49999C31.0833 8.94771 30.6356 8.49999 30.0833 8.49999C29.531 8.49999 29.0833 8.94771 29.0833 9.49999H31.0833ZM8.91666 9.49999C8.91666 8.94771 8.46894 8.49999 7.91666 8.49999C7.36437 8.49999 6.91666 8.94771 6.91666 9.49999H8.91666ZM11.6667 9.49999C11.6667 10.0523 12.1144 10.5 12.6667 10.5C13.2189 10.5 13.6667 10.0523 13.6667 9.49999H11.6667ZM24.3333 9.49999C24.3333 10.0523 24.781 10.5 25.3333 10.5C25.8856 10.5 26.3333 10.0523 26.3333 9.49999H24.3333ZM29.0833 9.49999V31.6667H31.0833V9.49999H29.0833ZM29.0833 31.6667C29.0833 32.8633 28.1133 33.8333 26.9167 33.8333V35.8333C29.2178 35.8333 31.0833 33.9678 31.0833 31.6667H29.0833ZM26.9167 33.8333H11.0833V35.8333H26.9167V33.8333ZM11.0833 33.8333C9.88671 33.8333 8.91666 32.8633 8.91666 31.6667H6.91666C6.91666 33.9678 8.78214 35.8333 11.0833 35.8333V33.8333ZM8.91666 31.6667V9.49999H6.91666V31.6667H8.91666ZM13.6667 9.49999V6.33332H11.6667V9.49999H13.6667ZM13.6667 6.33332C13.6667 5.13671 14.6367 4.16666 15.8333 4.16666V2.16666C13.5321 2.16666 11.6667 4.03214 11.6667 6.33332H13.6667ZM15.8333 4.16666H22.1667V2.16666H15.8333V4.16666ZM22.1667 4.16666C23.3633 4.16666 24.3333 5.13671 24.3333 6.33332H26.3333C26.3333 4.03214 24.4678 2.16666 22.1667 2.16666V4.16666ZM24.3333 6.33332V9.49999H26.3333V6.33332H24.3333Z"
                        fill="black"
                        strokeWidth="2"
                    />
                </svg>
            )
        },
        {
            id: 'trending-down',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M37.375 28.5L21.9375 13.4583L13.8125 21.375L1.625 9.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M27.625 28.5H37.375V19"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'trending-up',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M36.4167 9.5L21.375 24.5417L13.4583 16.625L1.58334 28.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M26.9167 9.5H36.4167V19"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'tv',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.16663 13.0833C3.16663 11.9788 4.06206 11.0833 5.16663 11.0833H32.8333C33.9379 11.0833 34.8333 11.9788 34.8333 13.0833V32.8333C34.8333 33.9379 33.9379 34.8333 32.8333 34.8333H5.16662C4.06206 34.8333 3.16663 33.9379 3.16663 32.8333V13.0833Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M26.9167 3.16666L19 11.0833L11.0834 3.16666"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'user-x',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M26 33.25V30.0833C26 26.5855 23.0899 23.75 19.5 23.75H8.125C4.53515 23.75 1.625 26.5855 1.625 30.0833V33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.8125 17.4167C17.4024 17.4167 20.3125 14.5811 20.3125 11.0833C20.3125 7.58553 17.4024 4.75 13.8125 4.75C10.2226 4.75 7.3125 7.58553 7.3125 11.0833C7.3125 14.5811 10.2226 17.4167 13.8125 17.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.25 12.6667L37.375 20.5833"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M37.375 12.6667L29.25 20.5833"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'users',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M26.9166 33.25V30.0833C26.9166 26.5855 24.0811 23.75 20.5833 23.75H7.91665C4.41884 23.75 1.58331 26.5855 1.58331 30.0833V33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.25 17.4167C17.7478 17.4167 20.5834 14.5811 20.5834 11.0833C20.5834 7.58553 17.7478 4.75 14.25 4.75C10.7522 4.75 7.91669 7.58553 7.91669 11.0833C7.91669 14.5811 10.7522 17.4167 14.25 17.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.4167 33.25V30.0833C36.4145 27.1971 34.4613 24.6774 31.6667 23.9558"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.3333 4.95584C28.1357 5.67336 30.0957 8.19849 30.0957 11.0913C30.0957 13.984 28.1357 16.5092 25.3333 17.2267"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'user',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M31.6666 33.25V30.0833C31.6666 26.5855 28.8311 23.75 25.3333 23.75H12.6666C9.16884 23.75 6.33331 26.5855 6.33331 30.0833V33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 17.4167C22.4978 17.4167 25.3334 14.5811 25.3334 11.0833C25.3334 7.58553 22.4978 4.75 19 4.75C15.5022 4.75 12.6667 7.58553 12.6667 11.0833C12.6667 14.5811 15.5022 17.4167 19 17.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'video-off',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M26.3333 25.3333C26.3333 24.781 25.8856 24.3333 25.3333 24.3333C24.781 24.3333 24.3333 24.781 24.3333 25.3333H26.3333ZM1.58331 26.9167H0.583313H1.58331ZM7.91665 8.91666C8.46893 8.91666 8.91665 8.46894 8.91665 7.91666C8.91665 7.36437 8.46893 6.91666 7.91665 6.91666V8.91666ZM16.8783 6.91666C16.326 6.91666 15.8783 7.36437 15.8783 7.91666C15.8783 8.46894 16.326 8.91666 16.8783 8.91666V6.91666ZM25.3333 16.3717H24.3333C24.3333 16.6369 24.4387 16.8912 24.6262 17.0788L25.3333 16.3717ZM26.9166 17.955L26.2095 18.6621C26.5568 19.0094 27.1048 19.0531 27.5027 18.7652L26.9166 17.955ZM36.4166 11.0833H37.4166C37.4166 10.7077 37.2061 10.3637 36.8716 10.1928C36.537 10.0219 36.1349 10.0529 35.8306 10.2731L36.4166 11.0833ZM35.4166 26.9167C35.4166 27.4689 35.8644 27.9167 36.4166 27.9167C36.9689 27.9167 37.4166 27.4689 37.4166 26.9167H35.4166ZM24.3333 25.3333V26.9167H26.3333V25.3333H24.3333ZM24.3333 26.9167C24.3333 28.1133 23.3633 29.0833 22.1666 29.0833V31.0833C24.4678 31.0833 26.3333 29.2178 26.3333 26.9167H24.3333ZM22.1666 29.0833H4.74998V31.0833H22.1666V29.0833ZM4.74998 29.0833C3.55336 29.0833 2.58331 28.1133 2.58331 26.9167H0.583313C0.583313 29.2178 2.44879 31.0833 4.74998 31.0833V29.0833ZM2.58331 26.9167V11.0833H0.583313V26.9167H2.58331ZM2.58331 11.0833C2.58331 9.88671 3.55336 8.91666 4.74998 8.91666V6.91666C2.44879 6.91666 0.583313 8.78214 0.583313 11.0833H2.58331ZM4.74998 8.91666H7.91665V6.91666H4.74998V8.91666ZM16.8783 8.91666H22.1666V6.91666H16.8783V8.91666ZM22.1666 8.91666C23.3633 8.91666 24.3333 9.88671 24.3333 11.0833H26.3333C26.3333 8.78214 24.4678 6.91666 22.1666 6.91666V8.91666ZM24.3333 11.0833V16.3717H26.3333V11.0833H24.3333ZM24.6262 17.0788L26.2095 18.6621L27.6238 17.2479L26.0404 15.6646L24.6262 17.0788ZM27.5027 18.7652L37.0027 11.8936L35.8306 10.2731L26.3306 17.1447L27.5027 18.7652ZM35.4166 11.0833V26.9167H37.4166V11.0833H35.4166Z"
                        fill="black"
                        strokeWidth="2"
                    />
                    <path
                        d="M1.58331 1.58334L36.4166 36.4167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'video',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36.4166 11.0833L25.3333 19L36.4166 26.9167V11.0833V11.0833Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.58331 9.91665C1.58331 8.81208 2.47874 7.91666 3.58331 7.91666H23.3333C24.4379 7.91666 25.3333 8.81209 25.3333 9.91666V28.0833C25.3333 29.1879 24.4379 30.0833 23.3333 30.0833H3.58331C2.47874 30.0833 1.58331 29.1879 1.58331 28.0833V9.91665Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'volume-1',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5833 7.91666L12.6666 14.25H6.33331V23.75H12.6666L20.5833 30.0833V7.91666V7.91666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M27.7717 13.395C30.8622 16.4864 30.8622 21.4977 27.7717 24.5892"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'volume-2',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.4167 7.91666L9.49999 14.25H3.16666V23.75H9.49999L17.4167 30.0833V7.91666V7.91666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M30.9014 7.09885C30.5109 6.70826 29.8778 6.70817 29.4872 7.09863C29.0966 7.4891 29.0965 8.12226 29.487 8.51285L30.9014 7.09885ZM29.487 29.4872C29.0965 29.8778 29.0966 30.5109 29.4872 30.9014C29.8778 31.2919 30.5109 31.2918 30.9014 30.9012L29.487 29.4872ZM25.3122 12.688C24.9218 12.2974 24.2886 12.2973 23.898 12.6878C23.5074 13.0783 23.5073 13.7114 23.8978 14.102L25.3122 12.688ZM23.8978 23.8822C23.5073 24.2728 23.5074 24.9059 23.898 25.2964C24.2886 25.6869 24.9218 25.6868 25.3122 25.2962L23.8978 23.8822ZM29.487 8.51285C35.2776 14.3053 35.2776 23.6948 29.487 29.4872L30.9014 30.9012C37.4728 24.3278 37.4728 13.6723 30.9014 7.09885L29.487 8.51285ZM23.8978 14.102C26.5979 16.803 26.5979 21.1812 23.8978 23.8822L25.3122 25.2962C28.7931 21.8142 28.7931 16.17 25.3122 12.688L23.8978 14.102Z"
                        fill="black"
                        strokeWidth="2"
                    />
                </svg>
            )
        },
        {
            id: 'volume-x',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.25 7.91666L8.125 14.25H1.625V23.75H8.125L16.25 30.0833V7.91666V7.91666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M35.75 14.25L26 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M26 14.25L35.75 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'volume',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.3333 7.91666L17.4167 14.25H11.0833V23.75H17.4167L25.3333 30.0833V7.91666V7.91666Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'wifi-off',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M1.58337 1.58334L36.4167 36.4167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="19" cy="31.6667" r="1.58333" fill="black" />
                    <path
                        d="M26.4734 17.5117C27.7703 18.1446 28.983 18.9371 30.0834 19.8708"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.91663 19.8708C10.2633 17.9088 13.0876 16.6032 16.1025 16.0867"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.9575 7.99582C23.8114 7.44355 30.5953 9.70106 35.7517 14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2.24829 14.25C4.44464 12.3086 6.96298 10.7654 9.68996 9.69"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.5059 25.5075C16.8005 23.1668 21.2154 23.1668 24.51 25.5075"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'wifi',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M7.44263 21.45C14.0703 16.0711 23.6949 16.0711 30.3226 21.45"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.625 15.8291C11.4505 7.39029 26.1845 7.39029 36.01 15.8291"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.179 27.0866C16.5603 24.7459 21.0914 24.7459 24.4727 27.0866"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <ellipse cx="19.5" cy="33.25" rx="1.625" ry="1.58333" fill="black" />
                </svg>
            )
        },
        {
            id: 'x-circle',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 34.8333C27.7445 34.8333 34.8334 27.7445 34.8334 19C34.8334 10.2555 27.7445 3.16666 19 3.16666C10.2555 3.16666 3.16669 10.2555 3.16669 19C3.16669 27.7445 10.2555 34.8333 19 34.8333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M23.75 14.25L14.25 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.25 14.25L23.75 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'unlock',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.75 19.4167C4.75 18.3121 5.64543 17.4167 6.75 17.4167H31.25C32.3546 17.4167 33.25 18.3121 33.25 19.4167V32.8333C33.25 33.9379 32.3546 34.8333 31.25 34.8333H6.75C5.64543 34.8333 4.75 33.9379 4.75 32.8333V19.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.0833 17.4167V11.0833C11.0792 7.01613 14.1577 3.60755 18.2044 3.1988C22.251 2.79005 25.949 5.51413 26.7583 9.50001"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'upload-cloud',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M4.75 26.9167V31.6667C4.75 33.4156 6.16776 34.8333 7.91667 34.8333H30.0833C31.8322 34.8333 33.25 33.4156 33.25 31.6667V26.9167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.3334 9.49999L19 3.16666L12.6667 9.49999"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 3.16666V25.3333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'q-square',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H31.25C32.3546 4.75 33.25 5.64543 33.25 6.75V31.25C33.25 32.3546 32.3546 33.25 31.25 33.25H6.75C5.64543 33.25 4.75 32.3546 4.75 31.25V6.75Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.25 14.25L23.75 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M23.75 14.25L14.25 23.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'x',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M28.5 9.5L9.5 28.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.5 9.5L28.5 28.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'user-check',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        d="M26 33.25V30.0833C26 26.5855 23.0899 23.75 19.5 23.75H8.125C4.53515 23.75 1.625 26.5855 1.625 30.0833V33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.8125 17.4167C17.4024 17.4167 20.3125 14.5811 20.3125 11.0833C20.3125 7.58553 17.4024 4.75 13.8125 4.75C10.2226 4.75 7.3125 7.58553 7.3125 11.0833C7.3125 14.5811 10.2226 17.4167 13.8125 17.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M27.625 17.4167L30.875 20.5833L37.375 14.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'user-minus',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M25.3333 33.25V30.0833C25.3333 26.5855 22.4978 23.75 19 23.75H7.91668C4.41887 23.75 1.58334 26.5855 1.58334 30.0833V33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4583 17.4167C16.9561 17.4167 19.7917 14.5811 19.7917 11.0833C19.7917 7.58553 16.9561 4.75 13.4583 4.75C9.96053 4.75 7.125 7.58553 7.125 11.0833C7.125 14.5811 9.96053 17.4167 13.4583 17.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.4167 17.4167H26.9167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'zap',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5833 3.16669L4.75 22.1667H19L17.4167 34.8334L33.25 15.8334H19L20.5833 3.16669V3.16669Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'zoom-in',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.875 30.0833C25.0547 30.0833 30.875 24.4123 30.875 17.4167C30.875 10.4211 25.0547 4.75 17.875 4.75C10.6953 4.75 4.875 10.4211 4.875 17.4167C4.875 24.4123 10.6953 30.0833 17.875 30.0833Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M34.125 33.25L27.0563 26.3625"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17.875 12.6667V22.1667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13 17.4167H22.75"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'user-plus',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        d="M25.3333 33.25V30.0833C25.3333 26.5855 22.4978 23.75 19 23.75H7.91665C4.41884 23.75 1.58331 26.5855 1.58331 30.0833V33.25"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4583 17.4167C16.9561 17.4167 19.7917 14.5811 19.7917 11.0833C19.7917 7.58553 16.9561 4.75 13.4583 4.75C9.96053 4.75 7.125 7.58553 7.125 11.0833C7.125 14.5811 9.96053 17.4167 13.4583 17.4167Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.6667 12.6667V22.1667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.4167 17.4167H26.9167"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'zoom-out',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.4167 30.0833C24.4123 30.0833 30.0833 24.4123 30.0833 17.4167C30.0833 10.4211 24.4123 4.75 17.4167 4.75C10.4211 4.75 4.75 10.4211 4.75 17.4167C4.75 24.4123 10.4211 30.0833 17.4167 30.0833Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.25 33.25L26.3625 26.3625"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.6667 17.4167H22.1667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            id: 'info-2',
            svg: (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>
            )
        },
        {
            id: 'upload',
            svg: (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
            )
        },
        {
            id: 'mail',
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M8.12777 4L20.1765 4.00178C21.7514 4.02088 22.5731 4.19668 23.4253 4.65245C24.2514 5.09427 24.9057 5.74859 25.3475 6.57471C25.8318 7.48019 26 8.35117 26 10.1278V17.8722C26 19.6488 25.8318 20.5198 25.3475 21.4253C24.9057 22.2514 24.2514 22.9057 23.4253 23.3475C22.5198 23.8318 21.6488 24 19.8722 24H8.12777C6.35117 24 5.48019 23.8318 4.57471 23.3475C3.74859 22.9057 3.09427 22.2514 2.65245 21.4253C2.16819 20.5198 2 19.6488 2 17.8722L2.00178 9.82346C2.02088 8.24858 2.19668 7.42693 2.65245 6.57471C3.09427 5.74859 3.74859 5.09427 4.57471 4.65245C5.48019 4.16819 6.35117 4 8.12777 4ZM23.6872 7.72802L16.8284 14.5858C15.3184 16.0958 12.9014 16.1461 11.3309 14.7368L11.1716 14.5858L4.31283 7.72802C4.08341 8.24279 4 8.8316 4 10.1278V17.8722C4 19.3469 4.10796 19.906 4.41608 20.4821C4.67149 20.9597 5.04032 21.3285 5.51791 21.5839C6.02626 21.8558 6.52132 21.9718 7.6438 21.9954L8.12777 22H19.8722C21.3469 22 21.906 21.892 22.4821 21.5839C22.9597 21.3285 23.3285 20.9597 23.5839 20.4821C23.8558 19.9737 23.9718 19.4787 23.9954 18.3562L24 17.8722V10.1278C24 8.8316 23.9166 8.24279 23.6872 7.72802ZM19.8722 6H8.12777C6.8316 6 6.24279 6.08341 5.72802 6.31283L12.5858 13.1716C13.3257 13.9115 14.5012 13.9505 15.287 13.2884L15.4142 13.1716L22.272 6.31283C21.7572 6.08341 21.1684 6 19.8722 6Z" strokeWidth="0"/>
                </svg>
            )
        }
    ]

    const selectedIcon = base.find(icon => icon.id === id)

    if (!selectedIcon) {
        return null
    }

    const isTg = useIsTg()

    const iconColor = { stroke: color }

    const svgColor = isTg ? { ...iconColor, ...tgStyles } : iconColor

    return (
        <div style={{ width: size, height: size }}>
            {React.cloneElement(selectedIcon.svg, {
                height: size,
                width: size,
                className,
                children: React.Children.map(selectedIcon.svg.props.children, (child) => {
                    if (child.type === 'path') {
                        return React.cloneElement(child, {
                            style: svgColor
                        // eslint-disable-next-line object-curly-newline
                        })
                    }
                    if (child.type === 'circle') {
                        return React.cloneElement(child, {
                            style: svgColor
                        // eslint-disable-next-line object-curly-newline
                        })
                    }
                    if (child.type === 'ellipse') {
                        return React.cloneElement(child, {
                            style: svgColor
                        // eslint-disable-next-line object-curly-newline
                        })
                    }
                    return child
                })
            })}
        </div>
    )
}
