import React from 'react'
import styled from '@emotion/styled'
import { Story, Meta } from '@storybook/react'

import { Card, CardProps } from '../../components'

export default {
  title: 'Components/Card',
  component: Card
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Flexible Button'
}

// Card with padding
export const WithPadding = () => (
  <StyledCardContainer>
    <Card p={50}>This is a card with padding of 50px. How does it look?</Card>
    <Card p={30}>This is a card with padding of 30px. How does it look?</Card>
    <Card pl={30} pr={30}>
      This is a card with left and right padding of 30px. How does it look?
    </Card>
    <Card pt={10} pb={30}>
      This is a card with top and bottom padding of 10px and 30px respectively.
      How does it look?
    </Card>
  </StyledCardContainer>
)

// Card Width
export const Width = () => (
  <StyledCardContainer>
    <Card fullWidth>This is a card component with full width.</Card>
    <Card width='50%'>
      This is a card component with width of 50% of the container.
    </Card>
    <br />
    <Card width='50px'>This is a card component with width of 50px.</Card>
  </StyledCardContainer>
)

// Card with Background
export const Background = () => (
  <StyledCardContainer>
    <Card bgColor='milk' p={10}>
      Card component with background color of milk.
    </Card>
    <br />
    <Card bgColor='#ddd' p={10}>
      Card component with background color of #ddd.
    </Card>
    <br />
    <Card bgColor='magenta' p={10}>
      Card component with background color of magenta.
    </Card>
  </StyledCardContainer>
)

// Shadows
export const Shadows = () => (
  <StyledCardContainer>
    <Card showShadow>Card component with background color of milk.</Card>
    <br />
    <Card p={10} showShadow>
      Card component with background color of #ddd.
    </Card>
    <br />
    <Card p={10} showShadow>
      Card component with background color of magenta.
    </Card>
  </StyledCardContainer>
)

// border radius
export const BorderRadius = () => (
  <StyledCardContainer>
    <Card p={8}>Card component with no border-radius.</Card>
    <br />
    <Card br={4} p={8}>
      Card component with border-radius of 4px.
    </Card>
    <br />
    <Card br={8} p={8}>
      Card component with border-radius of 8px.
    </Card>
  </StyledCardContainer>
)

const StyledCardContainer = styled.div`
  .avocado-card {
    margin-bottom: 1em;
  }
`
