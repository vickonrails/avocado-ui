import React from 'react'

const Button: React.FC<Button> = (props) => {
  return <button {...props}>{props.children}</button>
}

type ButtonType = 'submit' | 'button' | 'reset'
interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
}

Button.defaultProps = {
  type: 'submit'
}

export { Button }
