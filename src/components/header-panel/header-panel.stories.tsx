/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { HeaderPanel, HeaderPanelProps } from './header-panel'

import { AppInner } from '../app-inner/app-inner'

import '../../styles/example.style.css'

const story: Meta<HeaderPanelProps> = {
    title: 'Headers/HeaderPanel',
    component: HeaderPanel,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<HeaderPanelProps>

const chevronLeft = <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
    <path opacity="0.7" d="M8 15L1 8L8 1" stroke="#818C99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const plus = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path opacity="0.7" d="M12 3.5C12.5523 3.5 13 3.94772 13 4.5L13 11H19.5C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13H13L13 19.5001C13 20.0524 12.5523 20.5001 12 20.5001C11.4477 20.5001 11 20.0524 11 19.5001L10.999 13H4.5C3.94772 13 3.5 12.5523 3.5 12C3.5 11.4477 3.94772 11 4.5 11H10.999L11 4.5C11 3.94772 11.4477 3.5 12 3.5Z" fill="#818C99"/>
</svg>

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}>
            <HeaderPanel {...args} />
        </AppInner>
    ),
    args: {
        title: 'Home',
        containerWidth: 500,
        variant: 'black',
        actionLeft: <div className="exampleLink">{chevronLeft} Back</div>,
        actionRight: <div>{plus}</div>,
        style: {
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '10px'
        },
        tgStyles: {}
    }
}
