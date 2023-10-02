/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { HeaderSearchTabs, HeaderSearchTabsProps } from './header-search-tabs'
import { AppInner } from '../app-inner/app-inner'

const bnbIcon = 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026'

const btcIcon = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026'

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
        content: (
            <div>
                <img src={bnbIcon} width={40} height={40} alt="icon" />
            </div>
        )
    },
    {
        title: 'Tab 2',
        content: (
            <div>
                <img src={btcIcon} width={40} height={40} alt="icon" />
            </div>
        )
    },
    {
        title: 'Tab 3',
        content: <div><img src={bnbIcon} width={40} height={40} alt="icon" /></div>
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
        <AppInner isTg={false}><Example /></AppInner>
    ),
    args: {}
}
