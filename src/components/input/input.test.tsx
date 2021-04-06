import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Input } from './input'

describe('Input', () => {
  test('should render correctly', () => {
    const testId = 'input'
    const { getByTestId } = render(<Input data-testid={testId} />)
    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })

  test('should render prefixIcon correctly', () => {
    const testId = 'input'

    // really no need to bring in an icon library here. So just use some vanilla element
    const { getByTestId } = render(
      <Input prefixIcon={<span data-testid={testId}>Icon</span>} />
    )

    const node = getByTestId(testId)
    console.log(node)
    expect(node).toBeInTheDocument()
  })
  test('should render suffixIcon correctly', () => false)
  test('should respond to user input', () => false)
  test('should render with defaultValue', () => false)
  test('should render correct variant when `variant` prop is passed in', () =>
    false)
  test('should render correct size', () => false)
  test('should render correct borderRadius', () => false)
})
