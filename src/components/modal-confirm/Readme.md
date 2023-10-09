# ModalConfirm

The `ModalConfirm` component is a reusable React modal component designed to display a confirmation dialog with customizable title, message, and action buttons for confirming or canceling an action.

## Props

-   `isOpen`: A boolean that determines whether the modal is open.
-   `title`: The title of the confirmation dialog.
-   `message`: The message or content of the confirmation dialog (can be a React node).
-   `onConfirm`: A function to execute when the user confirms the action.
-   `onCancel`: A function to execute when the user cancels or closes the modal.
-   `className`: The class name of the modal body.
-   `tgStyles`: `{ modalContent?: React.CSSProperties; title?: React.CSSProperties; message?: React.CSSProperties }`

## Example

```jsx
import { useState } from 'react'
import { ModalConfirm, Button } from '@delab-team/de-ui'

const ModalConfirmExample = () => {
    const [isModalOpen, setIsModalOpen] = useState < boolean > false

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleConfirm = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpenModal}>Open modal window</Button>
            <ModalConfirm
                isOpen={isModalOpen}
                title="Confirmation"
                message="Are you sure you want to perform this action?"
                onConfirm={handleConfirm}
                onCancel={handleCloseModal}
                tgStyles={{ modalContent: { backgroundColor: '#2E7DDB', color: '#fff' } }}
            />
        </div>
    )
}
```
