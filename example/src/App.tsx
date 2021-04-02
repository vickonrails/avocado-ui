import React from 'react'

import { Button } from 'avocado-ui'
import 'avocado-ui/dist/index.css'

const App = () => {
  return (
    <div className='container btn-group'>
      <Button variant='primary'>Something</Button>
      <Button variant='secondary'>Something</Button>
      <Button variant='warning'>Something</Button>
      <Button variant='error'>Something</Button>
      <Button variant='ghost'>Something</Button>
      <Button variant='link'>Something</Button>
    </div>
  )
}

export default App
