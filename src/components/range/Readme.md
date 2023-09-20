# Range Component Documentation

The `Range` component is a customizable input range slider that can be used in React applications.

## Props
The Range component accepts the following props:

- `label (string, optional)`: The label for the range input.
- `min (number, optional)`: The minimum value of the range (default is 0).
- `max (number, optional)`: The maximum value of the range (default is 100).
- `step (number, optional)`: The step increment of the range (default is 1).
- `value (number, optional)`: The initial value of the range (default is the minimum value).
- `onChange (function, optional)`: A callback function that is called when the range value changes.

## Styling
The Range component supports custom styling through CSS. You can override the default styles by targeting the following CSS classes:

- `.rangeContainer`: The container that holds the range input.
- `.label`: The label of the range input.
- `.input`: The range input element.
- `.output`: The output element displaying the current value.

## Example

```jsx

 <Range label="Volume" min={0} max={100} step={1} value={50} onChange={handleRangeChange} />


 // Custom Styling
  <Range
    label="Custom Range"
    min={0}
    max={10}
    step={0.5}
    value={5}
    onChange={(value) => console.log(`Custom Range value is: ${value}`)}
    className="custom-range"
  />
```
