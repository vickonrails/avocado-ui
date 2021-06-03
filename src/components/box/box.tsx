import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

// TODO: I would really love to pass in a component prop
// that'll determine the exact component that is rendered by the Box prop
// I don't reall know how to do that now, so I'm sticking with a regular div element
const Box: FC<BoxProps> = ({ children, className, ...props }) => {
  const _className = className ? `avocado-box ${className}` : `avocado-box`

  return (
    <StyledDiv {...props} className={_className}>
      {children}
    </StyledDiv>
  )
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * mt - sets the top margin
   */
  mt?: number
  /**
   * mt - sets the bottom margin
   */
  mb?: number
  /**
   * mt - sets the right margin
   */
  mr?: number

  /**
   * mt - sets the left margin
   */
  ml?: number

  /**
   * mt - sets the horizontal margin
   */
  mh?: number

  /**
   * mt - sets the vertical margin
   */
  mv?: number

  /**
   * mt - sets the margin on all sides
   */
  m?: number

  /**
   * mt - sets the top padding
   */
  pt?: number

  /**
   * mt - sets the bottom padding
   */
  pb?: number

  /**
   * mt - sets the right padding
   */
  pr?: number

  /**
   * mt - sets the left padding
   */
  pl?: number

  /**
   * mt - sets the horizontal padding
   */
  ph?: number

  /**
   * mt - sets the vertical padding
   */
  pv?: number

  /**
   * mt - sets the padding for all sides
   */
  p?: number

  /**
   * block - specifies if Box should span full width
   */
  block?: boolean
}

const StyledBoxCSS = ({
  mt, // margin top
  ml, // margin left
  mr, // margin right
  mb, // margin bottom
  mh, // horizontal margin
  mv, // vertical margin
  m, // margin
  pt, // padding top
  pl, // padding left
  pr, // padding right
  pb, // padding bottom
  p, // padding
  ph, // horizontal padding
  pv, // vertical padding
  block
}: BoxProps) => css`
  box-sizing: border-box;

  margin: ${m && `${m}em`};
  margin-top: ${mh && `${mh}em`};
  margin-bottom: ${mh && `${mh}em`};

  margin-right: ${mv && `${mv}em`};
  margin-left: ${mv && `${mv}em`};

  margin-top: ${mt && `${mt}em`};
  margin-bottom: ${mb && `${mb}em`};
  margin-right: ${mr && `${mr}em`};
  margin-left: ${ml && `${ml}em`};

  // Padding styles
  padding: ${p && `${p}em`};
  padding-top: ${ph && `${ph}em`};
  padding-bottom: ${ph && `${ph}em`};

  padding-right: ${pv && `${pv}em`};
  padding-left: ${pv && `${pv}em`};

  padding-top: ${pt && `${pt}em`};
  padding-bottom: ${pb && `${pb}em`};
  padding-right: ${pr && `${pr}em`};
  padding-left: ${pl && `${pl}em`};

  width: ${block ? `100%` : `auto`};
  display: ${block ? `block` : `inline-block`};
`

const StyledDiv = styled.div<BoxProps>`
  ${StyledBoxCSS}
`

Box.defaultProps = {
  block: false
}

export { Box }
