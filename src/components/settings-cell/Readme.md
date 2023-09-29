# SettingsCell Component

The `SettingsCell` component is a React component designed to display a list of settings items within a cell-like container. It is typically used for creating a settings section within user interfaces.

## Props

### `variant` (required)

- Type: String ('white' | 'black')
- Description: Specifies the color variant of the SettingsCell. Use 'white' for a white background variant and 'black' for a black background variant.

### `items` (required)

- Type: Array of objects
- Description: An array of settings items to be displayed within the SettingsCell. Each item should have the following properties:
  - `label`: A string representing the label or name of the setting.
  - `text`: A string representing the text or value of the setting.
  - `onClick` (optional): A callback function to be executed when the setting item is clicked.

### `className` (optional)

- Type: String
- Description: Additional CSS class to be applied to the SettingsCell container, allowing for custom styling.

### `style` (optional)

- Type: React.CSSProperties

## Example

```jsx
const settingsItems = [
  {
    label: 'Language',
    text: 'English',
    onClick: () => console.log('English')
  },
  {
    label: 'Notifications',
    text: 'Enabled'
  },
];

const Example = () => {
  return (
    <SettingsCell variant="white" items={settingsItems} className="my-settings-cell" />
  );
}
