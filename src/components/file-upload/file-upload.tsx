import { FC, useRef } from 'react'

import { IconSelector } from '../icon-selector/icon-selector'

import s from '../../styles/file-upload.module.css'

export interface FileUploadProps {
    onFileUpload: (file: File) => void;
    accept?: string;
    uploadText?: string;
    fileInputRef?: React.RefObject<HTMLInputElement>;
    className?: string;
}

export const FileUpload: FC<FileUploadProps> = ({
    onFileUpload,
    accept,
    uploadText = 'Drag & Drop files here or click to browse',
    fileInputRef,
    className
}) => {
    const internalFileInputRef = useRef<HTMLInputElement | null>(null)

    const openFileDialog = () => {
        if (fileInputRef?.current) {
            fileInputRef.current.click()
        } else if (internalFileInputRef.current) {
            internalFileInputRef.current.click()
        }
    }

    const handleFileUpload = (
        e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
        eventType?: 'change' | 'drop'
    ) => {
        if (eventType === 'change' && e.target instanceof HTMLInputElement) {
            const fileInput = e.target
            const files = fileInput.files
            if (files && files.length > 0) {
                const file = files[0]
                onFileUpload(file)
            }
        } else if (eventType === 'drop' && e instanceof DragEvent) {
            e.preventDefault()
            const file = e.dataTransfer?.files[0]
            if (file) {
                onFileUpload(file)
            }
        }
    }

    return (
        <div className={`${s.fileUploadContainer} ${className || ''}`}>
            <div
                className={s.fileUpload}
                onClick={openFileDialog}
                onDragOver={e => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault()
                    handleFileUpload(e, 'drop')
                }}
            >
                <input
                    type="file"
                    ref={fileInputRef || internalFileInputRef}
                    accept={accept}
                    onChange={e => handleFileUpload(e, 'change')}
                    className={s.fileInput}
                />
                <IconSelector id="upload" className={s.uploadIcon} />
                <p className={s.uploadText}>{uploadText}</p>
            </div>
        </div>
    )
}
