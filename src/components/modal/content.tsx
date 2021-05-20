import React, { FC, ElementType, HTMLAttributes } from 'react'
import { Dialog } from '@headlessui/react'
import styled from '@emotion/styled'

const { Description } = Dialog

// Wraps around Modal Content
const ModalContent: FC<ModalContentProps> = ({
  as,
  className,
  children,
  ...props
}) => {
  const _className = className
    ? `avocado-modal__content ${className}`
    : `avocado-modal__content`
  return (
    <StyledModalContent {...props} as={as || 'div'} className={_className}>
      {children}
    </StyledModalContent>
  )
}

interface ModalContentProps extends HTMLAttributes<HTMLElement> {
  /**
   * as - specifies the html element the component should be rendered as
   */
  as?: ElementType<any>
}

const StyledModalContent = styled<any>(Description)`
  background: white;
  margin: 0 auto;
  max-width: 500px;
  padding: 1em;
  border-radius: 4px;
  border-bottom: 1px solid red;
`

export { ModalContent }
