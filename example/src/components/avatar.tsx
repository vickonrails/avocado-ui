import React from 'react'
import { Avatar, Flex, FlexItem } from 'avocado-ui'
import { Radio } from 'react-feather'

import AvatarImg from '../images/avatar.jpg'

const AvatarComponent = () => {
  return (
    <Flex gap='10px'>
      <FlexItem>
        <Avatar name='Mathew KE' size='xs' />
      </FlexItem>

      <FlexItem>
        <Avatar name='Mathew KE' size='sm' />
      </FlexItem>

      <FlexItem>
        <Avatar name='Mathew KE' size='md' shape='curve' />
      </FlexItem>

      <FlexItem>
        <Avatar name='Mathew KE' size='lg' />
      </FlexItem>

      <FlexItem>
        <Avatar
          name='Mathew KE'
          size='xl'
          shape='curve'
          bgColor='rebeccapurple'
        />
      </FlexItem>

      <FlexItem>
        <Avatar
          name='Mathew KE'
          size={200}
          icon={<Radio />}
          shape='square'
          src={AvatarImg}
        />
      </FlexItem>
    </Flex>
  )
}

export { AvatarComponent as Avatar }
