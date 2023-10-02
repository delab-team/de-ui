/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { HeaderSearch, HeaderSearchProps } from './header-search'
import { AppInner } from '../app-inner/app-inner'

const story: Meta<HeaderSearchProps> = {
    title: 'Headers/HeaderSearch',
    component: HeaderSearch,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<HeaderSearchProps>

const Example = () => {
    const [ value, setValue ] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const style = {
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '10px'
    }

    return (
        <HeaderSearch value={value} onChange={onChange} containerWidth={800} variant='black' style={style}  />
    )
}

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}><Example/></AppInner>
    ),
    args: {}
}
