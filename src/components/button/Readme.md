# Button Component

The Button component is a versatile React component for creating customizable buttons with various features such as icons, sizes, variants, and loading states. This readme provides instructions on how to use the component along with an example code snippet.

## Props

- `size` ('s' | 'm' | 'l', optional): Specifies the size of the button.
variant ('default' | 'outline' | 'secondary' | 'tentery', optional): Specifies the button's variant or style.
- `textAlign` ('left' | 'center' | 'right', optional): Specifies the text alignment within the button.
- `rounded` ('s' | 'm' | 'l', optional): Specifies the button's border radius for rounded corners.
- `startIcon` (string, optional): Specifies the URL of the icon to be displayed at the start of the button's text.
- `endIcon` (string, optional): Specifies the URL of the icon to be displayed at the end of the button's text.
- `disabled` (boolean, optional): Specifies whether the button is disabled.
- `loading` (boolean, optional): Specifies whether the button is in a loading state.
- `children` (ReactNode, optional): The text or content to be displayed within the button.

## Example 

```jsx
            <Button size="s" variant="default" textAlign="center" rounded="s">
                Default Button
            </Button>
            <Button size="m" variant="outline" textAlign="center" rounded="m" startIcon="start-icon.png">
                Outline Button
            </Button>
            <Button size="l" variant="secondary" textAlign="right" rounded="l" endIcon="end-icon.png">
                Secondary Button
            </Button>
            <Button size="s" variant="tentery" textAlign="left" rounded="s" loading>
                Loading Button
            </Button>
```