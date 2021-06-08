import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Separator, SeparatorProps, Text } from '../../components'

export default {
  title: 'Components/Separator',
  component: Separator
} as Meta

const COLOR = `#999`

const Template: Story<SeparatorProps> = (args) => <Separator {...args} />
export const Default = Template.bind({})
Default.args = {
  color: COLOR
}

export const Width = () => (
  <>
    <Text>Separator width - 20px</Text>
    <Separator width='20px' color={COLOR} />

    <Text>Separator width - 100px</Text>
    <Separator width='100px' color={COLOR} />

    <Text>Separator width - 25%</Text>
    <Separator width='25%' color={COLOR} />

    <Text>Separator width - 50%</Text>
    <Separator width='50%' color={COLOR} />

    <Text>Separator width - 100%</Text>
    <Separator width='100%' color={COLOR} />
  </>
)

export const Color = () => (
  <>
    <Text>Default Separator</Text>
    <Separator width='20%' />

    <Text>Magenta Separator</Text>
    <Separator width='20%' color='magenta' />

    <Text>Green Separator</Text>
    <Separator width='20%' color='green' />

    <Text>Blue Separator</Text>
    <Separator width='20%' color='blue' />

    <Text>Red Separator</Text>
    <Separator width='20%' color='red' />
  </>
)

export const Alignment = () => (
  <>
    <Text>Default Separator</Text>
    <Separator width='20%' color='blue' />

    <Text align='center'>Centered Separator</Text>
    <Separator width='20%' centered color='blue' />
  </>
)

export const Spacing = () => (
  <>
    <Separator width='20%' color='blue' bottomSpacing={50} />
    <Text>Bottom Spacing - 50px</Text>

    <Text>Centered Separator</Text>
    <Separator width='20%' color='blue' topSpacing={0} />
  </>
)
