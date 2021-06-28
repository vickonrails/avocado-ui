import React, { AnchorHTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'

import { AvocadoThemeProps } from '../../utils/types'
import { ThemeProps } from '../theme'

// import { getButtonShape } from '../../utils/button'

const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  const _className = className ? `avocado-link ${className}` : `avocado-link`
  const avocadoTheme = useTheme() as ThemeProps

  console.log(avocadoTheme)

  return (
    <StyledLink className={_className} {...props} theme={avocadoTheme}>
      {children}
    </StyledLink>
  )
}

type LinkType = 'btnSolid' | 'default' | 'btnGhost' | 'btnOutline'
type LinkShape = 'round' | 'square' | 'curve'
type LinkSize = 'sm' | 'md' | 'lg'
export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    AvocadoThemeProps {
  /**
   * default type of link. Can be submit, link, reset
   */

  linkType?: LinkType
  /**
   *  size of link. Can be sm, lg, md
   */
  size?: LinkSize
  /**
   * shape of the link. can be round, border, square
   */
  shape?: LinkShape

  /**
   * prefix. Show element to the left of the link
   */
  prefixIcon?: React.ReactNode
  /**
   * prefix. Show element to the right of the link
   */
  suffixIcon?: React.ReactNode
}

const BaseLink = ({ shape, theme }: LinkProps) =>
  shape &&
  css`
    color: ${theme?.colors.black};
  `

const StyledLink = styled.a`
  ${BaseLink}
`

Link.defaultProps = {
  shape: 'curve'
}

export { Link }
