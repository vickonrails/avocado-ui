import React from 'react'
import { Story, Meta } from '@storybook/react'
import { User, Lock } from 'react-feather'
import styled from '@emotion/styled'

import { Input, InputProps, Flex } from '../../components'

export default {
  title: 'Components/Input',
  component: Input
} as Meta

const GAP = 20

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Input Component'
}

export const Variants = () => (
  <Flex alignItems='flex-start' flexDirection='column' gap={GAP}>
    <Input
      variant='fill'
      placeholder='Input Component'
      labelText='Input in Filled Variant'
    />

    <Input
      variant='outline'
      placeholder='Input Component'
      labelText='Input in Outline Variant'
    />

    <Input variant='unstyled' placeholder='Input Component' />
  </Flex>
)

export const Sizes = () => (
  <Flex flexDirection='column' gap={GAP}>
    <Input
      inputSize='sm'
      placeholder='Input Component'
      labelText='Small sized Input Component'
    />

    <Input
      inputSize='md'
      placeholder='Input Component'
      labelText='Medium sized Input Component'
    />

    <Input
      placeholder='Input Component'
      inputSize='lg'
      labelText='Large sized Input Component'
    />
  </Flex>
)

export const Shapes = () => (
  <Flex flexDirection='column' gap={GAP}>
    <Input
      borderRadius='curve'
      placeholder='Input Component'
      labelText='Input with curved corners'
    />

    <Input
      borderRadius='round'
      placeholder='Input Component'
      labelText='Input with round corners'
    />

    <Input
      placeholder='Input Component'
      borderRadius='square'
      labelText='Input with squared corners'
    />
  </Flex>
)

export const WithIcons = () => (
  <Flex flexDirection='column' gap={GAP}>
    <Input
      placeholder='Input Component'
      prefixIcon={<User />}
      labelText='Icon on Left Side'
    />

    <Input
      placeholder='Input Component'
      suffixIcon={<Lock />}
      // labelText='Icon on Right Side'
      // fullWidth
    />

    <Input
      placeholder='Input Component'
      prefixIcon={<User />}
      suffixIcon={<Lock />}
      labelText='Icon on Both Sides'
    />
  </Flex>
)

export const FullWidth = () => (
  <Input
    placeholder='Input Component'
    fullWidth //* labelText='Label Text Here' */
  />
)

export const Disabled = () => (
  <Input
    placeholder='Input Component'
    disabled
    labelText='Disabled Input Component'
  />
)
