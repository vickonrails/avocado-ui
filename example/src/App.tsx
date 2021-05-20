import React, { useState, useRef } from 'react'
import {
  theme,
  CSSReset,
  Modal,
  Button,
  ModalTitle,
  ModalOverlay,
  Flex
} from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

const App = () => {
  const [modalOpen, setMoalOpen] = useState(false)
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
      <Button size='sm' onClick={() => setMoalOpen(true)}>
        Hey
      </Button>
      <Modal
        open={modalOpen}
        onClose={() => <p>hey</p>}
        initialFocus={initialBtnRef}
        style={{
          position: 'fixed',
          zIndex: 10,
          width: '100%'
        }}
      >
        <ModalOverlay
          style={{
            background: 'rgba(0,0,0,.7)',
            position: 'fixed',
            top: 0,
            bottom: 0,
            display: 'flex',
            left: 0,
            right: 0,
            zIndex: -1
          }}
        >
          <div
            style={{
              background: 'white',
              margin: '2em auto 0',
              height: '200px',
              width: '300px',
              padding: '.6em',
              borderRadius: '4px'
            }}
          >
            <ModalTitle as='h2'>Children</ModalTitle>
            <Flex gap={5} justifyContent='flex-start'>
              <Button size='sm'>One Thing</Button>

              <Button
                size='sm'
                onClick={() => setMoalOpen(false)}
                variant='error'
                ref={initialBtnRef}
              >
                Close
              </Button>
            </Flex>
          </div>
        </ModalOverlay>
      </Modal>
    </ThemeProvider>
  )
}

export default App
