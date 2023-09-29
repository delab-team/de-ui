# InfoCell Component

The `InfoCell` component is a React component designed to display various information items within a cell-like container. It can display information such as phone numbers, email addresses, and connected devices. This component provides methods to format and mask sensitive information.

## Props

### `variant` (required)

- Type: String ('white' | 'black')
- Description: Specifies the color variant of the InfoCell. Use 'white' for a white background variant and 'black' for a black background variant.

### `phone` (optional)

- Type: String
- Description: Phone number to display in the InfoCell. The phone number will be partially masked for privacy.

### `email` (optional)

- Type: String
- Description: Email address to display in the InfoCell. The email address will be partially masked for privacy.

### `connectedDevices` (optional)

- Type: Number
- Description: The number of connected devices to display in the InfoCell.

### `className` (optional)

- Type: String
- Description: Additional CSS class to be applied to the InfoCell container, allowing for custom styling.

### `style` (optional)

- Type: React.CSSProperties

## Example

```jsx
<InfoCell phone="+380950917161" email="gmail@gmail.com" connectedDevices={2} variant="white" />
```