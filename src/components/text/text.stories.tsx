import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Text, TextProps } from '../../components'

export default {
  title: 'Components/Text',
  component: Text
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

export const Sizes: Story<TextProps> = () => (
  <>
    <Text size='7xl'>The sun will soon shine</Text>
    <Text size='6xl'>The sun will soon shine</Text>
    <Text size='5xl'>The sun will soon shine</Text>
    <Text size='4xl'>The sun will soon shine</Text>
    <Text size='3xl'>The sun will soon shine</Text>
    <Text size='2xl'>The sun will soon shine</Text>
    <Text size='xl'>The sun will soon shine</Text>
    <Text size='lg'>The sun will soon shine</Text>
    <Text size='md'>The sun will soon shine</Text>
    <Text size='sm'>The sun will soon shine</Text>
    <Text size='xs'>The sun will soon shine</Text>
  </>
)

export const Alignment: Story<TextProps> = () => (
  <>
    <Text align='left'>The sun will soon shine</Text>
    <Text align='center'>The sun will soon shine</Text>
    <Text align='right'>The sun will soon shine</Text>
  </>
)

export const Trimmed: Story<TextProps> = () => (
  <>
    <Text trim={100}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Text>
    <Text trim={50}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Text>
    <Text trim={20}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Text>
  </>
)
