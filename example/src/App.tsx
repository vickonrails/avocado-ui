import React from 'react'
import { ThemeProvider, CSSReset, Flex, FlexItem, Card, Link } from 'avocado-ui'

import './index.css'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <CSSReset />
      <Flex gap={12} className='App' alignItems='center'>
        <FlexItem>
          <Card p={8} br={4} showShadow>
            Something about a box that I know of
          </Card>
        </FlexItem>

        <FlexItem>
          <Link href='/'>Link to wherever you want to go to</Link>
        </FlexItem>
      </Flex>
    </ThemeProvider>
  )
}

export default App
