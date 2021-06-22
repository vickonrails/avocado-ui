import React from 'react'
import { render } from '../../utils/test-utils'
import '@testing-library/jest-dom'
import { Button, Modal, ModalContent, ModalOverlay, ModalTitle } from '../'

describe('Modal', () => {
  test('Modal renders correctly', () => {
    const func = () => {}
    const testId = `modal`
    const { getByTestId } = render(
      <Modal open onClose={func} data-testid={testId}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle as='h2'>Title</ModalTitle>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            aspernatur voluptates veniam odit quam commodi amet tempora sunt?
            Blanditiis sapiente eos reiciendis mollitia incidunt eaque impedit,
            architecto illo dolores beatae.
          </p>
          <Button>Clickable</Button>
        </ModalContent>
      </Modal>
    )
    const node = getByTestId(testId)
    expect(node).toBeInTheDocument()
    expect(node).toHaveAttribute('data-modalopen')
  })
})
