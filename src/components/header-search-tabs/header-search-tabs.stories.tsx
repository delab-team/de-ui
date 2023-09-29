/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { HeaderSearchTabs, HeaderSearchTabsProps } from './header-search-tabs'

const story: Meta<HeaderSearchTabsProps> = {
    title: 'Headers/HeaderSearchTabs',
    component: HeaderSearchTabs,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<HeaderSearchTabsProps>

const tabs = [
    {
        title: 'Tab 1',
        content: <div>Contents of tab 1</div>
    },
    {
        title: 'Tab 2',
        content: <div>Contents of tab 2</div>
    },
    {
        title: 'Tab 3',
        content: <div>Contents of tab 3</div>
    }
]

const Example = () => {
    const [ searchValue, setSearchValue ] = useState<string>('')

    const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const styles =  {
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '10px'
    }

    return (
        <HeaderSearchTabs
            variant="black"
            containerWidth={800}
            tabsContent={tabs}
            searchValue={searchValue}
            searchOnChange={changeEvent}
            style={styles}
        />
    )
}

export const Playground: Story = {
    render: () => (
        <Example />
    ),
    args: {}
}
