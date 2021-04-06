import React, { FC, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '../theme'
import { Size } from '../button'

const Input: FC<Input> = ({ size, ...props }) => {
  return <StyledInput {...props} />
}

type Variant = 'fill' | 'outline' | 'unstyled'
type BorderRadius = 'curve' | 'square' | 'round'

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * set variant of input. Can be "filled", "unstyled", "outline"
   */
  variant?: Variant
  /**
   * set width of input. Input fills the entire block when set to `true`
   */
  fullWidth?: boolean
  /**
   * input is marked as required when set to `true`
   */
  required?: boolean
  /**
   * renders a react node to the right of the input element
   */
  suffixIcon?: React.ReactNode
  /**
   * renders a react node to the left of the input element
   */
  prefixIcon?: React.ReactNode
  /**
   * setting to `true` makes the input inactive
   */
  disabled?: boolean
  /**
   * set the size of the input. Can be "sm", "md", "lg"
   */
  inputSize?: Size
  borderRadius?: BorderRadius
}

const StyledBaseInput = ({ disabled }: Input) => css`
  border: 1px solid ${theme.colors.gray[5]};
  font: inherit;
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  transition: border-color;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;

  &:hover {
    border: ${!disabled && `1px solid ${theme.colors.blue[500]}`};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.blue[200]};
  }

  :disabled {
    cursor: not-allowed;
    background: ${theme.colors.gray[3]};
    border: none;
  }
`

const StyledOutlineInput = ({ variant }: Input) =>
  variant === 'outline' && css``

const StyledInput = styled.input<Input>`
  ${StyledBaseInput}
  ${StyledOutlineInput}
`

Input.defaultProps = {
  variant: 'outline',
  inputSize: 'md',
  borderRadius: 'curve'
}

export { Input }
