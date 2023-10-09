# SettingsCell Component

The `SettingsCell` component is a React component designed to display a list of settings items within a cell-like container. It is typically used for creating a settings section within user interfaces.

## Props

### `variant` (required)

-   Type: String ('white' | 'black')
-   Description: Specifies the color variant of the SettingsCell. Use 'white' for a white background variant and 'black' for a black background variant.

### `items` (required)

-   Type: Array of objects
-   Description: An array of settings items to be displayed within the SettingsCell. Each item should have the following properties:
    -   `label`: A string representing the label or name of the setting.
    -   `text`: A string representing the text or value of the setting.
    -   `onClick` (optional): A callback function to be executed when the setting item is clicked.

### `className` (optional)

-   Type: String
-   Description: Additional CSS class to be applied to the SettingsCell container, allowing for custom styling.

### `style` (optional)

-   Type: React.CSSProperties

### `tgStyles` (object, optional): An object that allows you to provide custom styles for various elements of the settings cell when in a Telegram-specific environment. It has the following properties:

-   `inner`: (object, optional): Custom CSS styles for the inner container of the settings cell.
-   `innerTitle`: (object, optional): Custom CSS styles for the title element of the settings cell.
-   `settingsItem`: (object, optional): Custom CSS styles for each individual settings item.
-   `settingsText`: (object, optional): Custom CSS styles for the text of each settings item.

## Example

```jsx
const settingsItems = [
    {
        label: 'Language',
        text: 'English',
        onClick: () => console.log('English'),
    },
    {
        label: 'Notifications',
        text: 'Enabled',
    },
]

const Example = () => {
    return (
        <SettingsCell
            variant="white"
            items={settingsItems}
            className="my-settings-cell"
            tgStyles={{ inner: { backgroundColor: '#2E7DDB' }, settingsText: { color: '#fff' } }}
        />
    )
}
```
