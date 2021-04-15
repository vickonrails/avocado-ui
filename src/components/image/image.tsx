import React, { FC, ImgHTMLAttributes } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Shape } from '../../utils/types'
import { imageTheme } from '../theme/components/image.theme'

// TODO: Research more on accessibility for caption and images
const Image: FC<ImageProps> = (props) => {
  return <StyledImage {...props} />
}

// FIXME: Make Size object uniform across the design system
type ImageSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * specifies the size of the image. Can be either "xs", "sm", "md", "lg"
   * Overrides the height & width prop
   */
  size?: ImageSize | number

  /**
   * Customize the shape of the Image borders. You can specify any of "round", "curve" or "square"
   */
  shape?: Shape

  /**
   * Set a caption to be displayed at different positions around the image
   */
  caption?: string

  /**
   * specify the position for the caption text
   */
  captionPosition?:
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
}

const StyledImageCSS = ({ size, shape }: ImageProps) =>
  shape &&
  size &&
  css`
    border-radius: ${imageTheme.borders[shape]};
    height: ${typeof size === 'number' ? `${size}px` : imageTheme.size[size]};
    width: ${typeof size === 'number' ? `${size}px` : imageTheme.size[size]};
  `

const StyledImage = styled.img`
  ${StyledImageCSS}
`

Image.defaultProps = {
  size: 'md',
  shape: 'square'
}

export { Image }
