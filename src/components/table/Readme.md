# Table Component

The `Table` component is a customizable table for displaying tabular data in React applications.

## Props

The Table component accepts the following props:

-   `data (array of arrays)`: The tabular data to be displayed.
-   `columnWidths (array of numbers, optional)`: An array of column widths.
-   `rowHeights (array of numbers, optional)`: An array of row heights.
-   `containerWidth (string, optional)`: The width of the table container.
-   `className (string, optional)`: Additional CSS class to be applied to the table.
-   `tgStyles (optional)`: {
    tableContainer?: CSSProperties | undefined
    td?: CSSProperties | undefined
    }

## Example

```jsx
  const data = [
    ['Name', 'Age', 'Location'],
    ['John', 30, 'New York'],
    ['Alice', 25, 'Los Angeles'],
  ];

  <Table data={data} />

  // CustomStyling
  <Table
    data={data}
    containerWidth="80%"
    className="custom-table"
    tgStyles={{
      td: { color: '#fff' }, tableContainer: { background: '#2E7DDB' }
    }}
  />
```
