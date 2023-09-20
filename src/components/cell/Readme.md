# Cell Component

The Cell component is a versatile React component designed to create structured cell-like elements with various optional features. This readme provides instructions on how to use the component along with an example code snippet.

## Props

- `before` (React.ReactNode, optional): Content to be displayed before the main content.
- `badgeBeforeTitle` (React.ReactNode, optional): Badge or icon to be displayed before the title.
- `badgeAfterTitle` (React.ReactNode, optional): Badge or icon to be displayed after the title.
- `badgeBeforeSubtitle` (React.ReactNode, optional): Badge or icon to be displayed before the subtitle.
- `badgeAfterSubtitle` (React.ReactNode, optional): Badge or icon to be displayed after the subtitle.
- `indicator` (React.ReactNode, optional): Indicator element to be displayed.
- `children` (React.ReactNode, optional): The main content of the cell.
- `after` (React.ReactNode, optional): Content to be displayed after the main content.
- `expandable` (boolean | 'auto' | 'always', optional): Specifies whether the cell is expandable. Use 'auto' for automatic expansion based on content.
- `multiline` (boolean, optional): Specifies whether the cell should support multiline content.
- `subhead` (React.ReactNode, optional): Subhead content.
- `subtitle` (React.ReactNode, optional): Subtitle content.
- `extraSubtitle` (React.ReactNode, optional): Extra subtitle content.
- `className` (string, optional): Additional CSS classes to apply to the cell.
- `disabled` (boolean, optional): Specifies whether the cell is disabled.

## Example 

```jsx
            <Cell
                before={<div>Before Content</div>}
                badgeBeforeTitle={<span className="badge">Badge</span>}
                badgeAfterTitle={<span className="badge">New</span>}
                indicator={<span className="indicator">Indicator</span>}
                children={<h2>Main Content</h2>}
                after={<div>After Content</div>}
                expandable="auto"
                multiline={false}
                subhead={<div>Subhead</div>}
                subtitle={<div>Subtitle</div>}
                extraSubtitle={<div>Extra Subtitle</div>}
                className="custom-cell"
                disabled={false}
            />
```