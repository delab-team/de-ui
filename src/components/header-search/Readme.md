# HeaderSearch Component

The `HeaderSearch` component is designed to create a search input field within a header or similar section of your web application. It allows users to input search queries and provides customization options for styling and behavior.

## Props

The `HeaderSearch` component accepts the following props:

-   `value` (string): The current value of the search input field.
-   `type` (string, optional): The type of the input field (e.g., 'text', 'email'). Default is 'text'.
-   `onChange` ((e: React.ChangeEvent<HTMLInputElement>) => void): A callback function that is called when the input field value changes.
-   `className` (string, optional): Additional CSS class names to be applied to the search component for custom styling.
-   `containerWidth` (string): The maximum width of the search component container. It controls the width of the entire search component.
-   `variant` ('white' | 'black', optional): The visual style variant for the search component. It can be 'white' for a light background or 'black' for a dark background.
-   `style` (React.CSSProperties): CSS styles that will be applied to the search container.
-   `tgStyles`: An object that allows you to specify styles that are specifically tailored for rendering in Telegram. This object has the following properties:
    -   `searchBody` (Optional): React.CSSProperties - Styles for the search container.
    -   `icon` (Optional): String - CSS color or a valid CSS color code for the search icon.
    -   `input` (Optional): React.CSSProperties - Styles for the search input field.

## Usage Example

Here's an example of how to use the `HeaderSearch` component in your React application:

```jsx
import { HeaderSearch } from './components'

const Example = () => {
    const [value, setValue] = useState < string > ''

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <HeaderSearch
            value={value}
            onChange={onChange}
            containerWidth={800}
            variant="black"
            tgStyles={{
                icon: '#fff',
                searchBody: { background: '#2E7DDB' },
            }}
        />
    )
}
```
