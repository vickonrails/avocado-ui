import React from 'react'
import { Button } from '@avocado-ui/react'
import { Link } from 'gatsby'
import { GitHub, BookOpen } from 'react-feather'
import { ScreenContainer } from 'smooth-doc/components'
import styled from '@emotion/styled'

import PatternBackground from '../images/hero-background.jpg'

const HomePage = () => {
  return (
    <StyledHeader>
      <ScreenContainer>
        <div className='header-container'>
          <section className='about-avocado'>
            <h1>Build Accessible, Themeable interfaces with ease.</h1>
            <p>
              Avocado-ui is an experimental design system for building
              accessible, themeable and beautiful interfaces with ease.
            </p>
            <div className='btn-group'>
              <Link to='/docs/'>
                <Button prefixIcon={<BookOpen />}>Get Started</Button>
              </Link>
              <a
                href='https://github.com/vickOnRails/avocado-ui'
                target='_blank'
                rel='noopenner noreferrer'
              >
                <Button buttonType='ghost' prefixIcon={<GitHub />}>
                  Github
                </Button>
              </a>
            </div>
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

  h1 {
    font-size: 2em;
    line-height: 1.2;
    font-weight: 900;
    margin-bottom: 0.2em;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    align-items: center;

    .about-avocado {
      max-width: 600px;
    }

    > * {
      flex: 1;
      margin-bottom: 1em;
    }

    .btn-group > * {
      margin-right: 0.5em;
    }

    a {
      text-decoration: none;
    }
  }

  @media (min-width: 760px) {
    .header-container {
      flex-direction: row;
      > * {
        padding: 1em;
        margin: 0;
      }
    }
  }

  @media (min-width: 899px) {
    h1 {
      font-size: 3em;
    }
  }

  @media (min-width: 1334px) {
    h1 {
      font-size: 4em;
    }
  }
`

export default HomePage
