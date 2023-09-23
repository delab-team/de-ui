# Modal Component

The `Modal` component is a reusable React component that provides a modal dialog for displaying content on top of other content. This documentation explains how to use and customize the `Modal` component.

## Props

- `isOpen (boolean)`: Determines whether the modal is open or closed. When isOpen is true, the modal is displayed; when isOpen is false, the modal is hidden.
- `onClose (function)`: A callback function that is called when the user closes the modal. You can define your custom logic for handling modal closure.
- `children (ReactNode)`: The content you want to display within the modal. This can include any React elements or components.

## Example

```jsx
import { useState } from 'react'
import { Modal, Button } from '@delab-team/de-ui';

const ModalExample = () => {
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpenModal}>Show Modal</Button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Modal window title</h2>
                <p>Contents of the modal window</p>
            </Modal>
        </div>
    )
}
```