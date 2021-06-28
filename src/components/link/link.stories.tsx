import React, { FC } from 'react'
import { Story, Meta } from '@storybook/react'
import { User, Mail } from 'react-feather'

import { Link, LinkProps, Flex, FlexItem } from '../../components'

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

export const Type: FC<LinkProps> = () => (
  <Flex gap={12} alignItems='center'>
    <FlexItem>
      <Link href='/' type='default'>
        Default Link Type
      </Link>
    </FlexItem>
    <FlexItem>
      <Link href='/' type='solid'>
        Solid Link Type
      </Link>
    </FlexItem>
    <FlexItem>
      <Link href='/' type='ghost'>
        Ghost Link Type
      </Link>
    </FlexItem>
    <FlexItem>
      <Link href='/' type='outline'>
        Outline Link Type
      </Link>
    </FlexItem>
  </Flex>
)

export const Shape: FC<LinkProps> = () => (
  <Flex gap={12} alignItems='center'>
    <FlexItem>
      <Link href='/' type='outline' shape='square'>
        Square Link
      </Link>
    </FlexItem>
    <FlexItem>
      <Link href='/' type='outline' shape='curve'>
        Curved Link
      </Link>
    </FlexItem>
    <FlexItem>
      <Link href='/' type='outline' shape='round'>
        Round Link
      </Link>
    </FlexItem>
  </Flex>
)

export const Size: FC<LinkProps> = () => (
  <Flex gap={12} alignItems='center'>
    <FlexItem>
      <Link href='/' type='outline' size='sm'>
        Small Sized Link
      </Link>
    </FlexItem>
    <FlexItem>
      <Link href='/' type='outline' size='md'>
        Medium Sized Link
      </Link>
    </FlexItem>
    <FlexItem>
      <Link href='/' type='outline' size='lg'>
        Large Sized Link
      </Link>
    </FlexItem>
  </Flex>
)

export const WithIcons: FC<LinkProps> = () => (
  <Flex gap={12} alignItems='center'>
    <FlexItem>
      <Link href='/' type='outline' size='sm' prefixIcon={<User />}>
        Small Sized Link
      </Link>
    </FlexItem>
    <FlexItem>
      <Link href='/' type='outline' size='md' suffixIcon={<Mail />}>
        Medium Sized Link
      </Link>
    </FlexItem>
    <FlexItem>
      <Link
        href='/'
        type='outline'
        size='lg'
        prefixIcon={<User />}
        suffixIcon={<Mail />}
      >
        Large Sized Link
      </Link>
    </FlexItem>
  </Flex>
)
