import React from 'react'
import { theme, Button, CSSReset, Flex, FlexItem } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import { ImageDemo, Avatar, Text, Header } from './components'

const App = () => {
  return (
    // Pass custom theme to theme provider
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Flex alignContent='stretch' className='new_flex' flexWrap='wrap' gap={5}>
        <FlexItem flex='900px'>
          <Button loading={true}>Get Started</Button>
        </FlexItem>

        <FlexItem flex={1}>
          <Header>Header</Header>
        </FlexItem>

        <FlexItem>
          <Flex gap={20}>
            <FlexItem>
              <Text />
            </FlexItem>

            <FlexItem>
              <Text />
            </FlexItem>
          </Flex>
        </FlexItem>

        <FlexItem>
          <Avatar />
        </FlexItem>

        <ImageDemo />
      </Flex>
    </ThemeProvider>
  )
}

export default App
