import { FC, useRef } from 'react'

import { IconSelector } from '../icon-selector/icon-selector'

import { useIsTg } from '../../hooks/useIsTg'

import s from '../../styles/file-upload.module.css'

export interface FileUploadProps {
    onFileUpload: (file: File) => void;
    accept?: string;
    uploadText?: string;
    fileInputRef?: React.RefObject<HTMLInputElement>;
    className?: string;
    tgStyles?: {
        uploadContainer?: React.CSSProperties | undefined;
        icon?: string;
        uploadText?: React.CSSProperties | undefined;
    }
}

export const FileUpload: FC<FileUploadProps> = ({
    onFileUpload,
    accept,
    uploadText = 'Click to browse',
    fileInputRef,
    className,
    tgStyles
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

    const isTg = useIsTg()

    const uploadStyles = isTg ? tgStyles?.uploadContainer : undefined
    const iconStyles = isTg ? tgStyles?.icon : undefined
    const textStyles = isTg ? tgStyles?.uploadText : undefined

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
                style={uploadStyles}
            >
                <input
                    type="file"
                    ref={fileInputRef || internalFileInputRef}
                    accept={accept}
                    onChange={e => handleFileUpload(e, 'change')}
                    className={s.fileInput}
                />
                <IconSelector id="upload" className={s.uploadIcon} color={iconStyles} />
                <p className={s.uploadText} style={textStyles}>{uploadText}</p>
            </div>
        </div>
    )
}
