import React from 'react'
import '@testing-library/jest-dom'

import { render } from '../../utils/test-utils'
import { Card } from './card'

describe('Card', () => {
  // Test that Card component renders correctly
  test('renders correctly', () => {
    const testId = `card`

    const { getByTestId } = render(<Card data-testid={testId} />)

    expect(getByTestId(testId)).toBeInTheDocument()
  })

  // Test that the padding props works on the Card component
  test('receives padding props correctly', () => {
    const padding = `padding`
    const paddingTop = `padding-top`
    const paddingRight = `padding-right`
    const paddingBottom = `padding-bottom`
    const paddingLeft = `padding-left`

    const { getByTestId } = render(
      <>
        <Card data-testid={padding} p={3}>
          Card Component
        </Card>
        <Card data-testid={paddingTop} pt={5}>
          Card Component
        </Card>
        <Card data-testid={paddingRight} pr={13}>
          Card Component
        </Card>
        <Card data-testid={paddingBottom} pb={12}>
          Card Component
        </Card>
        <Card data-testid={paddingLeft} pl={11}>
          Card Component
        </Card>
      </>
    )

    expect(getByTestId(padding)).toHaveStyle(`padding:3px`)
    expect(getByTestId(paddingTop)).toHaveStyle(`padding-top:5px`)
    expect(getByTestId(paddingRight)).toHaveStyle(`padding-right:13px`)
    expect(getByTestId(paddingBottom)).toHaveStyle(`padding-bottom:12px`)
    expect(getByTestId(paddingLeft)).toHaveStyle(`padding-left:11px`)
  })

  // Test that fullWidth sets Card to full width
  test('fullWidth prop creates a block card', () => {
    const testId = `card`

    const { getByTestId } = render(
      <Card fullWidth data-testid={testId}>
        Card Component
      </Card>
    )
    expect(getByTestId(testId)).toHaveStyle(`width:100%`)
  })

  // Test that width works
  test('width sets the horizontal size of the card', () => {
    // basically render different variations of the card with width
    const width20 = `width-20`
    const width10 = `width-10`
    const widthPx = `width-px`

    const { getByTestId } = render(
      <>
        <Card width={20} data-testid={width20}>
          Card Component
        </Card>
        <Card width={10} data-testid={width10}>
          Card Component
        </Card>
        <Card width='10%' data-testid={widthPx}>
          Card Component
        </Card>
      </>
    )

    // assertions
    expect(getByTestId(width20)).toHaveStyle(`width:20px`)
    expect(getByTestId(width10)).toHaveStyle(`width:10px`)
    expect(getByTestId(widthPx)).toHaveStyle(`width:10%`)
  })

  test('Card renders correct background color', () => {
    const testIdBackgroundless = `card-bg-default`
    const testIdRed = `card-bg-reg`

    const { getByTestId } = render(
      <>
        <Card data-testid={testIdBackgroundless}>Card</Card>
        <Card data-testid={testIdRed} bgColor='red'>
          Card
        </Card>
      </>
    )

    expect(getByTestId(testIdBackgroundless)).toHaveStyle(
      `background-color:#fff`
    )
    expect(getByTestId(testIdRed)).toHaveStyle(`background-color:red`)
  })
})
