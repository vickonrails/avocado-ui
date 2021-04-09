import React from 'react'
import { Button } from '@avocado-ui/react'
import { Link } from 'gatsby'
import { ScreenContainer } from 'smooth-doc/components'
import styled from '@emotion/styled'

import PatternBackground from '../images/hero-background.jpg'

const HomePage = () => {
  return (
    <StyledHeader>
      <ScreenContainer>
        <div className='header-container'>
          <section>
            <h1>Build Accessible, Themeable interfaces with ease.</h1>
            <p>
              Avocado-ui is an experimental design system for building
              accessible, themeable and beautiful interfaces with ease.
            </p>
            <Link to='/docs/getting-started'>
              <Button>Get Started</Button>
            </Link>
          </section>
          <section>
            <img src={PatternBackground} alt='Abstract pattern' />
          </section>
        </div>
      </ScreenContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  img {
    width: 100%;
  }
  .header-container {
    display: flex;
    flex-direction: column;

    > * {
      flex: 1;
    }
  }

  @media (min-width: 760px) {
    .header-container {
      flex-direction: row;
    }
  }
`

export default HomePage
