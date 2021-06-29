import React from 'react'
import { fireEvent, render } from '../../utils/test-utils'
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

  test('should render correct size', () => {
    const testIdsm = `input-sm`
    const testIdmd = `input-md`
    const testIdlg = `input-lg`

    const { getByTestId } = render(
      <>
        <Input inputSize='sm' data-testid={testIdsm} />
        <Input inputSize='md' data-testid={testIdmd} />
        <Input inputSize='lg' data-testid={testIdlg} />
      </>
    )

    expect(getByTestId(testIdsm)).toHaveStyle(`font-size:87%`)
    expect(getByTestId(testIdmd)).toHaveStyle(`font-size:inherit`)
    expect(getByTestId(testIdlg)).toHaveStyle(`font-size:inherit`)
  })

  test('should render correct borderRadius', () => {
    const testIdSquare = `input-square`
    const testIdCurve = `input-curve`
    const testIdRound = `input-round`

    const { getByTestId } = render(
      <>
        <Input data-testid={testIdSquare} borderRadius='square' />
        <Input data-testid={testIdCurve} borderRadius='curve' />
        <Input data-testid={testIdRound} borderRadius='round' />
      </>
    )

    expect(getByTestId(testIdSquare)).toHaveStyle(`border-radius:0px`)
    expect(getByTestId(testIdCurve)).toHaveStyle(`border-radius:4px`)
    expect(getByTestId(testIdRound)).toHaveStyle(`border-radius:10000px`)
  })
})
