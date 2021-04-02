import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Button: React.FC<ButtonProps> = ({ loading, shape, type, ...props }) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

type Type = 'submit' | 'button' | 'reset'
type Size = 'sm' | 'md' | 'lg'
type Shape = 'round' | 'border' | 'square'
type Variant = 'primary' | 'secondary' | 'warning' | 'error' | 'link' | 'ghost'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * default type of button. Can be submit, button, reset
   */
  type?: Type
  /**
   *  size of button. Can be sm, lg, md
   */
  size?: Size
  /**
   * shape of the button. can be round, border, square
   */
  shape?: Shape
  /**
   * trim text on button if more than specified length
   */
  trim?: number
  /**
   * variant of button. Can be primary, seconary, warning, error, link, ghost
   */
  variant?: Variant

  /**
   * loading state of button. When set to true, loading spinner is shown
   */
  loading?: boolean
  // FIXME: use appropriate types for prefix & suffix
  /**
   * prefix. Show element to the left of the button
   */
  prefix?: string

  /**
   * prefix. Show element to the right of the button
   */
  suffix?: string
}

/**
 * style for base button
 */
const BaseButtonStyles = css`
  padding: 0.43em 0.5em;
  font: inherit;
  cursor: pointer;
`

const ButtonSizeSmall = ({ size }: ButtonProps) => css`
  padding: ${size === 'lg' ? `2em` : `1em`};
`

const StyledButton = styled.button<ButtonProps>`
  ${BaseButtonStyles};
  ${ButtonSizeSmall}
`

Button.defaultProps = {
  type: 'submit',
  size: 'md',
  shape: 'border',
  variant: 'secondary',
  loading: false
}

export { Button }
