import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '../../components'
import { AvatarGroup } from './avatar.group'

const IMG_URL_1 = `https://avatars.githubusercontent.com/u/24235881?s=400&u=b1882b58273cf6d184b35b10ef1520a429b6ebc7&v=4`
const IMG_URL_2 = `https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=200`
const IMG_URL_3 = `https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?&w=200`
const IMG_URL_4 = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200`
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
    <AvatarGroup>
      <Avatar size='xs' name='xs' />
      <Avatar size='sm' name='sm' />
      <Avatar size='md' name='md' />
      <Avatar size='lg' name='lg' />
      <Avatar size='xl' name='xl' />
    </AvatarGroup>
  )
}

export const WithImages: Story<AvatarProps> = () => {
  return (
    <AvatarGroup>
      <Avatar size='lg' src={IMG_URL_1} />
      <Avatar size='lg' src={IMG_URL_2} />
      <Avatar size='lg' src={IMG_URL_3} />
      <Avatar size='lg' src={IMG_URL_4} />
    </AvatarGroup>
  )
}

export const BackgroundColors: Story<AvatarProps> = () => {
  return (
    <AvatarGroup>
      <Avatar size='lg' name='Kind Major' bgColor='blue' />
      <Avatar size='lg' name='Kind Major' bgColor='red' />
      <Avatar size='lg' name='Kind Major' bgColor='black' />
      <Avatar size='lg' name='Kind Major' bgColor='magenta' />
    </AvatarGroup>
  )
}

export const Shapes: Story<AvatarProps> = () => {
  const IMG_SRC = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200`
  return (
    <AvatarGroup>
      <Avatar shape='curve' size='lg' name='Kind Major' src={IMG_SRC} />
      <Avatar shape='round' size='lg' name='Kind Major' src={IMG_SRC} />
      <Avatar shape='square' size='lg' name='Kind Major' src={IMG_SRC} />
    </AvatarGroup>
  )
}
