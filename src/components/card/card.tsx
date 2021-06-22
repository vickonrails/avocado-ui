import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { getCardWidth } from '../../utils/card'

const Card: FC<CardProps> = ({ children, className, ...props }) => {
  const _className = className ? `${className} avocado-card` : `avocado-card`

  return (
    <StyledCard className={_className} {...props}>
      {children}
    </StyledCard>
  )
}

// figure out correct padding style
const PaddingStyle = ({ pb, p, pl, pr, pt }: CardProps) => css`
  padding-top: ${pt && `${pt}px`};
  padding-bottom: ${pb && `${pb}px`};
  padding-left: ${pl && `${pl}px`};
  padding-right: ${pr && `${pr}px`};
  padding: ${p && `${p}px`};
`

const StyledCard = styled.article<CardProps>`
  border: 1px solid red;
  width: auto;
  display: inline-block;

  // fullWidth should override the normal width prop

  width: ${({ fullWidth, width }) => getCardWidth({ fullWidth, width })};

  // padding styles
  ${PaddingStyle};

  background-color: ${({ bgColor }) => bgColor};

  border-radius: ${({ br }) => br && `${br}px`};

  box-shadow: ${({ showShadow }) => showShadow && `0 0 6px 3px #F2F2F2`};
`

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * padding right - sets the right padding of the card
   */
  pr?: number

  /**
   * padding left - sets the left padding of the card
   */
  pl?: number

  /**
   * padding top - sets the top padding of the card
   */
  pt?: number

  /**
   * padding bottom - sets the bottom padding of the card
   */
  pb?: number

  /**
   * padding - sets the padding of the card
   */
  p?: number

  /**
   * fullWidth - Card spans entire horizontal space if set to true
   */
  fullWidth?: boolean

  /**
   * width - set width of Card component
   */
  width?: string | number

  /**
   * bgColor: set background color of Card
   */
  bgColor?: string

  /**
   * br - Set border radius of the Card
   */
  br?: number

  /**
   * showShadow - when set to `true`, shows shadow in Card component
   */
  showShadow?: boolean
}

Card.defaultProps = {
  fullWidth: false,
  bgColor: `#fff`
}

export { Card }
