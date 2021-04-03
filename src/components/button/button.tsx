import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '../theme'
import {
  getButtonShape,
  getButtonTypeBackground,
  getButtonTypeBorder,
  getButtonTypeColor
} from '../../utils/button'

const Button: React.FC<ButtonProps> = ({ loading, disabled, ...props }) => {
  return (
    <StyledButton data-disabled={disabled} {...props}>
      {props.children}
    </StyledButton>
  )
}

export type Size = 'sm' | 'md' | 'lg'
export type ButtonShape = 'round' | 'curve' | 'square'
export type ButtonType = 'solid' | 'outline' | 'link' | 'ghost'
export type Variant = 'primary' | 'warning' | 'error' | 'success'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * default type of button. Can be submit, button, reset
   */

  buttonType?: ButtonType
  /**
   *  size of button. Can be sm, lg, md
   */
  size?: Size
  /**
   * shape of the button. can be round, border, square
   */
  shape?: ButtonShape
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
const BaseButton = css`
  padding: 0.43em 0.8em;
  font: inherit;
  cursor: pointer;
  border: none;
  border-radius: ${theme.borders.sm};
  color: inherit;
  user-select: none;
`

const ButtonSize = ({ size }: ButtonProps) =>
  size &&
  css`
    padding: ${`${theme.components.buttonTheme.size[size]} ${theme.components.buttonTheme.size[size]}`};
  `

const ButtonVariant = ({ variant, buttonType }: ButtonProps) =>
  variant &&
  css`
    color: ${theme.colors.white};
    background: ${theme.components.buttonTheme.variants[variant]};
    transition: background, transform, border, color;
    transition-duration: 0.2s;

    &:hover {
      background: inherit;
      border: ${buttonType !== 'link' &&
      `1px solid ${theme.components.buttonTheme.variants[variant]}`};
      color: ${theme.components.buttonTheme.variants[variant]};
    }

    &:active {
      background: ${theme.colors.gray[4]};
      color: ${theme.components.buttonTheme.variants[variant]};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px ${theme.colors.blue[100]};
      transform: translateY(-1px);
    }
  `

const ButtonType = ({ buttonType, variant }: ButtonProps) =>
  buttonType &&
  variant &&
  css`
    background: ${getButtonTypeBackground(buttonType, variant)};
    color: ${getButtonTypeColor(buttonType, variant)};
    border: ${getButtonTypeBorder(buttonType, variant)};
  `

const ButtonShape = ({ shape }: ButtonProps) =>
  shape &&
  css`
    border-radius: ${getButtonShape(shape)};
  `

const StyledButton = styled('button')<ButtonProps>`
  ${BaseButton};
  ${ButtonSize};
  ${ButtonVariant};
  ${ButtonType};
  ${ButtonShape};
`

Button.defaultProps = {
  size: 'md',
  shape: 'curve',
  buttonType: 'solid',
  variant: 'primary',
  loading: false
}

export { Button }
