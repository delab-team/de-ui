/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Checkbox, CheckboxProps } from './checkbox'
import { AppInner } from '../app-inner/app-inner'

const story: Meta<CheckboxProps> = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<CheckboxProps>

const CheckboxExample = () => {
    const [ isChecked, setIsChecked ] = useState(false)

    const handleCheckboxChange = (newCheckedState: boolean) => {
        setIsChecked(newCheckedState)
    }

    return (
        <div>
            <Checkbox
                checked={isChecked}
                label="Select this option"
                onChange={handleCheckboxChange}
            />
            <br />
            <Checkbox
                checked={false}
                onChange={handleCheckboxChange}
                disabled
                label="Disabled"
            />
            <br />
            <Checkbox
                checked={true}
                onChange={handleCheckboxChange}
                disabled
                label="Active Disabled"
            />
        </div>
    )
}

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
            <CheckboxExample />
        </AppInner>
    ),
    args: {}
}
