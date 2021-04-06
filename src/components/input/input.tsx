import React, { FC, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '../theme'
import { Size } from '../button'
import { getBorderRadius, getInputIconSize } from '../../utils/input'
import InputIcon from './input-icon'

const { inputTheme } = theme.components

const Input: FC<Input> = ({
  prefixIcon,
  suffixIcon,
  borderRadius,
  inputSize,
  variant,
  fullWidth,
  ...props
}) => {
  if (variant === 'unstyled') return <input {...props} />
  const _className = props.className
    ? `${props.className} avocado-input__control`
    : `avocado-input__control`

  return (
    <StyledInput
      className='avocado-input'
      variant={variant}
      inputSize={inputSize}
      borderRadius={borderRadius}
      fullWidth={fullWidth}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
    >
      {prefixIcon && <InputIcon className='left'>{prefixIcon}</InputIcon>}
      <input className={_className} {...props} />
      {suffixIcon && <InputIcon className='right'>{suffixIcon}</InputIcon>}
    </StyledInput>
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
  suffixIcon?: JSX.Element
  /**
   * renders a react node to the left of the input element
   */
  prefixIcon?: JSX.Element
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
  prefixIcon,
  fullWidth,
  suffixIcon
}: Input) => css`
  position: relative;
  display: inline-flex;
  align-items: center;

  .avocado-input__control {
    border: 1px solid ${theme.colors.gray[5]};
    font: inherit;
    font-size: ${inputSize === 'sm' && '14px'};
    padding: ${inputSize && inputTheme.size[inputSize].verticalPadding}
      ${inputSize && inputTheme.size[inputSize].horizontalPadding};

    padding-left: ${prefixIcon && inputSize === 'sm'
      ? theme.spacing['3x-large']
      : theme.spacing['3.3x-large']};
    padding-right: ${suffixIcon && inputSize === 'sm'
      ? theme.spacing['3x-large']
      : theme.spacing['3.3x-large']};

    transition: border-color, background;
    transition-duration: 0.25s;
    border-radius: ${borderRadius && getBorderRadius(borderRadius)};
    width: ${fullWidth ? '100%' : 'auto'};

    transition-timing-function: ease-out;

    :hover {
      border: ${!disabled && `1px solid ${theme.colors.blue[500]}`};
    }

    :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.colors.blue[200]};
    }

    :disabled {
      cursor: not-allowed;
      background: ${theme.colors.gray[3]};
      border: none;
      user-select: none;
    }
  }

  .avocado-input__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;

    width: ${inputSize && getInputIconSize(inputSize)};
    height: ${inputSize && getInputIconSize(inputSize)};

    pointer-events: none;
    color: ${theme.colors.gray[6]};
    > * {
      margin: auto;
    }
    font-size: 0.875em;
  }
  .avocado-input__icon.left {
    left: 0;
    padding-left: 0.5em;
  }
  .avocado-input__icon.right {
    right: 0;
    padding-right: 0.5em;
  }

  svg {
    height: 100%;
    width: 100%;
    margin: auto;
  }
`

const StyledFilledInput = ({ variant, disabled }: Input) =>
  variant === 'fill' &&
  css`
    .avocado-input__control {
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
    }
  `

const StyledOutlineInput = ({ variant }: Input) =>
  variant === 'outline' && css``

const StyledInput = styled.span<Input>`
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
