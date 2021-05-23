import React, { useState, useRef } from 'react'
import {
  theme,
  CSSReset,
  Modal,
  Button,
  ModalTitle,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Flex
} from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import './index.css'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const initialBtnRef = useRef(null)
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className='App'>
        <p>
          The Modal component is built on top of the Dialog component from
          @headlessui/react. It comes with the Modal, ModalTitle,ModalContent
          and ModalFooter.
        </p>
        <p>
          The easiest way to get started is to import Modal, ModalTitle,
          ModalContent, ModalOverlay and ModalFooter from @avocado-ui/react.{' '}
        </p>
        <Button size='sm' onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          initialFocus={initialBtnRef}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalTitle as='h5'>Modal Heading</ModalTitle>
            <p>
              The Modal provides the open and onClose props for controlling
              modal states. Setting open to true shows the modal and vice versa.
              Passing a function to the onClose prop specifies the desired
              action on close of the modal.
            </p>

            <ModalFooter>
              <Flex gap={5} justifyContent='flex-start'>
                <Button size='sm'>Another Action</Button>

                <Button
                  size='sm'
                  onClick={() => setModalOpen(false)}
                  variant='error'
                  ref={initialBtnRef}
                  buttonType='ghost'
                >
                  Close Modal
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </ThemeProvider>
  )
}

export default App
