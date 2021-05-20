import React, { ElementType, FC, HTMLAttributes } from 'react'
import { Dialog } from '@headlessui/react'

const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
  //   destroy,
  initialFocus,
  unmount,
  as,
  ...props
}) => {
  return (
    <Dialog
      onClose={onClose}
      //   static={destroy}
      unmount={unmount}
      as={as}
      initialFocus={initialFocus}
      open={open}
      {...props}
    >
      {children}
    </Dialog>
  )
}

type ModalProps = PrimitiveModalProps & HTMLAttributes<HTMLElement>

interface PrimitiveModalProps {
  open: boolean | undefined
  onClose: (item: false) => void
  destroy?: boolean
  unmount?: boolean
  as?: React.ElementType<any>
  initialFocus?: React.MutableRefObject<any>
}

const ModalTitle: FC<ModalTitleProps> = ({ children, as, ...props }) => {
  const { Title } = Dialog
  return (
    <Title as={as} {...props}>
      {children}
    </Title>
  )
}

const ModalOverlay: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  const { Overlay } = Dialog
  return <Overlay {...props}>{children}</Overlay>
}

interface ModalTitleProps {
  as: ElementType<any>
}

const ModalContent: FC<ModalContentProps> = ({ as, children, ...props }) => {
  const { Description } = Dialog
  return (
    <Description {...props} as={as}>
      {children}
    </Description>
  )
}

interface ModalContentProps {
  as: ElementType<any>
}

export { Modal, ModalTitle, ModalOverlay, ModalContent }
