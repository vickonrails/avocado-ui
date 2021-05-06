import React, { CSSProperties, FC, HTMLAttributes } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const FlexItem: FC<FlexItemProps> = ({ className, children, ...props }) => {
  const _className = className
    ? `${className} avocado-flex__item`
    : `avocado-flex__item`
  return (
    <StlyedFlexItem {...props} className={_className}>
      {children}
    </StlyedFlexItem>
  )
}

// define possible CSS properties for flex children
type FlexChildrenProps =
  | 'order'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis'
  | 'flex'
  | 'alignSelf'

// interface for managing FlexItem
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
  //   gap,
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

FlexItem.displayName = 'FlexItem'

export { FlexItem }
