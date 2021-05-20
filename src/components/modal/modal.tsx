import React, { ElementType, FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { Dialog } from '@headlessui/react'

/*
 *  Modal Component
 */

const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
  initialFocus,
  unmount,
  className,
  as,
  ...props
}) => {
  const _className = className ? `avocado-modal ${className}` : `avocado-modal`

  return (
    <StyledModal
      onClose={onClose}
      unmount={unmount}
      as={as || 'div'}
      initialFocus={initialFocus}
      open={open}
      {...props}
      className={_className}
    >
      {children}
    </StyledModal>
  )
}

type ModalProps = PrimitiveModalProps & HTMLAttributes<HTMLElement>

const StyledModal = styled<any>(Dialog)`
  position: 'fixed',
  zIndex: 10,
  width: '100%'
`

interface PrimitiveModalProps {
  /**
   * open - sets the state of the Dialog. Whether the Dialog is open or not.
   */
  open: boolean | undefined

  /**
   * onClose - function to execute while closing the Dialog
   */
  onClose: (item: false) => void

  /**
   * unmount - controls if the Dialog should be unmounted or hidden when closed
   */
  unmount?: boolean

  /**
   * as - specifies the html element the component should be rendered as
   */
  as?: ElementType<any>

  /**
   * initialFocus - control the element that receives focus once the modal is open. Only elements in the tab order can be focused.
   */
  initialFocus?: React.MutableRefObject<any>
}

export { Modal }
