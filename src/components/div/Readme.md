# Div Component

The Div component is a versatile React component that extends the functionality of the HTML div element. It allows you to easily create div elements with additional features like custom CSS styles and conditionally applying styles based on a flag.

## Props

- `className (optional)`: A string representing the CSS class name for the div element.
- `tgStyles (optional)`: An object representing custom CSS styles that you want to apply to the div element when a certain condition is met.
- `style (optional)`: An object representing standard CSS styles for the div element.
- `children (optional)`: The content to be rendered inside the div. This can be a single React node or an array of nodes.

## Example 

```jsx
    <Div
      className="custom-div"
      tgStyles={{ backgroundColor: 'lightblue' }}
    >
      <p>This is a Div component with custom styles.</p>
    </Div>
```