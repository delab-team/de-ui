# ButtonsCell Component

The `ButtonsCell` component is a React component designed to display a list of buttons within a cell-like container. It is typically used for creating a grid of buttons within user interfaces.

## Props

### `buttons` (required)

-   Type: Array of objects
-   Description: An array of button components to be displayed within the ButtonsCell. Each item should have the following property:
    -   `buttonComponent`: React component representing the button.

### `variant` (required)

-   Type: String ('white' | 'black')
-   Description: Specifies the color variant of the ButtonsCell. Use 'white' for a white background variant and 'black' for a black background variant.

### `className` (optional)

-   Type: String
-   Description: Additional CSS class to be applied to the ButtonsCell container, allowing for custom styling.

### `style` (optional)

-   Type: React.CSSProperties

### `tgStyles` (optional)

-   Type: Object
-   Description: An object that allows you to specify styles that are specifically tailored for rendering in Telegram. This object has the following property:
    -   `cellInner` (Optional): React.CSSProperties - Styles for the inner container of the `ButtonsCell` when displayed in Telegram.

## Example

```jsx
const buttonsArray = [
    { buttonComponent: <Button variant="danger">Delete</Button> },
    { buttonComponent: <Button variant="successfully">Submit</Button> },
]

const Example = () => {
    return (
        <ButtonsCell
            buttons={buttonComponents}
            variant="black"
            className="my-buttons-cell"
            tgStyles={{
              cellInner: {
                backgroundColor: '#2E7DDB'
              }
            }}
        />
    )
}
```
