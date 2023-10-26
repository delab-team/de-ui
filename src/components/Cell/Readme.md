# Cell Component

## Props

The Cell component accepts the following props:

- `variant (string, required)`: Specifies the variant of the cell, which can be either 'white' or 'black'.
- `className (string, optional)`: A CSS class to apply to the cell.
- `style (object, optional)`: Custom CSS styles to apply to the cell.
- `tgStyles (object, optional)`: Custom styles for the cell when a certain condition is met. It has an optional inner property for inner cell styling.
- `disabled (boolean, optional)`: A flag to disable interactions with the cell.
- `leftClassName (string, optional)`: A CSS class to apply to the left content area.
- `centerClassName (string, optional)`: A CSS class to apply to the center content area.
- `rightClassName (string, optional)`: A CSS class to apply to the right content area.
- `bottomLeftClassName (string, optional)`: A CSS class to apply to the bottom-left content area.
- `leftContent (React Node or Array, optional)`: Content to display in the left content area.
- `centerContent (React Node or Array, optional)`: Content to display in the center content area.
- `rightContent (React Node or Array, optional)`: Content to display in the right content area.
- `bottomLeftContent (React Node or Array, optional)`: Content to display in the bottom-left content area.
- `rowLeftClassName (string, optional)`: A CSS class to apply to the left content of the row.

```jsx

const img = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026'

  <Cell
    leftContent={<img src={img} width="47px" height="47px" style={{ borderRadius: '50%' }} />}
    centerContent={<span>Bitcoin</span>}
    rightContent={<span style={{ color: '#4BB34B' }}>+ 500 BTC</span>}
    bottomLeftContent={<span style={{ fontSize: '13px', color: '#818C99' }}>today at 17 : 00</span>}
  />
```