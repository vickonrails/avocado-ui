import React from 'react'
import { theme, Button, CSSReset, Flex, FlexItem } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import { ImageDemo, Avatar, Text, Header } from './components'

const App = () => {
  return (
    // Pass custom theme to theme provider
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Flex flexDirection='row' alignContent='stretch' className='new_flex'>
        <FlexItem>
          <Button loading={true}>Get Started</Button>
        </FlexItem>

        <FlexItem>
          <Header>Header</Header>
        </FlexItem>

        <FlexItem>
          <Text />
        </FlexItem>

        <FlexItem>
          <Avatar />
        </FlexItem>

        <FlexItem>
          <ImageDemo />
        </FlexItem>
      </Flex>
    </ThemeProvider>
  )
}

export default App
