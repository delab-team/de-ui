# Select Component

A reusable Select component for React with modular styles, TypeScript typings, icons, and more.

## Props
- `options (Array)`: An array of options for the select component.
- `selectedValue (String)`: The currently selected value.
- `onSelect (Function)`: A callback function that is called when an option is selected.

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
      <Select options={options} selectedValue={selectedValue} onSelect={handleSelect} />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default App;

```