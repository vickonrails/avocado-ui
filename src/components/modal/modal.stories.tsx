import React, { FC, useState } from 'react'
import { Story, Meta } from '@storybook/react'

import {
  ModalContent,
  Modal,
  ModalProps,
  Text,
  Heading,
  ModalOverlay,
  Button,
  ModalFooter
} from '../../components'

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta

// Sizes
export const Default: Story<ModalProps> = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Open Default Modal</Button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <Heading level='h3'>Avocado Modal</Heading>
          <Text>
            By default, the first item in the tab order receives focus when the
            modal is open. Focus is also returned to the last focused element
            before opening the modal. This follows the aria spec and should not
            be changed.{' '}
          </Text>

          <Text>
            We can however, direct focus to another element when the modal
            opens. This is possible with the initialFocus prop on the Modal
            component alongside React refs.
          </Text>
          <ModalFooter>
            <Button onClick={() => setModalOpen(false)}>Close Modal</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
