# IconSelector Component

The IconSelector component is a reusable React component designed to display icons based on a provided ID. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `id` ('settings' | 'burger-menu' | ..., required): Specifies the ID of the icon you want to display. You can choose from a list of predefined icon IDs.
- `size` (string, optional): Specifies the size of the icon (e.g., '32px', '2rem').
- `color` (string, optional): Specifies the color of the icon (any valid CSS color value).
- `className` (string, optional): Additional CSS classes to apply to the icon.
- `tgStyles` (optional):  An object that allows you to specify Telegram-specific styles for the icon. This object has the following property:
   - `stroke` (optional): String - Specifies the stroke color of the icon when rendered in a Telegram environment.
- `style` (optional): CSS styles that will be applied to the icon.

## Example

```jsx
  <IconSelector id="settings" size="32px" color="#000000" tgStyles={{stroke: '#e00cf3'}} />
```