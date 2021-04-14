import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Theme } from '@theme-ui/css'

// import { Theme } from 'theme-ui'

// import { theme } from '../theme'

export const Heading: FC<HeadingProps> = ({ children, ...props }) => {
  const _className = props.className
    ? `avocado-heading ${props.className}`
    : `avocado-heading`

  switch (props.level) {
    case 'h1':
      return (
        <StyledH1 {...props} className={_className}>
          {children}
        </StyledH1>
      )

    case 'h2':
      return (
        <StyledH2 {...props} className={_className}>
          {children}
        </StyledH2>
      )
    case 'h3':
      return (
        <StyledH3 {...props} className={_className}>
          {children}
        </StyledH3>
      )
    case 'h4':
      return (
        <StyledH4 {...props} className={_className}>
          {children}
        </StyledH4>
      )
    case 'h5':
      return (
        <StyledH5 {...props} className={_className}>
          {children}
        </StyledH5>
      )
    case 'h6':
      return (
        <StyledH6 {...props} className={_className}>
          {children}
        </StyledH6>
      )

    default:
      throw new Error('Please pass a heading level')
  }
}

const StyledHeadingBase = css`
  margin-top: 0;
  margin-bottom: 0.5em;
  line-height: 1;
`

const StyledH1CSS = ({ theme }: StyledTheme) => css`
  font-size: ${theme?.fontSizes?.[6]}px;
`
const StyledH2CSS = ({ theme }: StyledTheme) => css`
  font-size: ${theme?.fontSizes?.[5]}px;
`
const StyledH3CSS = ({ theme }: StyledTheme) => css`
  font-size: ${theme?.fontSizes?.[4]}px;
`
const StyledH4CSS = ({ theme }: StyledTheme) => css`
  font-size: ${theme?.fontSizes?.[3]}px;
`
const StyledH5CSS = ({ theme }: StyledTheme) => css`
  font-size: ${theme?.fontSizes?.[2]}px;
`

const StyledH6CSS = ({ theme }: StyledTheme) => css`
  font-size: ${theme?.fontSizes?.[1]}px;
`

const StyledH1 = styled.h1`
  ${StyledHeadingBase}
  ${StyledH1CSS}
`
const StyledH2 = styled.h2`
  ${StyledHeadingBase}
  ${StyledH2CSS}
`
const StyledH3 = styled.h3`
  ${StyledHeadingBase}
  ${StyledH3CSS}
`
const StyledH4 = styled.h4`
  ${StyledHeadingBase}
  ${StyledH4CSS}
`
const StyledH5 = styled.h5`
  ${StyledHeadingBase}
  ${StyledH5CSS}
`
const StyledH6 = styled.h6`
  ${StyledHeadingBase}
  ${StyledH6CSS}
`

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type StyledTheme = HeadingProps & { theme?: Theme }

Heading.displayName = 'Heading'
