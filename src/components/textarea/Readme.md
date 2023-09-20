# TextArea Component

The TextArea component is a reusable React component designed for creating text areas with additional features like error styling and size options. This readme provides instructions on how to use the component along with an example code snippet.

## Installation

The TextArea component is a reusable React component designed for creating text areas with additional features like error styling and size options. This readme provides instructions on how to use the component along with an example code snippet.

## Usage

Once you have installed the TextArea component, you can start using it in your React components. Here's an example of how to use it:

```jsx
  const [text, setText] = useState('');

  const handleTextChange = (newValue) => {
    setText(newValue);
  };

  return (
        <div>
            <h1>Text Area Example</h1>
            <TextArea
                value={text}
                onChange={handleTextChange}
                placeholder="Type something..."
                isError={text.length > 100}
                isLarge={text.length > 50}
            />
        </div>
  );

```

## Props

-   `value` (string, required): The current value of the text area.
-   `onChange` ((newValue: string) => void, required): A callback function to handle changes to the text area's value.
-   `placeholder` (string, optional): The placeholder text displayed in the text area when it's empty.
-   `className` (string, optional): Additional CSS classes to apply to the text area.
-   `isError` (boolean, optional): Set this to true to apply error styling to the text area.
-   `isLarge` (boolean, optional): Set this to true to make the text area larger.
