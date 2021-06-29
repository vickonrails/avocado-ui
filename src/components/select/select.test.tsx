import React from 'react'
import { fireEvent, render } from '../../utils/test-utils'
import '@testing-library/jest-dom'
import { User } from 'react-feather'

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

  // should render suffixIcon correctly
  test('should render suffixIcon && prefixIcon correctly', () => {
    const testIdPrefix = 'select-prefix'
    const testIdSuffix = 'select-suffix'

    const { getByTestId } = render(
      <>
        <Select options={[]} prefixIcon={<User data-testid={testIdPrefix} />} />
        <Select options={[]} suffixIcon={<User data-testid={testIdSuffix} />} />
      </>
    )

    expect(getByTestId(testIdPrefix)).toBeInTheDocument()
    expect(getByTestId(testIdSuffix)).toBeInTheDocument()
  })

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

  // should render correct variant when `variant` prop is passed in
  test('should render correct variant when `variant` prop is passed in', () => {
    // simulate rendering the input with different variant prop values
    const fillVariant = 'avocado-select__fill'
    const outlineVariant = 'avocado-select__outline'

    const { getByTestId: getByTestIdFill } = render(
      <>
        <Select data-testid={fillVariant} options={options} variant='fill' />
        <Select
          data-testid={outlineVariant}
          options={options}
          variant='outline'
        />
      </>
    )

    // expect the rendered input to have the variant className
    expect(getByTestIdFill(fillVariant).className).toContain(fillVariant)
    expect(getByTestIdFill(outlineVariant).className).toContain(outlineVariant)
  })

  // Don't know how to test these usecases without bringing in implementation details
  // Ideally, I wouldn't want to use something liks classNames to ensure the implementations are correct
  test('should render correct size', () => {
    const testIdsm = `select-sm`
    const testIdmd = `select-md`
    const testIdlg = `select-lg`

    const { getByTestId } = render(
      <>
        <Select options={[]} data-testid={testIdsm} selectSize='sm' />
        <Select options={[]} data-testid={testIdmd} selectSize='md' />
        <Select options={[]} data-testid={testIdlg} selectSize='lg' />
      </>
    )

    expect(getByTestId(testIdsm)).toHaveStyle(`font-size:87%`)
    expect(getByTestId(testIdmd)).toHaveStyle(`font-size:inherit`)
    expect(getByTestId(testIdlg)).toHaveStyle(`font-size:inherit`)
  })

  test('should render correct borderRadius', () => {
    const testIdSquare = `select-square`
    const testIdCurve = `select-curve`
    const testIdRound = `select-round`

    const { getByTestId } = render(
      <>
        <Select borderRadius='square' options={[]} data-testid={testIdSquare} />
        <Select borderRadius='curve' options={[]} data-testid={testIdCurve} />
        <Select borderRadius='round' options={[]} data-testid={testIdRound} />
      </>
    )

    expect(getByTestId(testIdSquare)).toHaveStyle(`border-radius:0px`)
    expect(getByTestId(testIdCurve)).toHaveStyle(`border-radius:4px`)
    expect(getByTestId(testIdRound)).toHaveStyle(`border-radius:10000px`)
  })
})
