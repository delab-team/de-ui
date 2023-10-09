# PaymentCell Component

The `PaymentCell` component is a React component designed to manage and display a list of payment methods within a cell-like container. It allows users to add new payment methods and displays the existing ones.

## Props

### `initialPaymentMethods` (required)

-   Type: Array of strings
-   Description: An array of initial payment methods to be displayed in the PaymentCell.

### `variant` (required)

-   Type: String ('white' | 'black')
-   Description: Specifies the color variant of the PaymentCell. Use 'white' for a white background variant and 'black' for a black background variant.

### `className` (optional)

-   Type: String
-   Description: Additional CSS class to be applied to the PaymentCell container, allowing for custom styling.

### `style` (optional)

-   Type: React.CSSProperties

### `tgStyles` (optional)

-   Type: `{ inner?: React.CSSProperties; title?: React.CSSProperties; inputAdd?: React.CSSProperties; buttonAdd?: React.CSSProperties; paymentItem?: React.CSSProperties; addText?: React.CSSProperties }`
-   Description: Allows you to define custom styles for different parts of the component when it is used in a Telegram (tg) context. You can define custom styles for the inner container (inner), title (title), input for adding payment methods (inputAdd), the "Add" button (buttonAdd), individual payment items (paymentItem), and the "Add a new payment method" text (addText).

## Example

```jsx
const Example = () => {
    const [ paymentMethods, setPaymentMethods ] = useState<string[]>([])

    return (
        <PaymentCell
            initialPaymentMethods={initialPaymentMethods}
            variant="black"
            className="custom-payment-cell"
            tgStyles={{ inner: { backgroundColor: '#2E7DDB' }, addText: { color: '#fff' } }}
        />
    );
}
```
