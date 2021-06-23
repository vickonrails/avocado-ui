import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  const _className = className ? `avocado-link ${className}` : `avocado-link`

  return (
    <StyledLink className={_className} {...props}>
      {children}
    </StyledLink>
  )
}

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {}

const StyledLink = styled.a``

export { Link }
