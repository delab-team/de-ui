# Avatar Component

The Avatar component is a versatile React component designed to create user or profile avatars with options for size, gradient background color, initials, and fallback icons. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `size` (number, optional): Specifies the size of the avatar in pixels.
- `gradientColor` ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'l-blue' | 'violet', optional): Specifies the gradient background color of the avatar.
- `initials` (string, optional): Specifies the initials to be displayed in the avatar.
- `fallbackIcon` (string, optional): Specifies the URL of the fallback icon to be displayed if no initials are provided.
- `children` (ReactNode, optional): Additional content to be displayed within the avatar.
- `className` (string, optional): Additional CSS classes to apply to the avatar.

## Example

```
            <Avatar size={48} gradientColor="blue" initials="EX" />
            <Avatar size={64} gradientColor="green" fallbackIcon="user-icon.png" />
            <Avatar size={32} gradientColor="red">
                <img src="profile-image.jpg" alt="User" />
            </Avatar>
```