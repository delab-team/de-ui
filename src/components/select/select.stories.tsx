/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Select, SelectProps } from './select'

import { AppInner } from '../app-inner/app-inner'

const story: Meta<SelectProps> = {
    title: 'Forms/Select',
    component: Select,
    tags: [ 'autodocs' ]
}

const example = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' }
]

export default story

type Story = StoryObj<SelectProps>

const SelectExample = () => {
    const [ selectedValue, setSelectedValue ] = useState<string>('Type the text')

    const handleSelect = (value: string) => {
        setSelectedValue(value)
    }

    return (
        <Select variant="black" options={example} selectedValue={selectedValue} onSelect={handleSelect} tgStyles={{ selectInner: { background: '#2E7DDB' } }} />
    )
}

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
            <SelectExample />
        </AppInner>
    ),
    args: {}
}
