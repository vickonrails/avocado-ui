import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Spinner, SpinnerProps } from './spinner'

export default {
  title: 'Components/Spinner',
  component: Spinner
} as Meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />
export const Default = Template.bind({})

export const Sizes = () => (
  <>
    <Spinner size='sm' />
    <Spinner size='md' />
    <Spinner size='lg' />
  </>
)

export const Variants = () => (
  <>
    <Spinner variant='primary' />
    <Spinner variant='warning' />
    <Spinner variant='success' />
    <Spinner variant='error' />
  </>
)

Default.args = {}
