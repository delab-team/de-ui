# Radio Component

The `Radio` component is a customizable radio input element built for use in React applications. It provides a visual representation of a binary choice, allowing users to select one option from a set of mutually exclusive choices.

## Props 

- `checked (boolean, required)`: Indicates whether the radio button is checked or not.

- `disabled (boolean, optional)`: If set to true, it disables the radio button, making it non-interactive. Defaults to false.

- `label (string, optional)`: A label to display alongside the radio button. If not provided, no label will be displayed.

- `onChange (function, required)`: A callback function that is invoked when the radio button's state changes. It receives a boolean argument representing the new checked state.

- `className (string, optional)`: The className for the radio body.

- `tgStyles (object, optional)`:  An object that allows you to provide custom styles for the radio button and label. It has the following properties:
  - `radio (object, optional)`: Custom CSS styles for the radio button.
  - `label (object, optional)`: Custom CSS styles for the label.

## Example 

```jsx
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleRadioChange = (newCheckedState: boolean) => {
        setIsChecked(newCheckedState);
    };

    return (
      <Radio
        checked={isChecked}
        label="Select this option"
        onChange={handleRadioChange}
        tgStyles={{ label: { color: '#2E7DDB' } }}
      />
    );
```