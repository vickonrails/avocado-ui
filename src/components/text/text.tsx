import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const Text: FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>
}

const StyledText = styled.p`
  margin-top: 0;
`

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

export { Text }
