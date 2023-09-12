# Input Component

The Input component is a reusable React component designed to create input fields with optional labels and error messages. This readme provides instructions on how to use the component along with an example code snippet.

## Props 

- `label` (string, optional): Specifies the label text for the input field.
- `error` (string, optional): Displays an error message below the input field if provided.
- `rest` (React.InputHTMLAttributes<HTMLInputElement>, optional): Any additional input attributes you want to pass.

## Example 

```
        <form>
            <Input
                label="Username"
                placeholder="Enter your username"
                error="Username is required"
            />
        </form>
```