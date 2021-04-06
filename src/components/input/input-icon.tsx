import React, { FC, HTMLAttributes } from 'react'

/**
 * Renders an Icon to the left/right of an input element
 */
const InputIcon: FC<InputIcon> = ({ ...props }) => {
  const _className = props.className
    ? `${props.className} + avocado-input__icon`
    : `avocado-input__icon`

  return <span {...props} className={_className} />
}

interface InputIcon extends HTMLAttributes<HTMLSpanElement> {}

export default InputIcon
