import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from './box'

export default {
  title: 'Components/Box',
  component: Box
} as Meta

const borderStyle = { border: '1px solid red' }

const Template: Story<BoxProps> = (args) => <Box {...args} />
export const Default = Template.bind({})

Default.args = {
  children: (
    <p>
      This is a demo of the Box component. You can adjust the margin and padding
      by fiddling with the controls at the bottom of the page.
    </p>
  ),
  style: borderStyle
}
