import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { keyframes, useTheme } from '@emotion/react'

import { AvocadoThemeProps } from '../../utils/types'
import { ButtonVariant } from '../button'
import { ThemeProps } from '../theme'

const spin = keyframes`
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
`
/**
 *
 * Spinner - show a loading spinning to the user
 *
 */

const Spinner: FC<SpinnerProps> = ({ theme, ...props }) => {
  const _className = props.className
    ? `avocado-spinner ${props.className}`
    : `avocado-spinner`

  // bring in avocado theme
  const avocadoTheme = useTheme() as ThemeProps

  return (
    <StyledSpinner {...props} theme={avocadoTheme} className={_className} />
  )
}

// compose spinner props
export interface SpinnerProps
  extends HTMLAttributes<HTMLSpanElement>,
    AvocadoThemeProps {
  variant?: ButtonVariant
  size?: SpinnerSize
}

type SpinnerSize = 'sm' | 'md' | 'lg'

const StyledSpinner = styled.span<SpinnerProps>`
  border: 3px solid #fff;
  border-radius: 50%;
  border-top: 3px solid
    ${({ variant, theme }) =>
      variant && theme?.components.spinnerTheme.variants[variant]};
  border-right: 3px solid
    ${({ variant, theme }) =>
      variant && theme?.components.spinnerTheme.variants[variant]};
  width: ${({ size, theme }) =>
    size && theme?.components.spinnerTheme.sizes[size]};
  display: inline-block;
  height: ${({ size, theme }) =>
    size && theme?.components.spinnerTheme.sizes[size]};
  animation: ${spin} 0.4s linear infinite;
  box-sizing: border-box;
`

Spinner.displayName = 'Spinner'
Spinner.defaultProps = {
  variant: 'primary',
  size: 'md'
}

export { Spinner }
