import React from 'react'
import { fireEvent, render } from '../../utils/test-utils'
import '@testing-library/jest-dom'
import { Select } from './select'

const options = [
  { value: 'male', displayText: 'Male' },
  { value: 'female', displayText: 'Female' }
]
describe('Select', () => {
  // Input should render correctly
  test('should render correctly', () => {
    const testId = 'input'
    const { getByTestId } = render(
      <Select data-testid={testId} options={options} />
    )
    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })

  // should render prefixIcon correctly
  test('should render prefixIcon correctly', () => {
    const testId = 'select'

    // really no need to bring in an icon library here. So just use some vanilla element
    const { getByTestId } = render(
      <Select data-testid={testId} options={options} />
    )

    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })

  // should render suffixIcon correctly
  test('should render suffixIcon correctly', () => false)

  // should respond to user input
  test('should respond to user input', () => {
    // const defaultValue = 'default-value'
    const testId = 'select'
    const newValue = 'female'

    const { getByTestId } = render(
      <Select data-testid={testId} options={options} />
    )

    const node = getByTestId(testId)
    // reset input value to `newValue`
    fireEvent.change(node, { target: { value: newValue } })
    expect(node).toHaveValue(newValue)
  })

  // should render with defaultValue
  test('should render with defaultValue', () => false)

  // should render correct variant when `variant` prop is passed in
  test('should render correct variant when `variant` prop is passed in', () => {
    // simulate rendering the input with different variant prop values
    const fillVariant = 'fill'
    const outlineVariant = 'outline'

    const { getByTestId: getByTestIdFill } = render(
      <>
        <Select data-testid={fillVariant} options={options} />
        <Select data-testid={outlineVariant} options={options} />
      </>
    )

    // expect the rendered input to have the variant className
    expect(getByTestIdFill(fillVariant).className).toContain(fillVariant)
    expect(getByTestIdFill(outlineVariant).className).toContain(outlineVariant)
  })

  // Don't know how to test these usecases without bringing in implementation details
  // Ideally, I wouldn't want to use something liks classNames to ensure the implementations are correct
  test('should render correct size', () => false)
  test('should render correct borderRadius', () => false)
})
