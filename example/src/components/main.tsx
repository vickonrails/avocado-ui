import React from 'react'
import { Button, Separator } from 'avocado-ui'

const Main = () => {
  return (
    <main>
      <Button>Something Light</Button>
      <Button disabled>Something Light</Button>
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

      <Separator />

      <Button buttonType='ghost'>Something Light</Button>
      <Button disabled>Something Light</Button>
      <Button buttonType='ghost' variant='error'>
        Something Light
      </Button>
      <Button variant='primary' buttonType='ghost'>
        Something Light
      </Button>
      <Button variant='success' buttonType='ghost'>
        Something Light
      </Button>
      <Button variant='warning' buttonType='ghost'>
        Something Light
      </Button>
      <Separator />

      <Button buttonType='outline'>Something Light</Button>
      <Button disabled>Something Light</Button>
      <Button buttonType='outline' variant='error'>
        Something Light
      </Button>
      <Button variant='primary' buttonType='outline'>
        Something Light
      </Button>
      <Button variant='success' buttonType='outline'>
        Something Light
      </Button>
      <Button variant='warning' buttonType='outline'>
        Something Light
      </Button>

      <Separator />

      <Button buttonType='link'>Something Light</Button>
      <Button disabled>Something Light</Button>
      <Button buttonType='link' variant='error'>
        Something Light
      </Button>
      <Button variant='primary' buttonType='link'>
        Something Light
      </Button>
      <Button variant='success' buttonType='link'>
        Something Light
      </Button>
      <Button variant='warning' buttonType='link'>
        Something Light
      </Button>
    </main>
  )
}

export { Main }
