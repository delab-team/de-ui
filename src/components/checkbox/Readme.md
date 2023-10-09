# Checkbox Component

The `Checkbox` component is a customizable checkbox input element designed for use in React applications. It provides a visual representation of a binary choice with optional text label and disabled state support.

## Props

The Checkbox component accepts the following props:

-   `checked (boolean, required)`: Indicates whether the checkbox is checked or not.

-   `label (string, optional)`: An optional text label to display alongside the checkbox.

-   `disabled (boolean, optional)`: If set to true, it disables the checkbox, making it non-interactive. Defaults to false.

-   `onChange (function, required)`: A callback function that is invoked when the checkbox state changes. It receives a boolean argument representing the new checked state.

-   `className (string, optional)`: The className for the checkbox body.

-   `tgStyles `(Optional):
-   Type: Object
-   Description: An object that allows you to specify styles that are specifically tailored for rendering in Telegram. This object has the following properties:
    -   `checkbox (Optional): React.CSSProperties - Styles for the checkbox element.
    -   `label (Optional): React.CSSProperties - Styles for the label associated with the checkbox.

## Example

```jsx
const CheckboxExample = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleCheckboxChange = (newCheckedState: boolean) => {
        setIsChecked(newCheckedState)
    }

    return (
        <div>
            <Checkbox
                checked={isChecked}
                label="Select this option"
                onChange={handleCheckboxChange}
                tgStyles={{
                    checkbox: { border: '1px solid #2E7DDB' },
                    label: { color: '#2E7DDB' },
                }}
            />
            <br />
            <Checkbox checked={false} onChange={handleCheckboxChange} disabled label="Disabled" />
            <br />
            <Checkbox checked={true} onChange={handleCheckboxChange} disabled label="Active Disabled" />
        </div>
    )
}
```
