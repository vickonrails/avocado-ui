import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '../theme'
import { getButtonShape, trimButtonText } from '../../utils/button'

const Button: React.FC<ButtonProps> = ({
  loading,
  buttonType,
  trim,
  ...props
}) => {
  return (
    <StyledButton buttonType={buttonType} {...props}>
      {typeof props.children === 'string' && trim
        ? trimButtonText(props.children, trim)
        : props.children}
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
const BaseButton = ({ shape, size }: ButtonProps) => css`
  padding: 0.5em 0.8em;
  font-size: ${size === 'sm' ? '14px' : `inherit`};
  cursor: pointer;
  border: none;  
  color: ${theme.colors.gray[8]};
  background: ${theme.colors.gray[4]}
  user-select: none;
  transition: background, color, transform;
  transition-duration: 0.15s;
  transition-timing-function: ease-out;

  border-radius: ${shape && getButtonShape(shape)};
  padding: ${`${size && theme.components.buttonTheme.size[size]} ${
    size && theme.components.buttonTheme.size[size]
  }`};


  :focus {
    outline: none;
    transform: none;
    box-shadow: 0 0 0 3px ${theme.colors.blue[100]};
  }

  :active {
    background: ${theme.colors.gray[4]}
  }

  :hover {
    transform: translateY(-1px); 
  } 
  :disabled,
  :disabled:hover {
    cursor: not-allowed;
    border: 1px solid ${theme.colors.gray[6]};
    color: ${theme.colors.gray[8]};
    background: ${theme.colors.gray[3]};
    transform: none;
    text-decoration: none;
  }
`
const StyledSolidButton = ({ buttonType, variant }: ButtonProps) =>
  buttonType === 'solid' &&
  css`
    background: ${variant &&
    theme.components.buttonTheme.variants[variant].default};
    color: ${theme.colors.white};

    &:hover {
      background: ${variant &&
      theme.components.buttonTheme.variants[variant].hover};
    }
  `

const StyledOutlineButton = ({ buttonType, variant }: ButtonProps) =>
  buttonType === 'outline' &&
  css`
    background: inherit;
    border: 1px solid
      ${variant && theme.components.buttonTheme.variants[variant].hover};
    color: ${variant && theme.components.buttonTheme.variants[variant].hover};
  `

const StyledGhostButton = ({ buttonType, variant }: ButtonProps) =>
  buttonType === 'ghost' &&
  css`
    background: inherit;
    border: 2px solid ${theme.colors.gray[3]};
    color: ${variant && theme.components.buttonTheme.variants[variant].hover};

    :hover {
      border-color: ${theme.colors.gray[4]};
    }
  `

const StyledLinkButton = ({ buttonType }: ButtonProps) =>
  buttonType === 'link' &&
  css`
    background: none;
    padding: 0;
    color: ${theme.colors.blue[400]};

    :hover {
      text-decoration: underline;
    }
    :active {
      text-decoration: none;
    }
  `

const StyledButton = styled('button')<ButtonProps>`
  ${BaseButton};
  ${StyledSolidButton}
  ${StyledOutlineButton}
  ${StyledGhostButton}
  ${StyledLinkButton}
`

Button.defaultProps = {
  size: 'md',
  shape: 'curve',
  buttonType: 'solid',
  variant: 'primary',
  loading: false
}

export { Button }
