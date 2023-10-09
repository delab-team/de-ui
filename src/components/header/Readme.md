# Header Component

The Header component is a reusable React component designed to create customizable headers for your web application. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `width` (string, optional): Specifies the width of the header section (e.g., '100%', '200px').
- `before` (React.ReactNode, optional): Content to be displayed before the main header content.
- `children` (React.ReactNode, optional): The main content of the header.
- `after` (React.ReactNode, optional): Content to be displayed after the main header content.
- `className` (string, optional): Additional CSS classes to apply to the header.
- `position` ('fixed' | 'absolute' | 'relative' | 'static', optional): Specifies the CSS positioning property for the header.
- `style` (optional): CSS styles that will be applied to the header
- `containerWidth` (optional): Specifies the maximum width of the header container. It can be a number representing the width in pixels or a string with CSS units (e.g., **'80%'**, **'500px'**).
- `tgStyles` (optional): Description: An object that allows you to specify styles that are specifically tailored for rendering in Telegram. This object has the following properties:
    - `header` (Optional): CSSProperties - Styles for the header container.
    - `before` (Optional): CSSProperties - Styles for the content before the main content.
    - `children` (Optional): CSSProperties - Styles for the main content.
    - `after` (Optional): CSSProperties - Styles for the main content.

## Example

```jsx
            <Header
                position="fixed"
                className="custom-header"
                before={<div>Before Content</div>}
                children={<h1>Main Header Content</h1>}
                after={<div>After Content</div>}
            />
```