import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import { theme } from '../theme'
import { ButtonVariant } from '../button'

const spin = keyframes`
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
`
/**
 *
 * Spinner - show a spinning loading to the user
 *
 */

const Spinner: FC<SpinnerProps> = ({ variant, ...props }) => {
  const _className = props.className
    ? `avocado-spinner ${props.className}`
    : `avocado-spinner`

  if (!variant) throw Error('<Spinner/> requires a variant. please supply one')

  return <StyledSpinner {...props} variant={variant} className={_className} />
}

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ButtonVariant
  size?: SpinnerSize
}

type SpinnerSize = 'sm' | 'md' | 'lg'

const StyledSpinner = styled.span<SpinnerProps>`
  border: 3px solid #fff;
  border-radius: 50%;
  border-top: 3px solid
    ${(props) =>
      props.variant &&
      theme.components.buttonTheme.variants[props.variant].default};
  border-right: 3px solid
    ${(props) =>
      props.variant &&
      theme.components.buttonTheme.variants[props.variant].default};
  width: ${({ size }) => size && theme.components.spinnerTheme.sizes[size]};
  display: inline-block;
  height: ${({ size }) => size && theme.components.spinnerTheme.sizes[size]};
  animation: ${spin} 0.4s linear infinite;
  box-sizing: border-box;
`

Spinner.displayName = 'Spinner'
Spinner.defaultProps = {
  variant: 'primary',
  size: 'md'
}
export { Spinner }
