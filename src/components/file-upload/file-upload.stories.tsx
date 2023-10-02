/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/react'

import { FileUpload, FileUploadProps } from './file-upload'

import { AppInner } from '../app-inner/app-inner'

const story: Meta<FileUploadProps> = {
    title: 'Forms/FileUpload',
    component: FileUpload,
    tags: [ 'autodocs' ]
}

export default story

type Story = StoryObj<FileUploadProps>

const handleFileUpload = (file: any): any => {
    console.log('Uploaded file:', file)
}

export const Playground: Story = {
    render: ({ ...args }) => (
        <AppInner isTg={false}><FileUpload {...args} /></AppInner>
    ),
    args: {
        onFileUpload: handleFileUpload,
        accept: '.jpg,.png',
        uploadText: 'Click to browse'
    }
}
