# PageWrapperSidebar Component

The PageWrapperSidebar component is a reusable React component designed to create a structured layout for web pages, including a header, footer, sidebar, and main content area. This readme provides instructions on how to use the component along with an example code snippet.

## Usage

Once you have the PageWrapperSidebar component set up, you can use it to structure your web pages. The component provides a consistent layout for your application, including a header, footer, sidebar, and main content area.

## Props

- `pageTitle` (string, required): Specifies the title of the page, which is set as the document title.
- `header` (React.ReactNode, required): Content to be displayed in the header section of the page.
- `footer` (React.ReactNode, required): Content to be displayed in the footer section of the page.
- `sidebar` (React.ReactNode, required): Content to be displayed in the sidebar section of the page.
- `children` (React.ReactNode, required): The main content of the page that goes inside the <main> element.
- `containerWidth` - container width
- `className` - wrapper className
## Example

```jsx
    return (
        <PageWrapperSidebar
            pageTitle="My Page Title"
            header={<header>Header Content</header>}
            footer={<footer>Footer Content</footer>}
            sidebar={<aside>Sidebar Content</aside>}
        >
            {/* Main content goes here */}
            <main>
                {/* Your page's main content */}
            </main>
        </PageWrapperSidebar>
    );
```