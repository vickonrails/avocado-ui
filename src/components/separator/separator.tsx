import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import colors from '../theme/colors'

const Separator: FC<SeparatorProps> = ({ className, ...props }) => {
  // append avocado className
  const _className = className
    ? `avocado-separator ${className}`
    : `avocado-separator`

  return <StyledHr {...props} className={_className} />
}

const CenteredCSS = ({ centered }: SeparatorProps) =>
  centered &&
  css`
    margin-left: auto;
    margin-right: auto;
  `

const StyledHr = styled.hr<SeparatorProps>`
  border: 0;
  margin: 0;
  box-sizing: border-box;
  height: 1.25px;
  width: ${({ width }) => width};
  background: ${({ color }) => color};
  margin-bottom: ${({ bottomSpacing }) => `${bottomSpacing}px`};
  margin-top: ${({ topSpacing }) => `${topSpacing}px`};
  max-width: 100%;

  ${CenteredCSS};
`

export interface SeparatorProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * color - color of the Separator line
   */
  color?: string

  /**
   * width - horizontal size of the Separator line
   */
  width?: string

  /**
   * align - set the horizontal position of the Separator line
   */
  centered?: boolean

  /**
   * bottomSpacing - space between Separator line and bottom components
   */
  bottomSpacing?: number

  /**
   * topSpacing - space between Separator line and top components
   */
  topSpacing?: number
}

Separator.defaultProps = {
  color: colors.gray[4],
  width: `100%`,
  topSpacing: 0,
  bottomSpacing: 16
}

export { Separator }
