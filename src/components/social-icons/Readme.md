# SocialIcons Component

The SocialIcons component is a reusable React component designed to display icons based on a provided ID. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `id` ('settings' | 'burger-menu' | ..., required): Specifies the ID of the icon you want to display. You can choose from a list of predefined icon IDs.
- `size` (string, optional): Specifies the size of the icon (e.g., '32px', '2rem').
- `className` (string, optional): Additional CSS classes to apply to the icon.
- `color`: (Optional) Specifies the color of the icon.
- `tgStyles`: (Optional) An object containing Telegram-specific styles for the icon.

## Example

```jsx
  <SocialIcons id="settings" size="32px" tgStyles={{ icon: "#2E7DDB" }} />
```