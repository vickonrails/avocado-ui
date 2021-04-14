import React from 'react'
import { Button } from 'avocado-ui'

const Main = () => {
  return (
    <main>
      <Button buttonType='solid' variant='error'>
        Something Light
      </Button>
      <Button buttonType='solid' variant='primary'>
        Something Light
      </Button>
      <Button buttonType='solid' variant='success'>
        Something Light
      </Button>
      <Button buttonType='solid' variant='warning'>
        Something Light
      </Button>
    </main>
  )
}

export { Main }
