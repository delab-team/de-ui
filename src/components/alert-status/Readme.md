# AlertStatus Component

The `AlertStatus` component is a React component designed to display status messages within a modal. It provides a visual indicator of success or failure along with customizable content and an option to close the modal.

## Props

-   `iconSize (optional)`: The size of the status icon (default: '30px').
-   `status`: The status of the alert, which can be either 'successful' or 'failed'.
-   `variant`: The variant of the alert, which can be either 'white' or 'black'.
-   `isOpen`: A boolean indicating whether the modal is open or closed.
-   `onClose`: A callback function to close the modal when the button is clicked.
-   `classNameModal (optional)`: Additional custom CSS class for the modal.
-   `classNameTitle (optional)`: Additional custom CSS class for the title.
-   `classNameButton (optional)`: Additional custom CSS class for the button.
-   `tgStyles (optional)`: An object containing custom CSS styles for different parts of the modal. You can customize the modal, modalTitle, and modalButton.
- - `modal` - React.CSSProperties | undefined
- - `modalTitle` - React.CSSProperties | undefined
- - `ModalButton` - React.CSSProperties | undefined

## Example

```jsx
const [showAlert, setShowAlert] = useState<boolean>(false)

const handleShowAlert = () => {
    setShowAlert(true)
}

const handleCloseAlert = () => {
    setShowAlert(false)
}

<Button onClick={handleShowAlert}>Show status alert</Button>
{
  showAlert && <AlertStatus status="successful" variant="black" isOpen={showAlert} onClose={handleCloseAlert} />
}
```
