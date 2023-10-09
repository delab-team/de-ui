# InfoCell Component

The `InfoCell` component is a React component designed to display various information items within a cell-like container. It can display information such as phone numbers, email addresses, and connected devices. This component provides methods to format and mask sensitive information.

## Props

### `variant` (required)

-   Type: String ('white' | 'black')
-   Description: Specifies the color variant of the InfoCell. Use 'white' for a white background variant and 'black' for a black background variant.

### `phone` (optional)

-   Type: String
-   Description: Phone number to display in the InfoCell. The phone number will be partially masked for privacy.

### `email` (optional)

-   Type: String
-   Description: Email address to display in the InfoCell. The email address will be partially masked for privacy.

### `connectedDevices` (optional)

-   Type: Number
-   Description: The number of connected devices to display in the InfoCell.

### `className` (optional)

-   Type: String
-   Description: Additional CSS class to be applied to the InfoCell container, allowing for custom styling.

### `style` (optional)

-   Type: CSS styles that will be applied to the InfoCell component.

### `tgStyles` (optional)

-   Description: An object that allows you to specify Telegram-specific styles for the component. This object has the following properties:

    -   `inner` (Optional): Object (CSSProperties) - Specifies custom styles for the InfoCell
    -   `iconColor` (Optional): String - Specifies the color of icons when rendered in a Telegram environment.
    -   `titleItem` (Optional): Object (CSSProperties) - Specifies custom styles for the title items (e.g., "Number," "Email," "Connected Devices").
    -   `contacts` (Optional): Object (CSSProperties) - Specifies custom styles for the contact information (phone, email, connected devices).

## Example

```jsx
<InfoCell
    phone="+380950917161"
    email="gmail@gmail.com"
    connectedDevices={2}
    variant="white"
    tgStyles={{
        contacts: { color: '#fff' },
        inner: { background: '#2E7DDB' },
        iconColor: '#fff',
        titleItem: { fontSize: '16px' },
    }}
/>
```
