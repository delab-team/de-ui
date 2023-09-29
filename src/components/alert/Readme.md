# Alert Component

The `Alert` component is a customizable alert/notification component for React applications. It allows you to display various types of alerts with optional icons, custom styling, and auto-closing functionality.

## Props

- `type (string, required)`: Determines the type of alert. Available options are:
  - `default`: A default alert.
  - `icon`: An alert with an icon.
  - `important`: An important alert.
  - `rounded`: A rounded alert.
  - `border`: An alert with a border.
  - `extensive-content`: An alert with extensive content.
- `onClose` (function, optional): A callback function triggered when the alert is closed. It's called when the close button is clicked or when the autoCloseTimeout is reached.
- `icon (ReactNode, optional)`: An optional ReactNode to display an icon within the alert.
- `children (ReactNode, required)`: The content to be displayed inside the alert.
- `autoCloseTimeout (number, optional)`: A timeout in milliseconds after which the alert will automatically close. If not provided, the alert won't auto-close.
- `position (string, optional)`: Determines the position of the alert on the screen. Available options are:
  - `'top-left'`: Display the alert in the top-left corner.
  - `'top-right'`: Display the alert in the top-right corner.
  - `'bottom-left'`: Display the alert in the bottom-left corner.
  - `'bottom-right'`: Display the alert in the bottom-right corner.
  - `'center'`: Center the alert on the screen.
- `centered (boolean, optional)`: If set to `true`, the alert will be centered on the screen. Ignored if position is specified.
- `className` (string, optional) : The className of the alert body.

## Example

```jsx
import { useState } from 'react'
import { Alert, Button } from '@delab-team/de-ui';

const AlertExample = () => {
    const [ showAlert, setShowAlert ] = useState<boolean>(false)

    const handleShowAlert = () => {
        setShowAlert(true)
    }

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    return (
        <div>
            <Button onClick={handleShowAlert}>Show alert</Button>
            {showAlert && (
                <Alert
                    type="important"
                    onClose={handleCloseAlert}
                    icon={<span>🚀</span>}
                    autoCloseTimeout={5000}
                    position="top-right"
                >
                  This is an alert with an icon and auto-close after 5 seconds!
                </Alert>
            )}
        </div>
    )
}
```