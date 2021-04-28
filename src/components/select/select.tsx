import React, { FC, SelectHTMLAttributes } from 'react'
import { css } from '@emotion/react'

import { Variant } from '../input'
import styled from '@emotion/styled'
import { theme } from '../theme'
import { getBorderRadius } from '../../utils/input'
import { selectTheme } from '../theme/components/select.theme'
import { Shape } from '../../utils/types'

const Select: FC<Select> = ({ className, options, ...props }) => {
  const _className = className
    ? `avocado-select avocado-select--${props.variant} ${className}`
    : `avocado-select avocado-select--${props.variant}`

  if (props.variant === 'unstyled')
    return <select {...props} className={_className} />
  return (
    <StyledSelect {...props} className={_className} options={options}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.displayText}
        </option>
      ))}
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
}

const StyledBaseSelect = ({
  selectSize,
  disabled,
  borderRadius,
  fullWidth
}: Select) => css`
  border: 1px solid ${theme.colors.gray[5]};
  font: inherit;
  font-size: ${selectSize === 'sm' && '14px'};
  padding: ${selectSize && selectTheme.size[selectSize].verticalPadding}
    ${selectSize && selectTheme.size[selectSize].horizontalPadding};

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

const StyledSelect = styled.select`
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
