import React, { FC, HTMLAttributes } from 'react'

/**
 *  ButtonIcon - render Icon by left and right of button
 * @param param0
 * @returns ReactNode
 */
const ButtonIcon: FC<ButtonIcon> = ({ children, ...props }) => {
  return <span {...props}>{children}</span>
}

interface ButtonIcon extends HTMLAttributes<HTMLSpanElement> {}

export default ButtonIcon
