import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Card, CardProps } from '../../components'

export default {
  title: 'Components/Card',
  component: Card
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Flexible Button'
}
