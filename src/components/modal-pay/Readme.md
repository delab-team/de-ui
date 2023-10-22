# ModalPay Component

The `ModalPay` component is a versatile React component designed for creating a payment modal dialog. It provides extensive customization options for controlling the appearance and behavior of the modal and its contents.

## Props 

- `modalTitle`: A string representing the title of the payment modal.
- `modalData`: An array of PayTokenType objects, each containing information about a payment token. Each object should include the following properties:
- `token`: A string representing the token's name.
- `amount`: A string representing the payment amount.
- `tokenAddress`: A string representing the token's address.
- `tokenLogo`: A string representing the URL of the token's logo.
- `className (optional)`: A string representing additional CSS classes to be applied to the modal.
- `isOpen`: A boolean indicating whether the payment modal is open.
- `onClose`: A function to close the payment modal.
- `variant (optional)`: A string representing the color variant of the modal. It can be either 'white' or 'black' (default is 'black').
- `activePayToken`: A PayTokenType object representing the currently selected payment token.
- `setActivePayToken`: A function that sets the active payment token when a different token is selected.
- `onOtherClick`: A function to handle the click event when the "Other" option is selected.
- `tgStyles (optional)`: An object that allows you to customize the styles of different parts of the modal. The following properties are available for customization:
- - `modal`: Custom CSS properties for the modal itself.
- - `modalTopButton`: Custom CSS properties for the top button in the modal.
- - `modalTitle`: Custom CSS properties for the modal title.
- - `tokenItem`: Custom CSS properties for individual payment token items.
- - `tokenItemActive`: Custom CSS properties for the currently active payment token item.
- - `tokenItemAmount`: Custom CSS properties for the payment token amounts.
- - `modalPayAmount`: Custom CSS properties for the payment amount section.
- - `modalPayAmountInput`: Custom CSS properties for the payment amount input field.
- - `modalPayAmountToken`: Custom CSS properties for the display of the selected payment token.
- - `payButton`: Custom CSS properties for the payment button.


### Example

```jsx
const TON = 'https://s2.coinmarketcap.com/static/img/coins/200x200/11419.png'
const DLB = 'https://app.delabwallet.com/logo_black.png'
const BOLT = 'https://ton.app/media/jetton-d4419656-5067-4923-8f44-7ffd3da69242.jpg'

const ModalExample = () => {
    const [ show, setShow ] = useState<boolean>(false)

    const modalData = [
        {
            token: 'TON',
            tokenLogo: TON,
            amount: '10,4',
            tokenAddress: '0:1'
        },
        {
            token: 'DLB',
            tokenLogo: DLB,
            amount: '50',
            tokenAddress: '0:2'
        },
        {
            token: 'BOLT',
            tokenLogo: BOLT,
            amount: '120',
            tokenAddress: '0:3'
        }
    ]

    const [ payToken, setPayToken ] = useState<PayTokenType>(modalData[0])

    const handleCloseModal = () => {
        setShow(false)
    }

    return (
        <>
            <ModalPay
                modalTitle="Pay $20"
                isOpen={show}
                modalData={modalData}
                onClose={handleCloseModal}
                activePayToken={payToken}
                setActivePayToken={setPayToken}
                onOtherClick={() => console.log('Hello)')}
            />
            <Button onClick={() => setShow(true)}>
              Show Modal Search List
            </Button>
        </>
    )
}
```