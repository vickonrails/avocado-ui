import React from 'react'
import { Text, Heading, Button } from 'avocado-ui'

// Header componet
const Header: React.FC = () => {
  return (
    <div>
      <Text>component</Text>
      <Button>Hey</Button>
      <Heading level='h1'>Content</Heading>
    </div>
  )
}

export { Header }
