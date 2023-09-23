# ProgressBar Component

The `ProgressBar` component is a versatile component used to display progress visually. It allows you to customize the type, size, color, and label to suit your needs.

## Props

- `type (string)`: Specifies the type of progress bar. Possible values are 'default', 'withLabel', and 'percentOnly'.

- `size (string)`: Specifies the size of the progress bar. Possible values are 'small', 'large', and 'default'.

- `color (string)`: Specifies the color of the progress bar. Possible values are 'dark', 'blue', 'green', 'red', and 'purple'.

- `progress (number)`: Specifies the progress value in percentage (from 0 to 100).

- `label (string, optional)`: An optional label to display alongside the progress bar. If not provided, the progress percentage is used as the default label.

## Example

```jsx
<ProgressBar type="default" size="default" color="blue" progress={50} />
<ProgressBar type="withLabel" size="large" color="green" progress={75} label="Loading..." />
<ProgressBar type="percentOnly" size="small" color="red" progress={25} label="25%" />
```