# Li Component

The `Li`` component is a versatile React component that extends the functionality of the HTML <li> element.

## Props

- `children`: The content to be rendered inside the list item. This can be a single React node or an array of nodes.
- `tgStyles` (optional): An object representing custom CSS styles that you want to apply to the list item when a certain condition is met. If the condition is not met, no additional styles are applied.
- `...rest`: All other props that can be applied to an HTML <li> element. These props are forwarded to the underlying <li> element, allowing you to specify additional attributes and properties.

```jsx

<Li tgStyles={{ color: '#1C77FF' }}>
  This is a list item with custom styles.
</Li>
```