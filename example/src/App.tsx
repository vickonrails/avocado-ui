import React, { useState } from 'react'
import { Activity, Save } from 'react-feather'

import { Button, ThemeProvider, theme, ThemeProps, Input } from 'avocado-ui'
import 'avocado-ui/dist/index.css'

const customTheme: ThemeProps = {
  ...theme,
  colors: {
    ...theme.colors
  },
  components: {
    ...theme.components,
    buttonTheme: {
      ...theme.components.buttonTheme,
      variants: {
        ...theme.components.buttonTheme.variants
      }
    }
  }
}

const App = () => {
  const [loading, setLoading] = useState(false)
  const [inputValue, setValue] = useState('')

  return (
    <ThemeProvider theme={customTheme}>
      <div className='container'>
        <div className='btn-group'>
          <button onClick={() => setLoading(!loading)}>Set loading</button>
          <Button
            buttonType='solid'
            variant='warning'
            shape='curve'
            prefixIcon={<Activity />}
            loading={loading}
          >
            Button Text
          </Button>
          <Button
            variant='error'
            buttonType='solid'
            suffixIcon={<Save />}
            loading={loading}
            disabled
          >
            Something
          </Button>
          <Button
            variant='primary'
            buttonType='outline'
            size='sm'
            shape='round'
            loading={loading}
            suffixIcon={<Save />}
          >
            Something
          </Button>
          <Button
            variant='primary'
            buttonType='solid'
            shape='curve'
            size='lg'
            loading={loading}
          >
            Something
          </Button>
          <Button
            variant='success'
            buttonType='link'
            shape='curve'
            loading={loading}
          >
            Something
          </Button>
        </div>
        <hr />
        <div className='input-group'>
          <Input
            placeholder='Something new'
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
            variant='fill'
          />
          <Input
            placeholder='Something new'
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
            variant='outline'
          />
          <Input
            placeholder='Something new'
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
            variant='unstyled'
          />
          <Input
            placeholder='Something new'
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
            variant='unstyled'
            disabled
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
