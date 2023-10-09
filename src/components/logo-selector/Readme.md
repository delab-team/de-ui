# LogoSelector Component

The LogoSelector component is a reusable React component designed to display icons based on a provided ID. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `id` ('ton-symbol' | 'vector-evescale' | 'everscale' | 'venom' | 'delab'): Specifies the ID of the icon you want to display. You can choose from a list of predefined icon IDs.
- `color` (string): Sets the color of the SVG icon. This color will be applied to both the stroke and fill attributes of the SVG paths, circles, and ellipses within the icon.
- `height` (string): Specifies the height of the rendered SVG icon. You can use any valid CSS height value, such as pixels (e.g., '24px') or percentages (e.g., '50%').
- `width` (string): Specifies the width of the rendered SVG icon. You can use any valid CSS width value, such as pixels (e.g., '24px') or percentages (e.g., '50%').
- `className` (string, optional): Additional CSS classes to apply to the icon.
- `tgStyles`: { icon?: string }: Provides the option to specify custom styles for the SVG icon when the component is used in a specific context, such as a Telegram (tg) environment. You can define custom fill and stroke colors for the icon within the tgStyles object.

## Example

```jsx
  <LogoSelector id="venom" height="32px" width="92px" tgStyles={{ icon: orange }} />
```