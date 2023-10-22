/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { IconSelector } from '../icon-selector/icon-selector'
import { ModalSearchList, ModalSearchListProps } from './modal-search-list'
import { Button } from '../button/button'

import { AppInner } from '../app-inner/app-inner'

const meta: Meta<ModalSearchListProps> = {
    title: 'Modals/ModalSearchList',
    component: ModalSearchList,
    tags: [ 'autodocs' ]
}

export default meta

type Story = StoryObj<ModalSearchListProps>

const imgLink = 'https://avatars.githubusercontent.com/u/116884789?s=200&v=4'

const ModalExample = () => {
    const [ show, setShow ] = useState<boolean>(false)
    const [ value, setValue ] = useState<string>('')

    const handleCloseModal = () => {
        setShow(false)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const modalData = [
        {
            id: 'a4th12',
            icon: imgLink,
            title: 'Text',
            actionIcon: <IconSelector id="chevron-right" size="18px" />,
            onClick: () => {},
            isActive: true
        },
        {
            id: 'a3th1s',
            icon: imgLink,
            title: 'Text',
            actionIcon: <IconSelector id="chevron-right" size="18px" />,
            onClick: () => {},
            isActive: false
        },
        {
            id: 'a4th1ss',
            icon: imgLink,
            title: 'Text',
            actionIcon: <IconSelector id="chevron-right" size="18px" />,
            onClick: () => {},
            isActive: false
        },
        {
            id: 'a4th1a12',
            icon: imgLink,
            title: 'Text',
            actionIcon: <IconSelector id="chevron-right" size="18px" />,
            onClick: () => {},
            isActive: false
        }
    ]

    return (
        <>
            <ModalSearchList
                modalTitle="Text"
                modalData={modalData}
                searchValue={value}
                onChangeSearch={onChange}
                isOpen={show}
                onClose={() => setShow(false)}
                variant='white'
            />
            <Button onClick={() => setShow(true)}>
              Show Modal Search List
            </Button>
        </>
    )
}

export const Playground: Story = {
    render: () => (
        <AppInner isTg={false}>
            <ModalExample />
        </AppInner>
    ),
    args: {}
}
