# ModalInfoCard Component

The `ModalInfoCard` component is a versatile React component designed for creating a modal dialog that displays information and options. 

## Props
- `modalTitle`: A string representing the title of the modal.
- `isOpen`: A boolean indicating whether the modal is open.
- `onClose`: A function to close the modal.
- `variant (optional)`: A string representing the color variant of the modal. It can be either 'white' or 'black' (default is 'white').
- `className (optional)`: A string representing additional CSS classes to be applied to the modal.
- `tgStyles (optional)`: An object that allows you to customize the styles of different parts of the modal. The following properties are available for customization:
- - `modal`: Custom CSS properties for the modal itself.
- - `modalTopButton`: Custom CSS properties for the top button in the modal.
- - `modalInfoTopTitle`: Custom CSS properties for the title in the top section of the modal.
- - `modalInfoTopSubtitle`: Custom CSS properties for the subtitle in the top section of the modal.
- - `modalInfoDetailTitle`: Custom CSS properties for the titles in the details section of the modal.
- - `modalInfoDetailSubtitle`: Custom CSS properties for the subtitles in the details section of the modal.
- - `modalInfoDivider`: Custom CSS properties for the divider between details.
- - `modalBtnDownload`: Custom CSS properties for the "Download" button.
- - `modalBtnConnect`: Custom CSS properties for the "Connect" button.
- `serverTitle, serverSubtitle, infoTitle, and infoSubtitle`: Strings representing information to be displayed in the details section of the modal.
- `modalTopTitle, modalTopSubtitle, and modalTopIcon (optional)`: Strings representing information and an icon to be displayed in the top section of the modal.


```jsx
const imgLink = 'https://avatars.githubusercontent.com/u/116884789?s=200&v=4'

const ModalExample = () => {
    const [ show, setShow ] = useState<boolean>(false)

    return (
        <>
            <ModalInfoCard
                modalTitle="Text"
                isOpen={show}
                onClose={() => setShow(false)}
                modalTopTitle="Text"
                modalTopSubtitle="Text"
                modalTopIcon={imgLink}
                infoTitle="Text"
                infoSubtitle="Text"
                serverTitle="Text"
                serverSubtitle="Text"
            />
            <Button onClick={() => setShow(true)}>Show Modal Search List</Button>
        </>
    )
}
```