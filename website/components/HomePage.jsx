import React from 'react'
import { Button } from '@avocado-ui/react'
import { Link } from 'gatsby'
import { ScreenContainer } from 'smooth-doc/components'

import PatternBackground from '../images/hero-background.jpg'

const HomePage = () => {
  return (
    <header>
      <ScreenContainer>
        <section>
          <h1>Build Accessible, Themeable interfaces with ease.</h1>
          <p>
            Avocado-ui is an experimental design system for building accessible,
            themeable and beautiful interfaces with ease.
          </p>
          <Link to='/docs/getting-started'>
            <Button>Get Started</Button>
          </Link>
        </section>
        <section>
          <img src={PatternBackground} alt='Abstract pattern' />
        </section>
      </ScreenContainer>
    </header>
  )
}

export default HomePage
