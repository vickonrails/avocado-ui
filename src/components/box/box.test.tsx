import React from 'react'
import { render } from '../../utils/test-utils'
import '@testing-library/jest-dom'

import { Box, Button } from '../../components'

describe('Box', () => {
  test('Box renders correctly', () => {
    const testId = 'box'

    const { getByTestId } = render(
      <Box data-testid={testId}>
        <Button>Button</Button>
      </Box>
    )

    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })
})
