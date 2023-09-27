/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Radio, RadioProps } from './radio'

const story: Meta<RadioProps> = {
    title: 'Forms/Radio',
    component: Radio,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<RadioProps>

const RadioExample = () => {
    const [ selectedOption, setSelectedOption ] = useState<boolean>(false)

    const handleRadioChange = (isChecked: boolean) => {
        setSelectedOption(isChecked)
    }

    return (
        <div>
            <Radio
                checked={selectedOption}
                onChange={handleRadioChange}
                label="Example"
            />
            <Radio
                checked={false}
                onChange={handleRadioChange}
                disabled
                label="Disabled"
            />
        </div>
    )
}

export const Playground: Story = {
    render: () => (
        <RadioExample />
    ),
    args: {}
}
