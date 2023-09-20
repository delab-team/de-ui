# MobileHeader

## Props 

The MobileHeader component accepts the following props:
- `mobileTop`: An array of top items for the header, each item can have an icon and text.
- `mobileBottom`: An optional array of bottom items for the header, similar to top items.
- `mobileClassName`: CSS class name for the mobile header container.
- `mobileTopClassName`: CSS class name for the top item container.
- `mobileBottomClassName`: CSS class name for the bottom item container.
- `activeTopColor`: Color for active top items.
- `inactiveTopColor`: Color for inactive top items.
- `activeBottomColor`: Color for active bottom items.
- `inactiveBottomColor`: Color for inactive bottom items.
- `backgroundHeader`: Background color or CSS properties for the header.
- `borderRadiusHeader`: Border radius for the header.

```jsx

type MobileItem = {
    icon?: React.ReactNode
    text?: string
    backgroundColor?: string
    onClick?: () => void
    isActive?: boolean
}

export interface MobileHeaderProps {
    mobileTop: (MobileItem | null)[]
    mobileBottom?: (MobileItem | null)[]
    mobileClassName?: string
    mobileTopClassName?: string
    mobileBottomClassName?: string
    activeTopColor?: string
    inactiveTopColor?: string
    activeBottomColor?: string
    inactiveBottomColor?: string
    backgroundHeader?: string | CSSProperties
    borderRadiusHeader?: string
}
```

### Example 

``` jsx
const mobileTopItems = [
    { text: 'Edit', isActive: false },
    { icon: <IconSelector id="profile" color="#fff" size="25px" />, isActive: false },
    { icon: <IconSelector id="settings" color="#fff" size="25px" />, isActive: false }
];

const mobileBottomItems = [
    { text: 'Home', isActive: false },
    { text: 'Search', isActive: false },
    { text: 'Profile', isActive: false },
    { text: 'Music', isActive: false },
    { text: 'Categories', isActive: false }
];

<MobileHeader
    mobileTop={mobileTopItems}
    mobileBottom={mobileBottomItems}
    mobileClassName="custom-mobile-header"
    mobileTopClassName="custom-top-item"
    mobileBottomClassName="custom-bottom-item"
    backgroundHeader="#333"
    borderRadiusHeader='20px'
    inactiveBottomColor='#fff'
    activeTopColor="white"
    inactiveTopColor='white'
/>
```
