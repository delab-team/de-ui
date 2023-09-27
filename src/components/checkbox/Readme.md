# Checkbox Component

The `Checkbox` component is a customizable checkbox input element designed for use in React applications. It provides a visual representation of a binary choice with optional text label and disabled state support.

## Props
The Checkbox component accepts the following props:

- `checked (boolean, required)`: Indicates whether the checkbox is checked or not.

- `label (string, optional)`: An optional text label to display alongside the checkbox.

- `disabled (boolean, optional)`: If set to true, it disables the checkbox, making it non-interactive. Defaults to false.

- `onChange (function, required)`: A callback function that is invoked when the checkbox state changes. It receives a boolean argument representing the new checked state.

## Example 

```jsx
const CheckboxExample = () => {
    const [ isChecked, setIsChecked ] = useState(false)

    const handleCheckboxChange = (newCheckedState: boolean) => {
        setIsChecked(newCheckedState)
    }

    return (
        <div>
            <Checkbox
                checked={isChecked}
                label="Select this option"
                onChange={handleCheckboxChange}
            />
            <br />
            <Checkbox
                checked={false}
                onChange={handleCheckboxChange}
                disabled
                label="Disabled"
            />
            <br />
            <Checkbox
                checked={true}
                onChange={handleCheckboxChange}
                disabled
                label="Active Disabled"
            />
        </div>
    )
}
```