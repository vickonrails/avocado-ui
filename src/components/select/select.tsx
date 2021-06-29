import React, { FC, SelectHTMLAttributes } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Variant } from '../input'
import { theme } from '../theme'
import { getBorderRadius } from '../../utils/input'
import { selectTheme } from '../theme/components/select.theme'
import { Shape } from '../../utils/types'

const Select: FC<Select> = ({
  className,
  options,
  fullWidth,
  labelText,
  borderRadius,
  prefixIcon,
  suffixIcon,
  selectSize,
  ...props
}) => {
  const _className = className
    ? `avocado-select__control avocado-select__props.variant} ${className}`
    : `avocado-select__control avocado-select__${props.variant}`

  if (props.variant === 'unstyled')
    return <select {...props} className={_className} />

  // wrap the input in a label if labelText is provided
  if (labelText)
    return (
      <StyledSelect
        options={options}
        className='avocado-select'
        selectSize={selectSize}
        borderRadius={borderRadius}
        fullWidth={fullWidth}
        prefixIcon={prefixIcon}
        suffixIcon={suffixIcon}
      >
        <label className='avocado-select__label'>
          <span className='avocado-select__labeltext'>{labelText}</span>
          <select className={_className} {...props}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.displayText}
              </option>
            ))}
          </select>
        </label>
      </StyledSelect>
    )

  return (
    <StyledSelect
      className='avocado-select'
      options={options}
      selectSize={selectSize}
      borderRadius={borderRadius}
      fullWidth={fullWidth}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
    >
      <select className={_className} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.displayText}
          </option>
        ))}
      </select>
    </StyledSelect>
  )
}

export type ISelectOptions = { value: string; displayText: string }
type SelectSize = 'sm' | 'md' | 'lg'

// React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

interface Select extends SelectHTMLAttributes<HTMLSelectElement> {
  // determines the variant of the button. Can be `fill`, `outline` or unstyled
  variant?: Variant

  // when set to `true`, the select spans the entire width of the container
  fullWidth?: boolean

  // when set to true, select is inactive
  disabled?: boolean

  // specifies an icon to render by the left of the select
  prefixIcon?: React.ReactNode

  // specifies an icon to render by the right of the select
  suffixIcon?: React.ReactNode

  // size of the select. Could be `lg`, `md` or `sm`
  selectSize?: SelectSize

  // shape of the border. Could be `curve`, `round` or `square`
  // FIXME: Change prop to shape
  borderRadius?: Shape

  // specifies the items to render as options of the select
  options: ISelectOptions[]

  /**
   * labelText - text to show at the top of Select
   */
  labelText?: string
}

const StyledBaseSelect = ({
  selectSize,
  disabled,
  borderRadius,
  fullWidth
}: Select) => css`
  width: ${fullWidth ? '100%' : 'auto'};

  .avocado-select__labeltext {
    user-select: none;
    margin-bottom: 0.3em;
    display: inline-block;
  }
  .avocado-select__label {
    display: block;
    max-width: ${!fullWidth && `18em`};
  }
  .avocado-select__control {
    display: block;
    width: 100%;
    border: 1px solid ${theme.colors.gray[5]};
    font: inherit;
    font-size: ${selectSize === 'sm' ? '87%' : 'inherit'};
    padding: ${selectSize && selectTheme.size[selectSize].verticalPadding}
      ${selectSize && selectTheme.size[selectSize].horizontalPadding};

    transition: border-color, background;
    transition-duration: 0.25s;
    border-radius: ${borderRadius && getBorderRadius(borderRadius)};

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
`

const StyledFilledSelect = ({ variant, disabled }: Select) =>
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

const StyledSelect = styled.span`
  ${StyledBaseSelect}
  ${StyledFilledSelect}
`

Select.defaultProps = {
  borderRadius: 'round',
  selectSize: 'md',
  variant: 'outline'
}

Select.displayName = 'Select'
export { Select }
