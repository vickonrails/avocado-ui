import React from 'react'
import { User } from 'react-feather'
import { Story, Meta } from '@storybook/react'

import { Avatar, AvatarProps, Flex } from '../../components'

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Peter Wealth'
}

// Sizes
export const Sizes: Story<AvatarProps> = () => {
  return (
    <Flex gap={8}>
      <Avatar size='xs' name='xs' />
      <Avatar size='sm' name='sm' />
      <Avatar size='md' name='md' />
      <Avatar size='lg' name='lg' />
      <Avatar size='xl' name='xl' />
    </Flex>
  )
}

export const WithImages: Story<AvatarProps> = () => {
  const IMG_URL_1 = `https://avatars.githubusercontent.com/u/24235881?s=400&u=b1882b58273cf6d184b35b10ef1520a429b6ebc7&v=4`
  const IMG_URL_2 = `https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=200`
  const IMG_URL_3 = `https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?&w=200`
  const IMG_URL_4 = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200`
  return (
    <Flex>
      <Avatar size='lg' src={IMG_URL_1} />
      <Avatar size='lg' src={IMG_URL_2} />
      <Avatar size='lg' src={IMG_URL_3} />
      <Avatar size='lg' src={IMG_URL_4} />
    </Flex>
  )
}

export const BackgroundColors: Story<AvatarProps> = () => {
  return (
    <Flex gap={10}>
      <Avatar size='lg' name='Kind Major' bgColor='blue' />
      <Avatar size='lg' name='Kind Major' bgColor='red' />
      <Avatar size='lg' name='Kind Major' bgColor='black' />
      <Avatar size='lg' name='Kind Major' bgColor='magenta' />
    </Flex>
  )
}
// With SRC
// Background color
