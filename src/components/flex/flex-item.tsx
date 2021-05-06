import React, { CSSProperties, FC, HTMLAttributes } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const FlexItem: FC<FlexItemProps> = ({ children, ...props }) => {
  return <StlyedFlexItem {...props}>{children}</StlyedFlexItem>
}

type FlexChildrenProps =
  | 'order'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis'
  | 'flex'
  | 'alignSelf'

interface FlexItemProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<CSSProperties, FlexChildrenProps> {}

// Remove order property
const StyledFlexItemCSS = ({
  order,
  flexGrow,
  flexShrink,
  flexBasis,
  flex,
  alignSelf
}: FlexItemProps) => css`
  order: ${order && order};
  flex-grow: ${flexGrow && flexGrow};
  flex-shrink: ${flexShrink && flexShrink};
  flex-basis: ${flexBasis && flexBasis};
  flex: ${flex && flex};
  align-self: ${alignSelf && alignSelf};
`

const StlyedFlexItem = styled.div`
  ${StyledFlexItemCSS}
`

FlexItem.defaultProps = {
  flexBasis: 'auto',
  flex: 'auto',
  alignSelf: 'auto'
}

export { FlexItem }
