import React from 'react'
import { theme, CSSReset, Modal } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

const App = () => {
  return (
    // Pass custom theme to theme provider
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Modal open={false} onClose={() => <p>hey</p>}>
        Children
      </Modal>
    </ThemeProvider>
  )
}

export default App
