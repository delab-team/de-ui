# MobileMenu Component

## Props

 - `items` (MobileMenuItemProps[]): An array of items that make up the mobile menu. Each item is an object with the following properties:

   - **icon**: A React component representing an icon.
   - **text**: A string representing the text label for the menu item.
   - **backgroundColor (optional)**: A string representing the background color of the menu item.
   - **textColor (optional)**: A string representing the text color of the menu item.
 - `onClick (optional)`: A function to be called when the menu item is clicked.
 - `backgroundMenu (string | CSSProperties)`: A property that can be either a string representing a CSS color or a CSSProperties object defining additional background styles for the menu.

  - `borderRadius (string)``: A string representing the border radius for the menu.
## Example
```jsx
return (
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <MobileMenu items={[
                {
                    icon: <IconSelector id="home" color="#fff" size="24px" />,
                    text: 'Главная',
                    backgroundColor: 'transparent',
                    textColor: 'white',
                    onClick: () => {}
                },
                {
                    icon: <IconSelector id="profile" color="#fff" size="24px" />,
                    text: 'Профиль',
                    backgroundColor: 'transparent',
                    textColor: 'white',
                    onClick: () => {}
                },
                {
                    icon: <IconSelector id="settings" color="#fff" size="24px" />,
                    text: 'Профиль',
                    backgroundColor: 'transparent',
                    textColor: 'white',
                    onClick: () => {}
                }
            ]} backgroundMenu="#333" borderRadius='100px' />
        </div>
)
```
