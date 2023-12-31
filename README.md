<h1 align="center">
  <a href="https://github.com/delab-team">
      <img src="./logo.png" width="150" alt="DE-UI logo" />
  </a>
</h1>

<p align="center">
  <a href="LICENSE">
    <img src="https://camo.githubusercontent.com/75c3e724ce69f6c3d1e997e9066547e00cb9000aaf566eadc8a52ab76c7d07f8/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f64656c61622d7465616d2f636f6e6e6563743f7374796c653d666f722d7468652d6261646765" alt="license mit" />
  </a>
  <a href="TYPESCRIPT">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </a>
  <a href="NPM">
    <img src="https://img.shields.io/npm/v/@delab-team/de-ui" height="28px" />
  </a>
</p>

<p align="center">
  A versatile and customizable React UI library designed to streamline the development of beautiful and responsive user interfaces. Packed with a rich set of components and themes, it empowers developers to create stunning web applications with ease.
</p>

## Install

-   **as local project package**

```jsx
yarn add @delab-team/de-ui
```

## [Documentation](https://ui.delabteam.com/)

It is necessary to wrap your entire application within the AppInner component. Failure to do so may result in the application not working as expected. You also have the option to manually set the value to true in order to witness the application's outcome adorned with Telegram styles.

index.html

```jsx
<script src="https://telegram.org/js/telegram-web-app.js"></script>
```

App.tsx
```jsx
import { AppInner } from '@delab-team/de-ui' 
import { useEffect, useState } from 'react'

declare global {
    interface Window {
        Telegram?: any
    }
}

export const App: React.FC = () => {
    const [ firstRender, setFirstRender ] = useState<boolean>(false)
    const [ isTg, setIsTg ] = useState<boolean>(false)

    useEffect(() => {
      if (!firstRender) {
        setFirstRender(true)

        const isTgCheck = window.Telegram.WebApp.initData !== ''
        const TgObj = window.Telegram.WebApp

        setIsTg(isTgCheck)
        if (isTgCheck) {
            TgObj.ready()
            TgObj.enableClosingConfirmation()
            TgObj.expand()
        }
      }

    }, [ firstRender ])

    return (
      <AppInner isTg={isTg}>
            {/* Your application's goes here */}
      </AppInner>,
    )

}
```

### **Here's a list of components included in our library:**

-   **InfoCell**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/info-cell/Readme.md)

-   **SettingsCell**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/settings-cell/Readme.md)

## Modals:

-   **Alert**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/alert/Readme.md)

-   **ModalConfirm**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/modal-confirm/Readme.md)

-   **Modal**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/modal/Readme.md)

-   **AlertStatus** [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/alert-status/Readme.md)

## Common:

-   **Avatar**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/avatar/Readme.md)

-   **Button**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/button/Readme.md)

-   **Div**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/div/Readme.md)

-   **Font**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/font/Readme.md)

-   **Footer**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/footer/Readme.md)

-   **ProgressBar**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/progress-bar/Readme.md)

-   **Spinner**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/spinner/Readme.md)

-   **Toggle**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/toggle/Readme.md)

-   **Tooltip**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/tooltip/Readme.md)

-   **Li**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/li/Readme.md)

## Forms:

-   **Checkbox**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/checkbox/Readme.md)

-   **FileUpload**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/file-upload/Readme.md)

-   **Input**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/input/Readme.md)

-   **Radio**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/radio/Readme.md)

-   **Range**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/range/Readme.md)

-   **Select**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/select/Readme.md)

-   **TextArea**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/textarea/Readme.md)

## Headers

-   **HeaderPanel**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/header-panel/Readme.md)

-   **HeaderSearchTabs**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/header-search-tabs/Readme.md)

-   **HeaderSearch**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/header-search/Readme.md)

-   **HeaderTabs**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/header-tabs/Readme.md)

-   **HeaderTitle**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/header-title/Readme.md)

-   **Header**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/header/Readme.md)

## Icons:

-   **IconImg**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/icon-img/Readme.md)

-   **IconSelector**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/icon-selector/Readme.md)

-   **LogoSelector** [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/logo-selector/Readme.md)

-   **SocialIcons** [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/social-icons/Readme.md)

## Menu:

-   **MobileMenu**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/mobile-menu/Readme.md)

## Wrappers:

-   **PageWrapper**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/page-wrapper/Readme.md)

-   **PageWrapperSidebar**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/page-wrapper-sidebar/Readme.md)

## Tables:

-   **Table**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/table/Readme.md)

## Typography:

-   **Title**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/title/Readme.md)

-   **Text**: [Readme](https://github.com/delab-team/de-ui/blob/main/src/components/text/Readme.md)

# License

[MIT License Copyright (c) 2023 DeLab Team](LICENSE)
