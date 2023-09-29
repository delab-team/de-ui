# Tooltip Component

The Tooltip component displays helpful information on hover. It can be used to provide additional context or explanations for elements in your application.

## Props

- `text` (string, required): The text to display in the tooltip.
- `children` (ReactNode, required): The content that triggers the tooltip on hover.
- `className` (string): The className for the tooltip body.
 
## Example

```jsx
      <Tooltip text="Another tooltip">
        <span>Another element</span>
      </Tooltip>
```