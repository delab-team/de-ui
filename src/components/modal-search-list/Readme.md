# ModalSearchList Component

The `ModalSearchList` component is a versatile React component designed for creating a modal dialog that displays a list of items with search functionality. It includes various customization options to control the appearance and behavior of the modal and its contents.

## Props

- `modalTitle`: A string representing the title of the modal.
- `searchValue`: A string representing the current search value.
- `onChangeSearch`: A function to handle changes in the search input. It accepts arbitrary arguments.
- `modalData`: An array of objects, each representing an item in the modal list. Each object should contain the following properties:
- `id`: A unique identifier for the item.
- `icon`: A string representing the URL of an icon image.
- `title`: A string representing the title of the item.
- `actionIcon`: A React component representing an icon or action to be displayed.
- `onClick`: A function to handle the click event on the item. It accepts arbitrary arguments.
- `isActive`: A boolean indicating whether the item is active.
- `onClose`: A function to close the modal.
- `isOpen`: A boolean indicating whether the modal is open.
- `tgStyles (optional)`: An object that allows you to customize the styles of different parts of the modal. The following properties are available for customization:
- - `modal`: Custom CSS properties for the modal itself.
- - `modalTitle`: Custom CSS properties for the modal title.
- - `modalListItem`: Custom CSS properties for individual list items.
- - `modalListItemTitle`: Custom CSS properties for the titles of list items.
- - `modalListItemInfo`: Custom CSS properties for additional information in list items.
- `variant (optional)`: A string representing the color variant of the modal. It can be either 'white' or 'black' (default is 'white').
- `className (optional)`: A string representing additional CSS classes to be applied to the modal.

### Example

``jsx

const ModalExample = () => {
    const [ show, setShow ] = useState<boolean>(false)
    const [ value, setValue ] = useState<string>('')

    const handleCloseModal = () => {
        setShow(false)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const modalData = [
        {
            id: 'a4th12',
            icon: imgLink,
            title: 'Text',
            actionIcon: <IconSelector id="chevron-right" size="18px" />,
            onClick: () => {},
            isActive: true
        },
        {
            id: 'a3th1s',
            icon: imgLink,
            title: 'Text',
            actionIcon: <IconSelector id="chevron-right" size="18px" />,
            onClick: () => {},
            isActive: false
        },
        {
            id: 'a4th1ss',
            icon: imgLink,
            title: 'Text',
            actionIcon: <IconSelector id="chevron-right" size="18px" />,
            onClick: () => {},
            isActive: false
        },
        {
            id: 'a4th1a12',
            icon: imgLink,
            title: 'Text',
            actionIcon: <IconSelector id="chevron-right" size="18px" />,
            onClick: () => {},
            isActive: false
        }
    ]

    return (
        <>
            <ModalSearchList
                modalTitle="Text"
                modalData={modalData}
                searchValue={value}
                onChangeSearch={onChange}
                isOpen={show}
                onClose={() => setShow(false)}
            />
            <Button onClick={() => setShow(true)}>
              Show Modal Search List
            </Button>
        </>
    )
}
```