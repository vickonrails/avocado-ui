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

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const initialBtnRef = useRef(null)
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
        aspernatur voluptates veniam odit quam commodi amet tempora sunt?
        Blanditiis sapiente eos reiciendis mollitia incidunt eaque impedit,
        architecto illo dolores beatae.
      </p>
      <Button size='sm' onClick={() => setModalOpen(true)}>
        Hey
      </Button>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialFocus={initialBtnRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalTitle as='h5'>Children</ModalTitle>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            veritatis provident esse recusandae veniam harum tenetur, placeat ea
            similique nemo et illo ut odit repellendus animi sapiente architecto
            doloremque quidem.
          </p>

          <ModalFooter>
            <Flex gap={5} justifyContent='flex-start'>
              <Button size='sm'>One Thing</Button>

              <Button
                size='sm'
                onClick={() => setModalOpen(false)}
                variant='error'
                ref={initialBtnRef}
                buttonType='ghost'
              >
                Close
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ThemeProvider>
  )
}

export default App
