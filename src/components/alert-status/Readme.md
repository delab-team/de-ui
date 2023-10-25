# AlertStatus Component

The `AlertStatus` component is a React component designed to display status messages within a modal. It provides a visual indicator of success or failure along with customizable content and an option to close the modal.

## Props

- `statusTitle (string, required)`: The title or main message of the alert.
- `iconStatus (React Node, required)`: The icon or visual representation of the alert's status.
- `children (React Node, optional)`: Additional content to be displayed within the alert.
- `isOpen (boolean, required)`: A boolean value that determines whether the alert is open or closed.
- `onClose (function, required)`: A callback function to be executed when the alert is closed.
- `classNameModal (string, optional)`: Additional CSS class name for the modal container.
- `classNameTitle (string, optional)`: Additional CSS class name for the title.
- `classNameButton (string, optional)`: Additional CSS class name for the close button.
- `classNameStatus (string, optional)`: Additional CSS class name for the status icon container.
- `classNameContent (string, optional)`: Additional CSS cla
-   `tgStyles (optional)`: An object containing custom CSS styles for different parts of the modal. You can customize the modal, modalTitle, and modalButton.
- - `modal` - React.CSSProperties | undefined
- - `modalTitle` - React.CSSProperties | undefined
- - `ModalButton` - React.CSSProperties | undefined

## Example

```jsx
    const success = (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <circle cx="12.5" cy="12.5" r="12" stroke="#1AB233"/>
            <path d="M16.8333 9.79169L10.875 15.75L8.16663 13.0417" stroke="#1AB233" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )

    const [ showAlert, setShowAlert ] = useState<boolean>(false)

    const handleShowAlert = () => {
        setShowAlert(true)
    }

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    return (
        <div>
            <Button onClick={handleShowAlert}>Show status alert</Button>
            {showAlert && (
                <AlertStatus iconStatus={success} buttonContent="Ok" statusTitle='Successful' isOpen={showAlert} onClose={handleCloseAlert} />
            )}
        </div>
    )
```
