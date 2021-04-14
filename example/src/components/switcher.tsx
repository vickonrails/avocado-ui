import React from 'react'
import { useColorMode } from 'theme-ui'

const Switcher = () => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleDarkMode = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }
  return <button onClick={toggleDarkMode}>Toggle Mode</button>
}

export { Switcher }
