import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import colors from '../theme/colors'

export const ModalFooter: FC<ModalFooter> = ({ children, ...props }) => {
  return <StyledModalFooter {...props}>{children}</StyledModalFooter>
}

interface ModalFooter extends HTMLAttributes<HTMLElement> {}
const StyledModalFooter = styled.footer`
  border-top: 1px solid ${colors.gray[4]};
  padding-top: 0.75em;
`
