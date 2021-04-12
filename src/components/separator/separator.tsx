import React from 'react'
import styled from '@emotion/styled'

const Separator: React.FC = () => {
  return <StyledHr />
}

const StyledHr = styled.hr<any>`
  background: ${({ theme }) => theme.colors.primary};
`

export { Separator }
