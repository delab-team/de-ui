import { FC } from 'react'

import styled from '@emotion/styled'

export interface FontProps {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    color?: string;
    children?: React.ReactNode;
}

const StyledFont = styled.div<FontProps>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color || 'inherit'};
`
export const Font: FC<FontProps> = ({ children, ...props }) => (
    <StyledFont {...props}>
        {children}
    </StyledFont>
)
