import React, { useState } from 'react'
import { Activity, Save } from 'react-feather'

import {
  Button,
  ThemeProvider,
  theme,
  ThemeProps,
  Input,
  ISelectOptions,
  Select,
  Radio
  // RadioGroup
} from 'avocado-ui'
import 'avocado-ui/dist/index.css'

const genderOptions: ISelectOptions[] = [
  { value: 'male', displayText: 'Male' },
  { value: 'female', displayText: 'Female' },
  { value: 'other', displayText: 'Other' }
]

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
  const [formLoading, setFormLoading] = useState(false)

  return (
    <ThemeProvider theme={customTheme}>
      <div className='container'>
        <div className='btn-group'>
          <button
            onClick={() => {
              setLoading(!loading)
            }}
          >
            Set loading
          </button>
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
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setFormLoading(true)
              setTimeout(() => {
                setFormLoading(false)
              }, 3000)
            }}
            className='input-group'
          >
            <Input
              placeholder='Something new'
              onChange={(e) => setValue(e.target.value)}
              value={inputValue}
              variant='fill'
              inputSize='sm'
              borderRadius='curve'
              suffixIcon={<Save />}
              prefixIcon={<Save />}
              required
            />
            <Input
              placeholder='Something new'
              onChange={(e) => setValue(e.target.value)}
              value={inputValue}
              required
              variant='fill'
              inputSize='md'
              borderRadius='round'
              prefixIcon={<Save />}
              suffixIcon={<Activity />}
            />
            <Input
              placeholder='Something new'
              onChange={(e) => setValue(e.target.value)}
              value={inputValue}
              variant='outline'
              fullWidth
              borderRadius='round'
              type='password'
              required
              inputSize='lg'
              prefixIcon={<Save />}
              suffixIcon={<Activity />}
            />
            {/* <RadioGroup defaultValue='male'> */}
            <Radio value='male' name='gender'>
              Male
            </Radio>

            <Radio value='male' name='gender'>
              Female
            </Radio>

            <input />
            <Select
              placeholder='Select an option'
              selectOptions={genderOptions}
            />
            <Button loading={formLoading}>Submit</Button>
          </form>
        </div>
      </div>
      {}
    </ThemeProvider>
  )
}

export default App
