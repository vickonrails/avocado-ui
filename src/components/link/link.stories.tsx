import React from 'react'
import { User, GitHub } from 'react-feather'
import { Story, Meta } from '@storybook/react'

import { Link, LinkProps } from '../../components'

export default {
  title: 'Components/Link',
  component: Link
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Flexible Button',
  href: '/'
}
