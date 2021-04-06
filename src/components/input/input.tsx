import React, { FC, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '../theme'
import { Size } from '../button'
import { getBorderRadius } from '../../utils/input'
import InputIcon from './input-icon'

const { inputTheme } = theme.components

const Input: FC<Input> = ({ prefixIcon, suffixIcon, ...props }) => {
  if (props.variant === 'unstyled') return <input {...props} />
  const _className = props.className
    ? `${props.className} avocado-input__control`
    : `avocado-input__control`

  return (
    <span className='avocado-input'>
      {prefixIcon && <InputIcon>{prefixIcon}</InputIcon>}
      <StyledInput {...props} className={_className} />
      {suffixIcon && <InputIcon>{suffixIcon}</InputIcon>}
    </span>
  )
}

type Variant = 'fill' | 'outline' | 'unstyled'
export type BorderRadius = 'curve' | 'square' | 'round'

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

const StyledBaseInput = ({
  disabled,
  inputSize,
  borderRadius,
  fullWidth
}: Input) => css`
  border: 1px solid ${theme.colors.gray[5]};
  font: inherit;
  font-size: ${inputSize === 'sm' && '14px'};
  padding: ${inputSize && inputTheme.size[inputSize].verticalPadding}
    ${inputSize && inputTheme.size[inputSize].horizontalPadding};
  transition: border-color, background;
  transition-duration: 0.25s;
  border-radius: ${borderRadius && getBorderRadius(borderRadius)};
  width: ${fullWidth ? '100%' : 'auto'};

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
    user-select: none;
  }

  .avocado-input__icon {
    display: none;
  }
`

const StyledFilledInput = ({ variant, disabled }: Input) =>
  variant === 'fill' &&
  css`
    border: none;
    background: ${theme.colors.gray[4]};
    border: 1px solid transparent;

    &:hover {
      border: none;
      border: ${!disabled && `1px solid ${theme.colors.gray[5]}`};
    }

    &:active,
    &:focus {
      background: ${!disabled && `inherit`};
    }
  `

const StyledOutlineInput = ({ variant }: Input) =>
  variant === 'outline' && css``

const StyledInput = styled.input<Input>`
  ${StyledBaseInput};
  ${StyledFilledInput};
  ${StyledOutlineInput};
`

Input.defaultProps = {
  variant: 'outline',
  inputSize: 'md',
  borderRadius: 'curve'
}

export { Input }
