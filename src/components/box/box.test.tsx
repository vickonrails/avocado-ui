import React from 'react'
import { render } from '@testing-library/react'

import { Box, Button } from '../../components'

describe('Box', () => {
  test('Box renders correctly', () => {
    const testId = 'box'

    const { getByTestId } = render(
      <Box data-testId={testId}>
        <Button>Button</Button>
      </Box>
    )

    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
  })
})
