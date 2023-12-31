# Spinner Component

The Spinner component is a reusable React component designed to display loading spinners with customizable size and color options. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `size` (`'small'` | `'medium'` | `'large'`, optional): Specifies the size of the spinner. Default is 'medium'.
- `color` (`string`, `optional`): Specifies the color of the spinner. You can use any valid CSS color value. Default is `'#000000'`.
- `className` (`string`): The className of the spinner.
- `tgStyles` (`optional`): Custom styles specific to a certain condition (possibly related to a variable isTg).

## Usage

Here's an example of how to use it:

```jsx
        <div>
            <h1>Loading Example</h1>
            <Spinner size="medium" color="#000000" tgStyles="#2E7DDB" />
        </div>

```