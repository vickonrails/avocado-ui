import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { theme } from '../theme'
import { trimText } from '../../utils/heading'

export const Heading: FC<HeadingProps> = ({ children, trim, ...props }) => {
  // generate heading classNames
  const _className = props.className
    ? `avocado-heading ${props.className}`
    : `avocado-heading`

  // render different heading level based on the level
  switch (props.level) {
    case 'h1':
      return (
        <StyledH1 {...props} className={_className}>
          {typeof children === 'string' && trim
            ? trimText(children, trim)
            : children}
        </StyledH1>
      )
    case 'h2':
      return (
        <StyledH2 {...props} className={_className}>
          {typeof children === 'string' && trim
            ? trimText(children, trim)
            : children}
        </StyledH2>
      )
    case 'h3':
      return (
        <StyledH3 {...props} className={_className}>
          {typeof children === 'string' && trim
            ? trimText(children, trim)
            : children}
        </StyledH3>
      )
    case 'h4':
      return (
        <StyledH4 {...props} className={_className}>
          {typeof children === 'string' && trim
            ? trimText(children, trim)
            : children}
        </StyledH4>
      )
    case 'h5':
      return (
        <StyledH5 {...props} className={_className}>
          {typeof children === 'string' && trim
            ? trimText(children, trim)
            : children}
        </StyledH5>
      )
    case 'h6':
      return (
        <StyledH6 {...props} className={_className}>
          {typeof children === 'string' && trim
            ? trimText(children, trim)
            : children}
        </StyledH6>
      )
    default:
      throw new Error(
        'Missing prop:level. Please specify a level for the Heading'
      )
  }
}

const StyledHeadingBase = ({ align }: HeadingProps) => css`
  margin-top: 0;
  margin-bottom: 0.5em;
  line-height: 1.2;
  text-align: ${align};
`

const StyledH1 = styled.h1`
  font-size: ${({ size }: HeadingProps) =>
    size ? theme.typography[size] : theme.typography['6xl']};
  ${StyledHeadingBase};
`
const StyledH2 = styled.h2`
  font-size: ${({ size }: HeadingProps) =>
    size ? theme.typography[size] : theme.typography['5xl']};
  ${StyledHeadingBase};
`
const StyledH3 = styled.h3`
  font-size: ${({ size }: HeadingProps) =>
    size ? theme.typography[size] : theme.typography['4xl']};
  ${StyledHeadingBase};
`
const StyledH4 = styled.h4`
  font-size: ${({ size }: HeadingProps) =>
    size ? theme.typography[size] : theme.typography['3xl']};
  ${StyledHeadingBase};
`
const StyledH5 = styled.h5`
  font-size: ${({ size }: HeadingProps) =>
    size ? theme.typography[size] : theme.typography['2xl']};
  ${StyledHeadingBase};
`
const StyledH6 = styled.h6`
  font-size: ${({ size }: HeadingProps) =>
    size ? theme.typography[size] : theme.typography.xl};
  ${StyledHeadingBase};
`

// heading sizes
export type TextSize =
  | 'xs'
  | 'md'
  | 'sm'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'

export type TextAlign = 'center' | 'left' | 'right'

// Types for Heading
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * set level of the heading
   */
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * specifies a new fontsize for the heading. It overrides the level prop
   */
  size?: TextSize

  /**
   * the trim function takes an integer and trims the heading to the specified length
   */

  trim?: number

  /**
   * aligns the text to the left, right or center
   */
  align?: TextAlign
}

Heading.displayName = 'Heading'
