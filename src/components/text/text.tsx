import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { TextAlign, TextSize } from '../heading'
import { theme } from '../theme'
import { trimText } from '../../utils/heading'

const Text: FC<TextProps> = ({ children, trim, ...props }) => {
  const _className = props.className
    ? `avocado-text ${props.className}`
    : `avocado-text`

  return (
    <StyledText {...props} className={_className}>
      {typeof children === 'string' && trim
        ? trimText(children, trim)
        : children}
    </StyledText>
  )
}

const StyledTextStyles = ({ align, size }: TextProps) => css`
  margin-top: 0;
  text-align: ${align};
  font-size: ${size && theme.typography[size]};
`

const StyledText = styled.p`
  ${StyledTextStyles}
`

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * specify the alignment of text. Can be "left", "right", "center"
   */
  align?: TextAlign

  /**
   * determines the size of the text. @see TextSize
   */
  size?: TextSize
  /**
   * integer to truncate text at the specified length
   */
  trim?: number
}

Text.displayName = 'Text'

export { Text }
