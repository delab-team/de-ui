# PageWrapper Component

The PageWrapper component is a reusable React component designed to create a structured layout for web pages, including a header, footer, and main content area. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `pageTitle` (string, required): Specifies the title of the page, which is set as the document title.
- `header` (React.ReactNode, required): Content to be displayed in the header section of the page.
- `footer` (React.ReactNode, required): Content to be displayed in the footer section of the page.
- `content` (React.ReactNode, required): The main content of the page that goes inside the 
- `<main>` element.

## Example

```jsx
    return (
        <PageWrapper
            pageTitle="My Page Title"
            header={<header>Header Content</header>}
            footer={<footer>Footer Content</footer>}
            content={
                /* Your page's main content goes here */
                <main>
                    {/* Your content */}
                </main>
            }
        />
    );
```