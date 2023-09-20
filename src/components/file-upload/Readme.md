# FileUpload Component

The `FileUpload` component allows users to upload files by either dragging and dropping files onto the component or clicking to browse for files.

## Props

- `onFileUpload` (function, required): A callback function to handle the uploaded file.
- `accept` (string, optional): Accepted file types, specified as a comma-separated list of file extensions (e.g., ".jpg,.png").
- `uploadText` (string, optional): Text to display inside the drop zone. By default, it is set to "Drag & Drop files here or click to browse".
- `fileInputRef` (React Ref, optional): A ref that can be used to control the file input element from outside the component. If provided, the component will use this ref to manage the input element.

## Example

```jsx
import { FC, useRef } from 'react';

import { FileUpload, Button } from '@delab-team/de-ui';

export const App: FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (file) => {
    console.log('Uploaded file:', file);
  };

  return (
    <div>
      <h1>Sample App with File Upload</h1>
      <FileUpload
        onFileUpload={handleFileUpload}
        accept=".jpg,.png"
        uploadText="Drag & Drop files here or click to browse"
        fileInputRef={fileInputRef}
      />
      <Button onClick={() => fileInputRef.current?.click()}>Select File</Button>
    </div>
  );
}

export default App;
