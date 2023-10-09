# Tooltip Component

The Tooltip component displays helpful information on hover. It can be used to provide additional context or explanations for elements in your application.

## Props

- `text` (string, required): The text to display in the tooltip.
- `children` (ReactNode, required): The content that triggers the tooltip on hover.
- `className` (string): The className for the tooltip body.
- `iconColor`: An optional prop that specifies the color of the icon used to trigger the tooltip. If not provided, it will use a default color.
- `tgStyles` Description: An optional object that allows you to specify platform-specific CSS styles for different parts of the tooltip component. It can contain the following properties:
  - `tooltipText:` CSS styles for the tooltip text.
  - `tooltipInner:` CSS styles for the inner tooltip container.
  - `iconButton:` CSS styles or a color for the icon button.
  - `button:` CSS styles for the trigger button.
 
## Example

```jsx
      <Tooltip text="Another tooltip" tgStyles={{iconButton: '#2E7DDB'}}>
        <span>Another element</span>
      </Tooltip>
```