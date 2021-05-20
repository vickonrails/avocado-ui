import React, { FC, HTMLAttributes } from 'react'
import { Dialog } from '@headlessui/react'
import styled from '@emotion/styled'

const { Overlay } = Dialog

/**
 * Dims out entire background when modal is open
 */
const ModalOverlay: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  const _className = className
    ? `avocado-modal__overlay ${className}`
    : `avocado-modal__overlay`
  // just return Overlay from headlessui
  return (
    <StyledOverlay {...props} className={_className}>
      {children}
    </StyledOverlay>
  )
}

const StyledOverlay = styled<any>(Overlay)`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  left: 0;
  right: 0;
  z-index: -1;
`

export { ModalOverlay }
