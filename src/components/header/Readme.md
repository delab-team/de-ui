# Header Component

The Header component is a reusable React component designed to create customizable headers for your web application. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `width` (string, required): Specifies the width of the header section (e.g., '100%', '200px').
- `before` (React.ReactNode, optional): Content to be displayed before the main header content.
- `children` (React.ReactNode, optional): The main content of the header.
- `after` (React.ReactNode, optional): Content to be displayed after the main header content.
- `className` (string, optional): Additional CSS classes to apply to the header.
- `position` ('fixed' | 'absolute' | 'relative' | 'static', optional): Specifies the CSS positioning property for the header.

## Example

```
            <Header
                width="100%"
                position="fixed"
                className="custom-header"
                before={<div>Before Content</div>}
                children={<h1>Main Header Content</h1>}
                after={<div>After Content</div>}
            />
```