import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

/**
 *  ButtonIcon - render Icon by left and right of button
 * @returns ReactNode
 */

const ButtonIcon: FC<ButtonIcon> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

interface ButtonIcon extends HTMLAttributes<HTMLSpanElement> {}
const StyledButton = styled.span`
  box-sizing: border-box;
`

export default ButtonIcon
