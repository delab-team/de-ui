# Toggle Component Documentation

The `Toggle` component is a customizable toggle switch that can be used in React applications.

## Props
The Toggle component accepts the following props:

- `label (string, optional)`: The text label for the toggle.
- `disabled (boolean, optional)`: Disables the toggle if set to true.
- `checked (boolean, optional)`: Sets the initial checked state of the toggle.
- `onChange (function, optional)`: A callback function that is called when the toggle state changes.
- `size (string, optional)`: Size of the toggle ('small', 'default', 'large').
- `color (string, optional)`: Color of the toggle ('red', 'green', 'purple', 'yellow', 'teal', 'orange').

## Example 

```jsx
  <Toggle label="Default Toggle" />
  <Toggle label="Small Toggle" size="small" color="purple" />
  <Toggle label="Large Toggle" size="large" color="teal" />
```