import React, { FC, HTMLAttributes, InputHTMLAttributes } from 'react'

const Radio: FC<RadioProps> = ({ children, ...props }) => {
  const _className = props.className
    ? `avocado-radio ${props.className}`
    : `avocado-radio`
  return (
    <label className={_className}>
      <input {...props} type='radio' className='avocado-radio__control' />
      <span>{children}</span>
    </label>
  )
}

export const RadioGroup: FC<RadioGroupProps> = ({ children }) => {
  return <span className='avocado-radio'>{children}</span>
}

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
}
interface RadioGroupProps extends HTMLAttributes<HTMLSpanElement> {
  value: any
  defaultValue: string
}

Radio.displayName = 'Radio'
export { Radio }
