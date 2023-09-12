# Font Component

The Font component is a reusable React component designed to apply custom font styles to its children. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `fontFamily` (string, required): Specifies the font family to be applied to the text.
- `fontSize` (string, required): Specifies the font size of the text (e.g., '24px', '2rem').
- `fontWeight` (string, required): Specifies the font weight of the text (e.g., 'bold', 'normal').
- `color` (string, optional): Specifies the font color. If not provided, it defaults to 'inherit'.
- `children` (React.ReactNode, optional): The content that you want to apply the custom font styles to.

## Example

```
            <Font
                fontFamily="Arial, sans-serif"
                fontSize="24px"
                fontWeight="bold"
                color="#007acc"
            >
                Custom font applied to this text.
            </Font>
```