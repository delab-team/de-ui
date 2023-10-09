# HeaderSearchTabs Component

The `HeaderSearchTabs` component is designed to create a header section with a search input field and tabbed navigation. It allows users to perform searches and switch between different tabs, each with its own content.

## Props

The `HeaderSearchTabs` component accepts the following props:

-   `variant` ('black' | 'white'): The visual style variant for the header section. It can be 'black' for a dark background or 'white' for a light background.
-   `containerWidth` (string): The maximum width of the header section container. It controls the width of the entire header section.
-   `searchValue` (string): The current value of the search input field.
-   `searchOnChange` ((e: React.ChangeEvent<HTMLInputElement>) => void): A callback function that is called when the search input field value changes.
-   `tabsContent` (array of objects): An array of tab objects, where each tab object has:
    -   `title` (string): The title or label of the tab.
    -   `content` (React.ReactNode): The content to be displayed when the tab is active. This can include JSX elements, text, or any React components.
-   `className` (string, optional): Additional CSS class names to be applied to the header section for custom styling.
-   `style` (React.CSSProperties, optional): Additional inline CSS styles to be applied to the header section.
-   `tgStyles` (Optional): An object that allows you to specify styles that are specifically tailored for rendering in Telegram. This object has the following properties:
    -   `headerInner` (Optional): React.CSSProperties - Styles for the header container.
    -   `headerSearch` (Optional): An object that allows you to specify styles for the search component within the header. This object can have the following properties:
        -   `searchBody` (Optional): React.CSSProperties - Styles for the search container.
        -   `icon` (Optional): String - CSS color or a valid CSS color code for the search icon.
        -   `input` (Optional): React.CSSProperties - Styles for the search input field.
    -   `headerTabs` (Optional): An object that allows you to specify styles for the tabs component within the header. This object can have the following properties:
        -   `inner` (Optional): React.CSSProperties - Styles for the tabs container.
        -   `tabItem` (Optional): React.CSSProperties - Styles for individual tab items.
        -   `tabContent` (Optional): React.CSSProperties - Styles for the content of the active tab.

## Example

```jsx
const tabs = [
    {
        title: 'Tab 1',
        content: <div>Contents of tab 1</div>,
    },
    {
        title: 'Tab 2',
        content: <div>Contents of tab 2</div>,
    },
    {
        title: 'Tab 3',
        content: <div>Contents of tab 3</div>,
    },
]

const Example = () => {
    const [searchValue, setSearchValue] = useState < string > ''

    const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <HeaderSearchTabs
            variant="black"
            containerWidth={800}
            tabsContent={tabs}
            searchValue={searchValue}
            searchOnChange={changeEvent}
            tgStyles={{
                headerInner: { backgroundColor: '#2E7DDB' },
                headerTabs: {
                    inner: { backgroundColor: '#2E7DDB' },
                    tabItem: { color: '#fff' },
                },
                headerSearch: { searchBody: { backgroundColor: '#2E7DDB' }, icon: '#fff' },
            }}
        />
    )
}
```
