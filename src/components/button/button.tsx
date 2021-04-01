import React from 'react'
import styled from '@emotion/styled'

const Button: React.FC<Button> = ({ loading, shape, type, ...props }) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

type Type = 'submit' | 'button' | 'reset'
type Size = 'sm' | 'md' | 'lg'
type Shape = 'round' | 'border' | 'square'
type Variant = 'primary' | 'secondary' | 'warning' | 'error' | 'link' | 'ghost'
interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  type?: Type
  size?: Size
  shape?: Shape
  trim?: number
  variant?: Variant
  loading?: boolean
  // FIXME: use appropriate types for prefix & suffix
  prefix?: string
  suffix?: string
}

const StyledButton = styled.button``

Button.defaultProps = {
  type: 'submit',
  size: 'md',
  shape: 'border',
  variant: 'secondary',
  loading: false
}

export { Button }
