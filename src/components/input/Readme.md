# Input Component

The Input component is a reusable React component designed to create input fields with optional labels and error messages. This readme provides instructions on how to use the component along with an example code snippet.

## Props

-   `label` (string, optional): Specifies the label text for the input field.
-   `error` (string, optional): Displays an error message below the input field if provided.
-   `value` (string, required): The current value of the text area.
-   `onChange` ((newValue: string) => void, required): A callback function to handle changes to the text area's value .
-   `placeholder` (string, optional): The placeholder text displayed in the text area when it's empty.
-   `size`: 'xsmall' | 'small' | 'medium' | 'large'
-   `variant`: 'black' | 'white'
-   `className`: Additional CSS classes that can be applied to the Input component.
-   `style`: CSS styles that will be applied to the Input component.
-   `rest` (React.InputHTMLAttributes<HTMLInputElement>, optional): Any additional input attributes you want to pass.
-   `tgStyles`: An object that allows you to specify Telegram-specific styles for the component. This object has the following properties:
    -   `inputWrapper` (Optional): Object (CSSProperties) - Specifies custom styles for the input wrapper that contains the label, input field, and error message.
    -   `label` (Optional): Object (CSSProperties) - Specifies custom styles for the label.
    -   `error` (Optional): Object (CSSProperties) - Specifies custom styles for the error message.
    -   `input` (Optional): Object (CSSProperties) - Specifies custom styles for the input field

## Example

```
    onChange={(newValue: string) => setValue(newValue)
```

```jsx
<form>
    <Input
        label="Username"
        placeholder="Enter your username"
        error="Username is required"
        tgStyles={{
            input: { 
                background: '#2E7DDB', 
                border: '1px solid #fff', 
                color: '#fff' 
            },
        }}
    />
</form>
```
