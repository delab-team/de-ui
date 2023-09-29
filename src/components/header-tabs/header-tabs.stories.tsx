/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { HeaderTabs, HeaderTabsProps } from './header-tabs'

const story: Meta<HeaderTabsProps> = {
    title: 'Headers/HeaderTabs',
    component: HeaderTabs,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<HeaderTabsProps>

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
    const styles = {
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '10px'
    }

    return (
        <div>
            <HeaderTabs tabs={tabs} variant='white' style={styles} />
        </div>
    )
}
export const Playground: Story = {
    render: () => (
        <Example />
    ),
    args: {}
}
