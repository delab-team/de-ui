# IconSelector Component

The IconSelector component is a reusable React component designed to display icons based on a provided ID. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `id` ('settings' | 'burger-menu' | ..., required): Specifies the ID of the icon you want to display. You can choose from a list of predefined icon IDs.
- `size` (string, optional): Specifies the size of the icon (e.g., '32px', '2rem').
- `color` (string, optional): Specifies the color of the icon (any valid CSS color value).
- `className` (string, optional): Additional CSS classes to apply to the icon.

## Example

```
  <IconSelector id="settings" size="32px" color="#000000" />
```