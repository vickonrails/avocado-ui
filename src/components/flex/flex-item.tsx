import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const FlexItem: FC<FlexItemProps> = ({ children, ...props }) => {
  return <StlyedFlexItem {...props}>{children}</StlyedFlexItem>
}

interface FlexItemProps extends HTMLAttributes<HTMLDivElement> {}

const StlyedFlexItem = styled.div``

export { FlexItem }
