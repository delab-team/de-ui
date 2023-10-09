# FileUpload Component

The `FileUpload` component allows users to upload files by either dragging and dropping files onto the component or clicking to browse for files.

## Props

- `onFileUpload` (function, required): A callback function to handle the uploaded file.
- `accept` (string, optional): Accepted file types, specified as a comma-separated list of file extensions (e.g., ".jpg,.png").
- `uploadText` (string, optional): Text to display inside the drop zone. By default, it is set to "Drag & Drop files here or click to browse".
- `fileInputRef` (React Ref, optional): A ref that can be used to control the file input element from outside the component. If provided, the component will use this ref to manage the input element.
- `className` (string, optional): The className for the file upload body.
- `variant` (Optional): Type: String, either 'white' or 'black'
- `tgStyles (Optional)`: Type: Object. An object that allows you to specify styles that are specifically tailored for rendering in Telegram. This object has the following properties:
   - `uploadContainer` (Optional): React.CSSProperties - Styles for the container that wraps the file upload component.
   - `icon` (Optional): React.CSSProperties - Styles for the icon within the file upload component.
   - `uploadText` (Optional): React.CSSProperties - Styles for the upload text within the file upload component.

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
        tgStyles={{
            uploadText: { color: '#fff' },
            uploadContainer: { background: '#2E7DDB' },
            icon: { fill: '#fff' }
        }}
      />
      <Button onClick={() => fileInputRef.current?.click()}>Select File</Button>
    </div>
  );
}

export default App;
