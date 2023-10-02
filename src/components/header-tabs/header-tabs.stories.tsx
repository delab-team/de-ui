/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { AppInner } from '../app-inner/app-inner'
import { HeaderTabs, HeaderTabsProps } from './header-tabs'

const story: Meta<HeaderTabsProps> = {
    title: 'Headers/HeaderTabs',
    component: HeaderTabs,
    tags: [ 'autodocs' ]
}

const bnbIcon = 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026'

const btcIcon = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026'

export default story

type Story = StoryObj<HeaderTabsProps>

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

const styles = {
    paddingLeft: '10px',
    paddingRight: '10px',
    borderRadius: '10px'
}

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={true}>
            <HeaderTabs {...args} />
        </AppInner>
    ),
    args: {
        tabs,
        variant: 'white',
        style: styles,
        tgStyles: {}
    }
}
