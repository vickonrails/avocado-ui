import React, { ElementType, FC, HTMLAttributes } from 'react'
import { Dialog } from '@headlessui/react'
import styled from '@emotion/styled'

import colors from '../theme/colors'

// Modal Title
const { Title } = Dialog

const ModalTitle: FC<ModalTitleProps> = ({
  children,
  className,
  as,
  ...props
}) => {
  const _className = className
    ? `avocado-modal__title ${className}`
    : `avocado-modal__title`

  return (
    <StyledTitle as={as} {...props} className={_className}>
      {children}
    </StyledTitle>
  )
}

interface ModalTitleProps extends HTMLAttributes<HTMLElement> {
  /**
   * as - specifies the html element the component should be rendered as
   */

  as?: ElementType<any>
}

const StyledTitle = styled<any>(Title)`
  font-weight: 700;
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${colors.gray[4]};
`

export { ModalTitle }
