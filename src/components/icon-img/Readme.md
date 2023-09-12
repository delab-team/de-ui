# IconImg Component

The IconImg component is a reusable React component designed to display images as icons with customizable size and styling options. This readme provides instructions on how to use an example code snippet.

## Props

- `src` (string, required): Specifies the source URL of the image to be displayed.
- `size` (16 | 20 | 24 | 32 | 36 | 48, optional): Specifies the size of the icon in pixels.
- `type` ('default' | 'round', optional): Specifies the type or style of the icon. Use 'default' for regular icons and 'round' for rounded icons.
- `alt` (string, optional): Specifies the alternative text for the image for accessibility.
- `className` (string, optional): Additional CSS classes to apply to the image.

## Example

```<IconImg src="icon.png" size={32} type="default" alt="Icon" />```