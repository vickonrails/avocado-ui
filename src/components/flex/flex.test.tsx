import React from 'react'
import { render } from '../../utils/test-utils'
import '@testing-library/jest-dom'
import { Flex, FlexItem } from './'

describe('Flex', () => {
  test('should render correctly', () => {
    const testId = 'flex'
    const { getByTestId } = render(
      <Flex data-testid={testId}>
        <p>Flex Item</p>
        <p>Flex Item</p>
      </Flex>
    )
    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })

  test('should render correctly with FlexItems', () => {
    const testId = 'flex-item'
    const { getByTestId } = render(
      <Flex>
        <FlexItem>Flex Item</FlexItem>
        <FlexItem data-testid={testId}>Flex Item</FlexItem>
      </Flex>
    )
    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })
})
