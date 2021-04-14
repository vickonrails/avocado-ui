import React from 'react'
import { Avatar, AvatarGroup } from 'avocado-ui'
import { Radio } from 'react-feather'

import AvatarImg from '../images/avatar.jpg'

const AvatarComponent = () => {
  return (
    <AvatarGroup>
      <Avatar name='Mathew KE' icon={<Radio />} />
      <Avatar name='Mathew KE' icon={<Radio />} />
      <Avatar name='Mathew KE' src={AvatarImg} />
      <Avatar name='Mathew KE' src={AvatarImg} />
      <Avatar name='Mathew KE' />
      <Avatar name='Mathew KE' />
    </AvatarGroup>
  )
}

export { AvatarComponent as Avatar }
