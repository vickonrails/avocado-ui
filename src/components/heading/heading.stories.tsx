import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '../../components'

export default {
  title: 'Components/Heading',
  component: Heading
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Heading Text',
  level: 'h1'
}

// Sizes
export const Sizes: Story<HeadingProps> = () => {
  return (
    <>
      <Heading level='h1' size='7xl'>
        Heading Text (7xl)
      </Heading>
      <Heading level='h1' size='6xl'>
        Heading Text (6xl)
      </Heading>
      <Heading level='h1' size='5xl'>
        Heading Text (5xl)
      </Heading>
      <Heading level='h1' size='4xl'>
        Heading Text (4xl)
      </Heading>
      <Heading level='h1' size='3xl'>
        Heading Text (3xl)
      </Heading>
      <Heading level='h1' size='2xl'>
        Heading Text (2xl)
      </Heading>
      <Heading level='h1' size='xl'>
        Heading Text (xl)
      </Heading>
      <Heading level='h1' size='lg'>
        Heading Text (lg)
      </Heading>
      <Heading level='h1' size='md'>
        Heading Text (md)
      </Heading>
      <Heading level='h1' size='sm'>
        Heading Text (sm)
      </Heading>
      <Heading level='h1' size='xs'>
        Heading Text (xs)
      </Heading>
    </>
  )
}

export const Alignment: Story<HeadingProps> = () => {
  return (
    <>
      <Heading level='h1' align='left'>
        Left Aligned
      </Heading>
      <Heading level='h1' align='center'>
        Center Aligned
      </Heading>
      <Heading level='h1' align='right'>
        Right Aligned
      </Heading>
    </>
  )
}
