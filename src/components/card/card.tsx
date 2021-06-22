import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const getCardWidth = ({
  fullWidth,
  width
}: Pick<CardProps, 'fullWidth' | 'width'>) => {
  if (fullWidth) return `100%`

  if (!width) return `auto`

  switch (typeof width) {
    case 'string':
      return `${width}`
    case 'number':
      return `${width}px`
    default:
      throw new Error('Please pass in a valid width')
  }
}

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

  ${PaddingStyle};
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
   *
   */
  width?: string | number
}

Card.defaultProps = {
  fullWidth: false
}

export { Card }
