# HeaderSearch Component

The `HeaderSearch` component is designed to create a search input field within a header or similar section of your web application. It allows users to input search queries and provides customization options for styling and behavior.

## Props

The `HeaderSearch` component accepts the following props:

- `value` (string): The current value of the search input field.
- `type` (string, optional): The type of the input field (e.g., 'text', 'email'). Default is 'text'.
- `onChange` ((e: React.ChangeEvent<HTMLInputElement>) => void): A callback function that is called when the input field value changes.
- `className` (string, optional): Additional CSS class names to be applied to the search component for custom styling.
- `containerWidth` (number | string): The maximum width (in pixels) of the search component container. It controls the width of the entire search component.
- `variant` ('white' | 'black', optional): The visual style variant for the search component. It can be 'white' for a light background or 'black' for a dark background.
- `style` (React.CSSProperties)

## Usage Example

Here's an example of how to use the `HeaderSearch` component in your React application:

```jsx
import { HeaderSearch } from './components';

const Example = () => {
    const [ value, setValue ] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <HeaderSearch value={value} onChange={onChange} containerWidth={800} variant='black'  />
    )
}
```