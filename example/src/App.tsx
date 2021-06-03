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
  Box,
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
        <Box mt={3}>Something about a box that I know of</Box>
      </div>
    </ThemeProvider>
  )
}

export default App
