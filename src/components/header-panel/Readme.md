# HeaderPanel Component

The `HeaderPanel` component is designed to create header panels or sections in your web application. It allows you to display a title, customize the appearance with visual variants, add left and right actions, and control the maximum container width.

## Props

The `HeaderPanel` component accepts the following props:

- `title` (string): The main title text to be displayed in the header panel.
- `className` (string, optional): Additional CSS class names to be applied to the header panel for custom styling.
- `containerWidth` (string): The maximum width of the header panel container. It controls the width of the entire header panel component.
- `variant` ('white' | 'black'): The visual style variant for the header panel. It can be 'white' for a light background or 'black' for a dark background.
- `actionLeft` (React Node, optional): A React Node representing an action or content to be displayed on the left side of the header panel.
- `actionRight` (React Node, optional): A React Node representing an action or content to be displayed on the right side of the header panel.
- `style` (React.CSSProperties, optional): Additional inline CSS styles to be applied to the header panel.
- `tgStyles` (Optional): An object that allows you to specify styles that are specifically tailored for rendering in Telegram. This object has the following properties:
   - `header` (Optional): React.CSSProperties - Styles for the header panel container.
   - `headerTitle` (Optional): React.CSSProperties - Styles for the title text in the header panel.

## Usage Example

```jsx
const Example = () => {
  return (
    <HeaderPanel
      title="Home"
      containerWidth="800px"
      variant="black"
      actionLeft={<div className="exampleLink">Back</div>}
      actionRight={<div>+</div>}
      tgStyles={{
        header: { background: '#3D3D3D' }
      }}
    />
  );
};
