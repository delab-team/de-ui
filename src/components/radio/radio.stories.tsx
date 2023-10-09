/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { AppInner } from '../app-inner/app-inner'

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
                tgStyles={{ label: { color: '#2E7DDB' } }}
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
        <AppInner isTg={false}>
            <RadioExample />
        </AppInner>
    ),
    args: {}
}
