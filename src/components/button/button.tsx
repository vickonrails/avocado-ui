import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import isValidProp from '@emotion/is-prop-valid'

import { theme } from '../theme'
import { getButtonShape, trimButtonText } from '../../utils/button'
import ButtonIcon from './button-icon'
import Spinner from '../spinner/spinner'
import { Shape } from '../../utils/types'

/**
 * Button - Renders a clickable item to the browser
 */
const Button: React.FC<ButtonProps> = ({
  buttonType,
  trim,
  prefixIcon,
  suffixIcon,
  disabled,
  loading,
  ...props
}) => {
  const _classNames = props.className
    ? `avocado-btn ${props.className}`
    : `avocado-btn`

  return (
    <StyledButton
      buttonType={buttonType}
      {...props}
      disabled={disabled || loading}
      loading={loading || undefined}
      className={_classNames}
    >
      {/* Show prefix icon if prefix icon is present and loading state is not true */}
      {prefixIcon && !loading && (
        <ButtonIcon className='btn-icon--left'>{prefixIcon}</ButtonIcon>
      )}
      {/* Render loading spinner */}
      {loading && buttonType !== 'link' && (
        <Spinner className='avocado-btn__spinner' variant={props.variant} />
      )}
      {/* Truncate text as user specifies from the button */}
      {typeof props.children === 'string' && trim
        ? trimButtonText(props.children, trim)
        : props.children}
      {/* Show suffix icon if suffix icon is present and loading state is not true */}
      {suffixIcon && !loading && (
        <ButtonIcon className='btn-icon--right'>{suffixIcon}</ButtonIcon>
      )}
    </StyledButton>
  )
}

export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonType = 'solid' | 'outline' | 'link' | 'ghost'
export type ButtonVariant = 'primary' | 'warning' | 'error' | 'success'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * default type of button. Can be submit, button, reset
   */

  buttonType?: ButtonType
  /**
   *  size of button. Can be sm, lg, md
   */
  size?: ButtonSize
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
  variant?: ButtonVariant
  /**
   * loading state of button. When set to true, loading spinner is shown
   */
  loading?: boolean
  /**
   * prefix. Show element to the left of the button
   */
  prefixIcon?: React.ReactNode
  /**
   * prefix. Show element to the right of the button
   */
  suffixIcon?: React.ReactNode
}

/**
 * style for base button
 */
const BaseButton = ({ shape, size, loading, disabled }: ButtonProps) =>
  shape &&
  css`
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
  user-select: none;

  border-radius: ${shape && getButtonShape(shape)};
  padding: ${`${size && theme.components.buttonTheme.size[size]} ${
    size && theme.components.buttonTheme.size[size]
  }`};

  opacity: ${loading && 0.4};

  display: inline-flex;
  align-items: center;

  .btn-icon--left,   
  .btn-icon--right {
    height: 15px;
    width: 15px;

    display: inline-flex;

    svg {
      height: 100%;
      width: 100%;
      margin: auto;
    }
  }

  .btn-icon--left {
    margin-right: .5em;
  }
  .btn-icon--right {
    margin-left: .5em;
  }

  .avocado-btn__spinner {
    margin-right: .5em;
  }

  :focus {
    outline: none;
    transform: none;
    box-shadow: 0 0 0 3px ${theme.colors.blue[100]};
  }

  :disabled,
  :disabled:hover {
    cursor: not-allowed;
    border: ${!loading && `1px solid ${theme.colors.gray[6]}`};
    color: ${!loading && theme.colors.gray[8]};
    background: ${!loading && theme.colors.gray[3]};
    transform: none;
    text-decoration: none;
   }

  :hover {
    transform: ${!loading && !disabled && `translateY(-1px)`}; 
  }

  :hover:active {
    transform: translateY(0px);
  }
  :active {
    background: ${theme.colors.gray[4]};
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

const StyledButton = styled('button', {
  shouldForwardProp: (prop) =>
    isValidProp(prop) && prop !== 'loading' && prop !== 'shape'
})<ButtonProps>`
  ${BaseButton}
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

Button.displayName = 'Button'
export { Button }
