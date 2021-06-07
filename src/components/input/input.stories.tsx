import React from 'react'
import { Story, Meta } from '@storybook/react'
import { User, Lock } from 'react-feather'
import styled from '@emotion/styled'

import { Input, InputProps, Flex, Text } from '../../components'

export default {
  title: 'Components/Input',
  component: Input
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Input Component'
}

export const Variants = () => (
  <Flex alignItems='flex-start' flexDirection='column'>
    <StyledLabel>
      <Text>Input in Filled Variant</Text>
      <Input variant='fill' placeholder='Input Component' />
    </StyledLabel>

    <StyledLabel>
      <Text>Input in Outline Variant</Text>
      <Input variant='outline' placeholder='Input Component' />
    </StyledLabel>

    <StyledLabel>
      <Text>Input in Unstyled Variant</Text>
      <Input variant='unstyled' placeholder='Input Component' />
    </StyledLabel>
  </Flex>
)

export const Sizes = () => (
  <Flex flexDirection='column'>
    <StyledLabel>
      <Text>Small sized Input Component</Text>
      <Input inputSize='sm' placeholder='Input Component' />
    </StyledLabel>

    <StyledLabel>
      <Text>Medium sized Input Component</Text>
      <Input inputSize='md' placeholder='Input Component' />
    </StyledLabel>

    <StyledLabel>
      <Text>Large sized Input Component</Text>
      <Input placeholder='Input Component' inputSize='lg' />
    </StyledLabel>
  </Flex>
)

export const Shapes = () => (
  <Flex flexDirection='column'>
    <StyledLabel>
      <Text>Input with curved corners</Text>
      <Input borderRadius='curve' placeholder='Input Component' />
    </StyledLabel>

    <StyledLabel>
      <Text>Input with round corners</Text>
      <Input borderRadius='round' placeholder='Input Component' />
    </StyledLabel>

    <StyledLabel>
      <Text>Input with squared corners</Text>
      <Input placeholder='Input Component' borderRadius='square' />
    </StyledLabel>
  </Flex>
)

export const WithIcons = () => (
  <Flex flexDirection='column'>
    <StyledLabel>
      <Text>Icon on Left Side</Text>
      <Input placeholder='Input Component' prefixIcon={<User />} />
    </StyledLabel>

    <StyledLabel>
      <Text>Icon on Right Side</Text>
      <Input placeholder='Input Component' suffixIcon={<Lock />} />
    </StyledLabel>

    <StyledLabel>
      <Text>Icon on Both Sides</Text>
      <Input
        placeholder='Input Component'
        prefixIcon={<User />}
        suffixIcon={<Lock />}
      />
    </StyledLabel>
  </Flex>
)

export const Disabled = () => (
  <Flex flexDirection='column'>
    <StyledLabel>
      <Text>Disabled Input Component</Text>
      <Input placeholder='Input Component' disabled />
    </StyledLabel>
  </Flex>
)

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1em;

  .avocado-text {
    margin: 0.3em;
  }
`
