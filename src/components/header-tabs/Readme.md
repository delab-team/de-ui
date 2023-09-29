# HeaderTabs Component

The `HeaderTabs` component is designed to create a tabbed navigation interface within a header or similar section of your web application. It allows users to switch between different tabs, each containing its own content.

## Props

The `HeaderTabs` component accepts the following props:

- `tabs` (array of objects): An array of tab objects, where each tab object has:
  - `title` (string): The title or label of the tab.
  - `content` (React.ReactNode): The content to be displayed when the tab is active. This can include JSX elements, text, or any React components.
- `variant` ('white' | 'black'): The visual style variant for the tabbed navigation. It can be 'white' for a light background or 'black' for a dark background.
- `className` (string): The className of the header-tabs body.
- `style` (React.CSSProperties)

## Example

```jsx
const tabs = [
  {
    title: 'Tab 1',
    content: <div>Contents of tab 1</div>,
  },
  {
    title: 'Tab 2',
    content: <div>Contents of tab 2</div>,
  },
  {
    title: 'Tab 3',
    content: <div>Contents of tab 3</div>,
  },
];

const Example = () => (
  <HeaderTabs tabs={tabs} variant="white" />
);
```