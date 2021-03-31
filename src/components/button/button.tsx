import React from 'react'
import styled from '@emotion/styled'

const Button: React.FC<Button> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

type ButtonType = 'submit' | 'button' | 'reset'
interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
}

const StyledButton = styled.button``

Button.defaultProps = {
  type: 'submit'
}

export { Button }
