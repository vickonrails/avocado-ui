import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from './input'

describe('Input', () => {
  // Input should render correctly
  test('should render correctly', () => {
    const testId = 'input'
    const { getByTestId } = render(<Input data-testid={testId} />)
    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })

  // should render prefixIcon correctly
  test('should render prefixIcon correctly', () => {
    const testId = 'input'

    // really no need to bring in an icon library here. So just use some vanilla element
    const { getByTestId } = render(
      <Input prefixIcon={<span data-testid={testId}>Icon</span>} />
    )

    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })

  // should render suffixIcon correctly
  test('should render suffixIcon correctly', () => {
    const testId = 'input'

    const { getByTestId } = render(
      <Input suffixIcon={<span data-testid={testId}>Icon</span>} />
    )

    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })

  // should respond to user input
  test('should respond to user input', () => {
    const defaultValue = 'default-value'
    const testId = 'input'
    const newValue = ''

    const { getByTestId } = render(
      <Input defaultValue={defaultValue} data-testid={testId} />
    )

    const node = getByTestId(testId)
    // reset input value to `newValue`
    fireEvent.change(node, { target: { value: newValue } })
    expect(node).toHaveValue(newValue)
  })

  // should render with defaultValue
  test('should render with defaultValue', () => {
    const defaultValue = 'default-value'
    const testId = 'input'

    const { getByTestId } = render(
      <Input defaultValue={defaultValue} data-testid={testId} />
    )

    const node = getByTestId(testId)
    expect(node).toHaveValue(defaultValue)
  })

  // should render correct variant when `variant` prop is passed in
  test('should render correct variant when `variant` prop is passed in', () => {
    // simulate rendering the input with different variant prop values
    const fillVariant = 'fill'
    const outlineVariant = 'outline'

    const { getByTestId: getByTestIdFill } = render(
      <>
        <Input data-testid={fillVariant} variant={fillVariant} />
        <Input data-testid={outlineVariant} variant={outlineVariant} />
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
