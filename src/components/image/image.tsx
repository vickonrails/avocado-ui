import React, { FC, HTMLAttributes, ImgHTMLAttributes } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Shape } from '../../utils/types'
import { imageTheme } from '../theme/components/image.theme'
import { getFigureAlignment } from '../../utils/image'

// TODO: Research more on accessibility for caption and images
const Image: FC<ImageProps> = ({
  caption,
  captionPosition,
  className,
  captionSpacing,
  ...props
}) => {
  const _className = className ? `avocado-img ${className}` : `avocado-img`
  const position = captionPosition?.startsWith('top') ? 'top' : 'bottom'
  // Render just default img element if caption is not present
  if (!caption) return <StyledImage {...props} className={_className} />

  return (
    <StyledFigure
      captionPosition={captionPosition}
      className='avocado-img__figure'
      maxWidth={props.size}
    >
      {/* Use the style attribute here because it's just easier */}
      {/* Logic to determine vertical position of image caption */}
      {position === 'top' && (
        <figcaption
          className='avocado-img__figcaption'
          style={{ marginBottom: `${captionSpacing}px` }}
        >
          {captionPosition}
        </figcaption>
      )}
      <StyledImage {...props} className={_className} />
      {position === 'bottom' && (
        <figcaption
          className='avocado-img__figcaption'
          style={{ marginTop: `${captionSpacing}px` }}
        >
          {captionPosition}
        </figcaption>
      )}
    </StyledFigure>
  )
}

// FIXME: Make Size object uniform across the design system
type ImageSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// values for the object-fit CSS property
type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

// types for different positions of the image caption
export type CaptionPosition =
  | 'topLeft'
  | 'topRight'
  | 'topCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'bottomCenter'
interface FigureProps extends HTMLAttributes<HTMLElement> {
  /**
   * Vertical position to place text caption
   */
  captionPosition?: CaptionPosition

  /**
   * max-width of the figure element
   */
  maxWidth?: ImageSize | number
}
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

  captionPosition?: CaptionPosition

  /**
   * specify the fit of the image. Corresponds to the object-fit CSS property
   */
  objectFit?: ObjectFit

  /**
   * spacing between the image and the figure element
   */

  captionSpacing?: number
}

const StyledImageCSS = ({ size, shape, objectFit }: ImageProps) =>
  shape &&
  size &&
  css`
    border-radius: ${imageTheme.borders[shape]};
    height: ${typeof size === 'number' ? `${size}px` : imageTheme.size[size]};
    width: ${typeof size === 'number' ? `${size}px` : imageTheme.size[size]};
    object-fit: ${objectFit};
  `

const StyledImage = styled.img`
  ${StyledImageCSS}
`

const StyledFigureCSS = ({ captionPosition, maxWidth }: FigureProps) =>
  captionPosition &&
  maxWidth &&
  css`
    figcaption {
      text-align: ${getFigureAlignment(captionPosition)};
    }
    display: inline-block;
    max-width: ${typeof maxWidth === 'number'
      ? `${maxWidth}px`
      : imageTheme.size[maxWidth]};
  `

const StyledFigure = styled.figure`
  ${StyledFigureCSS}
`

Image.defaultProps = {
  size: 'md',
  shape: 'square',
  objectFit: 'fill',
  captionPosition: 'bottomCenter'
}

Image.displayName = 'Image'

export { Image }
