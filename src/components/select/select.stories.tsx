/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Select, SelectProps } from './select'

const story: Meta<SelectProps> = {
    title: 'Forms/Select',
    component: Select,
    tags: [ 'autodocs' ]
}

const example = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
]

export default story

type Story = StoryObj<SelectProps>

const SelectExample = () => {
    const [ selectedValue, setSelectedValue ] = useState<string>(example[0].value)

    const handleSelect = (value: string) => {
        setSelectedValue(value)
    }

    return (
        <Select options={example} selectedValue={selectedValue} onSelect={handleSelect} />
    )
}

export const Playground: Story = {
    render: () => (
        <SelectExample />
    ),
    args: {}
}
