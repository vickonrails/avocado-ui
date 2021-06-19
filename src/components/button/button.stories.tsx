import React from 'react'
import { User, GitHub } from 'react-feather'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps, Box } from '../../components'

const MARGIN = 0.25
export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Flexible Button'
}

export const Sizes: Story<ButtonProps> = () => {
  return (
    <>
      <Box mv={MARGIN}>
        <Button size='lg'>Large Button</Button>
      </Box>
      <Box mv={MARGIN}>
        <Button size='md'>Medium Button</Button>
      </Box>
      <Box mv={MARGIN}>
        <Button size='sm'>Small Button</Button>
      </Box>
    </>
  )
}

export const Variants: Story<ButtonProps> = () => (
  <>
    <Box mv={MARGIN}>
      <Button variant='primary'>Primary Button</Button>
    </Box>
    <Box mv={MARGIN}>
      <Button variant='error'>Error Button</Button>
    </Box>

    <Box mv={MARGIN}>
      <Button variant='success'>Success Button</Button>
    </Box>

    <Box mv={MARGIN}>
      <Button variant='warning'>Warning Button</Button>
    </Box>
  </>
)

export const Shape: Story<ButtonProps> = () => (
  <>
    <Box mv={MARGIN}>
      <Button shape='curve'>Curve Button</Button>
    </Box>

    <Box mv={MARGIN}>
      <Button shape='round'>Round Button</Button>
    </Box>

    <Box mv={MARGIN}>
      <Button shape='square'>Square Button</Button>
    </Box>
  </>
)

export const Types: Story<ButtonProps> = () => (
  <>
    <Box mv={MARGIN}>
      <Button buttonType='solid'>Solid Button</Button>
    </Box>

    <Box mv={MARGIN}>
      <Button buttonType='outline'>Outline Button</Button>
    </Box>

    <Box mv={MARGIN}>
      <Button buttonType='ghost'>Square Button</Button>
    </Box>
  </>
)

export const State: Story<ButtonProps> = () => (
  <>
    <Box mv={MARGIN}>
      <Button loading>Loading Button</Button>
    </Box>

    <Box mv={MARGIN}>
      <Button disabled>Disabled Button</Button>
    </Box>
  </>
)

export const WithIcons: Story<ButtonProps> = () => (
  <>
    <Box mv={MARGIN}>
      <Button prefixIcon={<GitHub />}>With Left Icon</Button>
    </Box>

    <Box mv={MARGIN}>
      <Button suffixIcon={<User />} prefixIcon={<User />}>
        With Both Icon
      </Button>
    </Box>

    <Box mv={MARGIN}>
      <Button suffixIcon={<User />}>With Right Icon</Button>
    </Box>
  </>
)
