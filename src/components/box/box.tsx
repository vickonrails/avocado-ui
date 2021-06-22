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

  margin: ${m && `${m}px`};
  margin-top: ${mh && `${mh}px`};
  margin-bottom: ${mh && `${mh}px`};

  margin-right: ${mv && `${mv}px`};
  margin-left: ${mv && `${mv}px`};

  margin-top: ${mt && `${mt}px`};
  margin-bottom: ${mb && `${mb}px`};
  margin-right: ${mr && `${mr}px`};
  margin-left: ${ml && `${ml}px`};

  // Padding styles
  padding: ${p && `${p}px`};
  padding-top: ${ph && `${ph}px`};
  padding-bottom: ${ph && `${ph}px`};

  padding-right: ${pv && `${pv}px`};
  padding-left: ${pv && `${pv}px`};

  padding-top: ${pt && `${pt}px`};
  padding-bottom: ${pb && `${pb}px`};
  padding-right: ${pr && `${pr}px`};
  padding-left: ${pl && `${pl}px`};

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
