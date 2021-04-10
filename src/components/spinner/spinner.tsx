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

const Spinner: FC<Spinner> = ({ variant, ...props }) => {
  const _className = props.className
    ? `avocado-spinner ${props.className}`
    : `avocado-spinner`
  return <StyledSpinner {...props} variant={variant} className={_className} />
}

interface Spinner extends HTMLAttributes<HTMLSpanElement> {
  variant?: ButtonVariant
}

const StyledSpinner = styled.span<Spinner>`
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
  width: 12px;
  height: 12px;
  animation: ${spin} 0.4s linear infinite;
`

Spinner.displayName = 'Spinner'
export default Spinner
