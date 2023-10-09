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
    variant?: 'white' | 'black'
    tgStyles?: {
        uploadContainer?: React.CSSProperties | undefined;
        icon?: React.CSSProperties | undefined;
        uploadText?: React.CSSProperties | undefined;
    }
}

export const FileUpload: FC<FileUploadProps> = ({
    onFileUpload,
    accept,
    uploadText = 'Click to browse',
    fileInputRef,
    className,
    variant,
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

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target instanceof HTMLInputElement) {
            const fileInput = e.target
            const files = fileInput.files
            if (files && files.length > 0) {
                const file = files[0]
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
                className={`${s.fileUpload} ${variant === 'white' ? s.fileUploadWhite : s.fileUploadBlack}`}
                onClick={openFileDialog}
                style={uploadStyles}
            >
                <input
                    type="file"
                    ref={fileInputRef || internalFileInputRef}
                    accept={accept}
                    onChange={handleFileUpload}
                    className={s.fileInput}
                />
                <IconSelector id="upload" className={s.uploadIcon} style={iconStyles} />
                <p className={s.uploadText} style={textStyles}>{uploadText}</p>
            </div>
        </div>
    )
}
