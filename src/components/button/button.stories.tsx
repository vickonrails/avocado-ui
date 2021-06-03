import React from 'react'
import { User } from 'react-feather'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './button'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const NoConstrants = Template.bind({})
NoConstrants.args = {
  children: 'Flexible Button'
}

export const Sizes: Story<ButtonProps> = () => {
  return (
    <>
      <Button size='lg'>Large Button</Button>
      <Button size='md'>Medium Button</Button>
      <Button size='sm'>Small Button</Button>
    </>
  )
}

export const Variants: Story<ButtonProps> = () => (
  <>
    <Button variant='primary'>Primary Button</Button>
    <Button variant='error'>Error Button</Button>
    <Button variant='success'>Success Button</Button>
    <Button variant='warning'>Warning Button</Button>
  </>
)

export const Shape: Story<ButtonProps> = () => (
  <>
    <Button shape='curve'>Curve Button</Button>
    <Button shape='round'>Round Button</Button>
    <Button shape='square'>Square Button</Button>
  </>
)

export const State: Story<ButtonProps> = () => (
  <>
    <Button loading>Loading Button</Button>
    <Button disabled>Disabled Button</Button>
  </>
)

export const WithIcons: Story<ButtonProps> = () => (
  <>
    <Button prefixIcon={<User />}>With Left Icon</Button>
    <Button suffixIcon={<User />} prefixIcon={<User />}>
      With Both Icon
    </Button>
    <Button suffixIcon={<User />}>With Right Icon</Button>
  </>
)
