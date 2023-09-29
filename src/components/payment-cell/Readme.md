# PaymentCell Component

The `PaymentCell` component is a React component designed to manage and display a list of payment methods within a cell-like container. It allows users to add new payment methods and displays the existing ones.

## Props

### `initialPaymentMethods` (required)

- Type: Array of strings
- Description: An array of initial payment methods to be displayed in the PaymentCell.

### `variant` (required)

- Type: String ('white' | 'black')
- Description: Specifies the color variant of the PaymentCell. Use 'white' for a white background variant and 'black' for a black background variant.

### `className` (optional)

- Type: String
- Description: Additional CSS class to be applied to the PaymentCell container, allowing for custom styling.

### `style` (optional)

- Type: React.CSSProperties

## Example

```jsx
const Example = () => {
    const [ paymentMethods, setPaymentMethods ] = useState<string[]>([])
    
    return (
        <PaymentCell
            initialPaymentMethods={initialPaymentMethods}
            variant="black"
            className="custom-payment-cell"
        />
    );
}
