# Title Component

The Title component is a reusable component for creating text elements with customizable title styles. It allows you to easily set the font size, font weight, font family, text color, and more for different levels of text elements.

## Props

The Title component can be used to create text elements with various styles. It accepts the following props:

- `variant (required)`: Specifies the level of the text element. It can be one of the following values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'.

- `fontWeight (optional)`: Controls the font weight of the text. It can be set to 'normal' or 'bold'.

- `fontFamily (optional)`: Sets the font family for the text. You can specify a custom font family as a string.

- `color (optional)`: Defines the text color. You can use any valid CSS color value, such as 'red', '#007bff', or 'rgba(0, 0, 0, 0.5)'.

- `customClassName (optional)`: Allows you to add custom CSS class names to the component for additional styling.

## Usage 

```
      <Title variant="h1" fontWeight="bold" color="blue">
        Heading 1
      </Title>
      <Title variant="h2" fontFamily="Helvetica" color="green">
        Heading 2
      </Title>
      <Title variant="h3" fontWeight="bold" color="red">
        Heading 3
      </Title>
```