import React from 'react'
import { render } from '../../utils/test-utils'
import '@testing-library/jest-dom'
import { Link } from '../'

describe('Modal', () => {
  test('Modal renders correctly', () => {
    const testId = `modal`
    const { getByTestId } = render(
      <Link href='/' data-testid={testId}>
        Hey There
      </Link>
    )

    expect(getByTestId(testId)).toBeInTheDocument()
  })
})
