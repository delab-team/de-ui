# RichCellItem and RichCell Components

## Introduction

This README provides documentation for two React components, `RichCellItem` and `RichCell`, which are designed for displaying rich content cells in your web application.

### Table of Contents

1. [RichCellItem Component](#richcellitem-component)
2. [RichCell Component](#richcell-component)


## RichCellItem Component

The `RichCellItem` component is designed to display a single rich content item. It is typically used within a list or grid of items, such as a transaction history or a list of recent activities.

### Props

- `icon` (string): The URL or path to the icon image representing the item.
- `name` (string): The name or title of the item.
- `date` (string): The date associated with the item.
- `amount` (string): The amount or value associated with the item.
- `variant` ('dark' | 'white'): The visual style variant for the component. It can be 'dark' for a dark background or 'white' for a light background.

### Usage Example

**rich-cell-item**:
```jsx
  const icons = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026'
  <RichCellItem variant="dark" icons={icons} name="Bitcoin" date="today at 17:00" amount="+ 500 BTC" />
```

<hr />

## RichCell Component

The `RichCell` component is designed to display a collection of rich content items in a visually appealing way. It is often used to present a summary of information with multiple items, such as a balance summary with multiple accounts.

## Props

- `items (array of objects)`: An array of rich content items to be displayed. Each item should have the following structure:
- `icon (string)`: The URL or path to the icon image representing the item.
- `name (string)`: The name or title of the item.
- `amount (number)`: The numeric amount or value associated with the item.
- `currency (string)`: The currency code or symbol associated with the item.
- `allLink (React Node)`: A React Node representing a link or action that users can take to view all items.
- `variant ('black' | 'white')`: The visual style variant for the component. It can be 'black' for a dark background or 'white' for a light background.

## Example 

```jsx
const itemsArray = [
    {
        icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026',
        name: 'BNB',
        amount: 323.30611182,
        currency: '₴2211.43'
    },
    {
        icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026',
        name: 'Bitcoin',
        amount: 323.30611182,
        currency: '₴2211.43'
    }
]

    <RichCell
      items={itemsArray}
      allLink={<a href="/view-all">See All</a>}
      variant="black"
    />
```