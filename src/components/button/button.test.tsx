import React from 'react'
import { Button } from './button'
import { render, fireEvent } from '@testing-library/react'

describe('Button', () => {
  test('should render correctly', () => {
    const testId = 'btn'
    const { getByTestId } = render(<Button data-testid={testId}>Test</Button>)
    const node = getByTestId(testId)

    expect(node).toBeDefined()
  })

  test('should render empty button without errors', () => {
    const testId = 'btn'
    const { getByTestId } = render(<Button data-testid={testId} />)
    const node = getByTestId(testId)
    expect(node).toBeDefined()
  })
  test('should render a prefixIcon', () => {
    // Maybe I could switch to an actual icon later. That would involve me bringing in some other icon library
    const testId = 'prefix'
    const prefixIcon = <p data-testid={testId}>Prefix Icon</p>
    const { getByTestId } = render(
      <Button prefixIcon={prefixIcon}>Something</Button>
    )
    const node = getByTestId(testId)
    expect(node).toBeDefined()
  })

  test('should render a sufixIcon', () => {
    // Maybe I could switch to an actual icon later. That would involve me bringing in some other icon library
    const testId = 'suffix'
    const prefixIcon = <p data-testid={testId}>Prefix Icon</p>
    const { getByTestId } = render(
      <Button suffixIcon={prefixIcon}>Something</Button>
    )
    const node = getByTestId(testId)
    expect(node).toBeDefined()
  })

  test('should render a spinner when `loading` is set to `true`', () => {})

  test('should not be clickable when button is loading', () => {
    let count = 0
    const testId = 'btn'
    const increment = () => count++
    const { getByTestId } = render(
      <Button data-testid={testId} loading onClick={() => increment()}>
        Increment
      </Button>
    )

    fireEvent.click(getByTestId(testId))
    expect(count).toEqual(0)
  })

  test('should not be clickable when button is disabled', () => {
    let count = 0
    const testId = 'btn'
    const increment = () => count++
    const { getByTestId } = render(
      <Button data-testid={testId} disabled onClick={() => increment()}>
        Increment
      </Button>
    )

    fireEvent.click(getByTestId(testId))
    expect(count).toEqual(0)
  })
  test('should render a link when `type` is set to link', () => false)
  test('should not render as link when href is undefined', () => false)
})
