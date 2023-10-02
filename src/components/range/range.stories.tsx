/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../button/button'

import { Range, RangeProps } from './range'

import { AppInner } from '../app-inner/app-inner'

const story: Meta<RangeProps> = {
    title: 'Forms/Range',
    component: Range,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<RangeProps>

const RangeExample = () => {
    const [ volume, setVolume ] = useState<number>(50)
    const [ rangeStyle, setRangeStyle ] = useState({
        label: 'Volume',
        min: 0,
        max: 100,
        step: 1
    })

    const handleRangeChange = (value: number) => {
        setVolume(value)
    }

    return (
        <div>
            <Range
                label={rangeStyle.label}
                min={rangeStyle.min}
                max={rangeStyle.max}
                step={rangeStyle.step}
                value={volume}
                onChange={handleRangeChange}
            />
            <p>Current Volume: {volume}</p>
            <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                <Button onClick={() => setRangeStyle({ label: 'Brightness', min: 0, max: 255, step: 1 })}>
                  Switch to Brightness
                </Button>
                <Button onClick={() => setRangeStyle({ label: 'Temperature', min: 0, max: 100, step: 0.1 })}>
                  Switch to Temperature
                </Button>
            </div>
        </div>
    )
}

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
            <RangeExample />
        </AppInner>
    ),
    args: {}
}
