# HeaderTitle Component

## Introduction

The `HeaderTitle` component is designed to display a header title with a subtitle in a web application's header or similar sections. It allows customization of the title, subtitle, visual style, CSS class, and container width.

### Table of Contents

## Props

The `HeaderTitle` component accepts the following props:

- `title` (string): The main title text to be displayed.
- `subtitle` (string): The subtitle or additional text displayed below the main title.
- `variant` ('white' | 'black'): The visual style variant for the header. It can be 'white' for a light background or 'black' for a dark background.
- `className` (string): Additional CSS class names to be applied to the header for custom styling.
- `containerWidth` (string): The maximum width of the header container. It controls the width of the entire header component.
- `tgStyles` (Optional): An object that allows you to specify styles that are specifically tailored for rendering in Telegram. This object has the following properties:
  - `header`: (Optional): React.CSSProperties - Styles for the header container.
  - `title`:  (Optional): React.CSSProperties - Styles for the title text.
  - `subtitle`: (Optional): React.CSSProperties - Styles for the subtitle text.

## Usage Example

Here's an example of how to use the `HeaderTitle` component in your React application:

```jsx
    <HeaderTitle
      title="Home"
      subtitle="Home"
      variant="white"
      className="custom-header"
      containerWidth={1200}
      tgStyles={{
        header: {
          backgroundColor: '#2E7DDB',
        },
        title: {
          color: '#fff'
        },
        subtitle: {
          color: '#fff'
        },
      }}
    />
};
