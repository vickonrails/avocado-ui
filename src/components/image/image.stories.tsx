import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from '@emotion/styled'

import { Image, ImageProps, Text } from '../../components'

export default {
  title: 'Components/Image',
  component: Image
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

const altText = `Natural Vegetation`
const imgSrc = `https://images.unsplash.com/photo-1605639227732-f95a6ace02ea?w=500`

export const Default = Template.bind({})
Default.args = {
  src: imgSrc,
  alt: altText
}

export const Sizes = () => (
  <>
    <div>
      <Image alt={altText} src={imgSrc} size='xs' />
      <Text>Extra Small Image (xs)</Text>
    </div>
    <div>
      <Image alt={altText} src={imgSrc} size='sm' />
      <Text>Small Image (sm)</Text>
    </div>
    <div>
      <Image alt={altText} src={imgSrc} size='md' />
      <Text>Medium Sized Image (md)</Text>
    </div>

    <div>
      <Image alt={altText} src={imgSrc} size='lg' />
      <Text>Large Sized Image (lg)</Text>
    </div>

    <div>
      <Image alt={altText} src={imgSrc} size='xl' />
      <Text>Extra Large Image (xl)</Text>
    </div>
  </>
)

export const Shapes = () => (
  <>
    <div>
      <Image alt={altText} src={imgSrc} shape='curve' />
      <Text>Curved Edged Image</Text>
    </div>
    <div>
      <Image alt={altText} src={imgSrc} shape='round' />
      <Text>Round Edged Image</Text>
    </div>
    <div>
      <Image alt={altText} src={imgSrc} shape='square' />
      <Text>Square Edged Image</Text>
    </div>
  </>
)

export const ImageCaptions = () => (
  <>
    <ImageContainer>
      <Image
        alt={altText}
        src={imgSrc}
        shape='curve'
        caption='This is an Image caption'
        captionPosition='bottomLeft'
      />
    </ImageContainer>
    <ImageContainer>
      <Image
        alt={altText}
        src={imgSrc}
        shape='curve'
        caption='This is an Image caption'
        captionPosition='bottomCenter'
      />
    </ImageContainer>
    <ImageContainer>
      <Image
        alt={altText}
        src={imgSrc}
        shape='curve'
        caption='This is an Image caption'
        captionPosition='bottomRight'
      />
    </ImageContainer>
    <ImageContainer>
      <Image
        alt={altText}
        src={imgSrc}
        shape='curve'
        caption='This is an Image caption'
        captionPosition='topLeft'
      />
    </ImageContainer>
    <ImageContainer>
      <Image
        alt={altText}
        src={imgSrc}
        shape='curve'
        caption='This is an Image caption'
        captionPosition='topCenter'
      />
    </ImageContainer>
    <ImageContainer>
      <Image
        alt={altText}
        src={imgSrc}
        shape='curve'
        caption='This is an Image caption'
        captionPosition='topRight'
      />
    </ImageContainer>
  </>
)

const ImageContainer = styled.div`
  margin-bottom: 2em;
  padding-bottom: 1em;
  max-width: 500px;
  border-bottom: 1px solid #ddd;
`
