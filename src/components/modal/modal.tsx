import React, { FC } from 'react'
import { Dialog } from '@headlessui/react'

// const { Description, Overlay, Title } = Dialog

const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
  //   destroy,
  initialFocus,
  unmount,
  as
}) => {
  return (
    <Dialog
      onClose={onClose}
      //   static={destroy}
      unmount={unmount}
      as={as}
      initialFocus={initialFocus}
      open={open}
    >
      {children}
    </Dialog>
  )
}

type ModalProps = PrimitiveModalProps

interface PrimitiveModalProps {
  open: boolean | undefined
  onClose: (item: false) => void
  destroy?: boolean
  unmount?: boolean
  as?: React.ElementType<any>
  initialFocus?: React.MutableRefObject<any>
}

export { Modal }
