# Text Component

The Text component is a reusable React component that provides flexibility in styling text elements within your application. It allows you to easily customize properties such as font size, font weight, font family, text color, and apply custom CSS classes.

## Props

The Text component accepts the following props:

- `fontSize (optional)`: Defines the font size of the text. It accepts one of the following values: 'small', 'medium', 'large'.

- `fontWeight (optional)`: Specifies the font weight of the text. It accepts one of the following values: 'normal', 'bold', 'light', 'medium', 'semibold'.

- `fontFamily (optional)`: Allows you to set a custom font family for the text. You can provide a string with the font family name.

- `color (optional)`: Sets the color of the text. You can provide a valid CSS color value as a string.

- `customClassName (optional)`: Allows you to add custom CSS classes to the Text component.

- `children (required)`: The content that you want to display within the Text component. This can be text or other React elements.

## Usage 

```
     <Text fontSize="medium" fontWeight="bold" color="blue">
        This is a bold and blue text.
      </Text>
```