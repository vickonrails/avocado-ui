import React, { FC, HTMLAttributes } from 'react'

const Select: FC<Select> = ({ selectOptions, ...props }) => {
  return (
    <select {...props}>
      {selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.displayText}
        </option>
      ))}
    </select>
  )
}

export type ISelectOptions = { value: string; displayText: string }

interface Select extends HTMLAttributes<HTMLSelectElement> {
  selectOptions: ISelectOptions[]
}

export { Select }
