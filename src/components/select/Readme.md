# Select Component

A reusable Select component for React with modular styles, TypeScript typings, icons, and more.

## Props
- `options (Array)`: An array of options for the select component.
  - `value (string, required)`: The value associated with the option.
  - `label (string, required)`: The label or display text for the option.
- `selectedValue (String)`: The currently selected value.
- `variant`: 'black' | 'white'
- `onSelect (Function)`: A callback function that is called when an option is selected.
- `className (String)`: Additional CSS class names to be applied to the select component.
- `tgStyles`: An object that allows you to provide custom styles for various elements of the select component when in a Telegram-specific environment. It has the following properties:
    - `selectInner` (object, optional): Custom CSS styles for the inner container of the select component.
    - `optionItem` (object, optional): Custom CSS styles for each individual option item in the dropdown.

## Usage

```jsx

import { FC, useState } from 'react'
import { Select } from '@delab-team/de-ui'

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const App: FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value)

  const handleSelect = (value: string) => {
    setSelectedValue(value)
  };

  return (
    <div>
      <Select options={options} selectedValue={selectedValue} onSelect={handleSelect} tgStyles={{ selectInner: { background: '#2E7DDB' } }} />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default App;

```