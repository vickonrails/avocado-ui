import React from 'react'
import { Avatar, AvatarGroup } from 'avocado-ui'
import { Radio } from 'react-feather'

// import AvatarImg from '../images/avatar.jpg'

const AvatarComponent = () => {
  return (
    <AvatarGroup>
      <Avatar name='Mathew KE' size='xs' />
      <Avatar name='Mathew KE' size='sm' />
      <Avatar name='Mathew KE' size='md' />
      <Avatar name='Mathew KE' size='lg' />
      <Avatar name='Mathew KE' size='xl' />
      <Avatar name='Mathew KE' size={200} icon={<Radio />} />
    </AvatarGroup>
  )
}

export { AvatarComponent as Avatar }
