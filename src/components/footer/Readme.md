# Footer Component

The Footer component is a reusable React component designed to create footer sections for web pages, including customizable menus, contact information, and additional content. This readme provides instructions on how to use the component along with an example code snippet.

## Props
- `logo` (string, required): Specifies the URL of the footer logo image.
- `menuItems` (MenuItem[], required): An array of menu items, where each item consists of an id, url, and label. These items create the main menu in the footer.
- `contactInfo` (ContactInfo, optional): An object containing contact information with phoneNumber, email, and address properties.
- `backgroundColor` (string, optional): Specifies the background color of the footer.
- `children` (React.ReactNode, optional): Additional custom content that you want to include in the footer.
- `className` (string, optional): Additional CSS classes to apply to the footer.
- `menuItems2` (MenuItem[], optional): An additional array of menu items for a secondary menu.
- `menuItems3` (MenuItem[], optional): An additional array of menu items for a tertiary menu.
- `tgStyles` Description: An optional object that allows you to specify platform-specific CSS styles for different parts of the footer component. It can contain the following properties:
  - `footerInner`: CSS styles for the inner footer container.
  - `logo`: CSS styles for the logo image.
  - `menuLi`: CSS styles for individual menu items.
  - `phoneNumber`: CSS styles for the phone number link.
  - `email`: CSS styles for the email link.

## Example 

```jsx
    const logoUrl = 'your-logo.png';

    const contactInfo = {
        phoneNumber: '+1 (123) 456-7890',
        email: 'info@example.com',
        address: '123 Main Street, City, Country',
    };

    return (
        <div>
            {/* Other content of your web application */}
            <Footer
                logo={logoUrl}
                logoSize={80}
                logoWidth={80}
                menuItems={[
                    { id: '1', link: <Link to="example">Example</Link> },
                    { id: '2', link: <Link to="about">About us</Link> },
                    { id: '3', link: <Link to="news">News</Link> }
                ]}
                contactInfo={{
                    phoneNumber: '+1 (123) 456-7890',
                    email: 'info@example.com',
                    address: '123 Main Street, City, Country'
                }}
                backgroundColor="#333"
            >
                {/* Additional custom content goes here */}
            </Footer>
        </div>
    );
```