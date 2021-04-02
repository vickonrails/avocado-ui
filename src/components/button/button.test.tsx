import React from 'react'
import { Button } from './button'
import { render } from '@testing-library/react'

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
  test('should render a spinner when `loading` is set to `true`', () => false)
  test('should not be clickable when button is loading', () => false)
  test('should render a link when `type` is set to link', () => false)
  test('should not render as link when href is undefined', () => false)
  test('should render correct variant', () => false)
})
