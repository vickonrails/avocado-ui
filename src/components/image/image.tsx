import React, { FC, ImgHTMLAttributes } from 'react'
import { Shape } from '../../utils/types'

const Image: FC<ImageProps> = (props) => {
  return <img {...props} />
}

type ImageSize = 'xs' | 'sm' | 'md' | 'lg'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: ImageSize
  shape?: Shape
}

Image.defaultProps = {
  size: 'md'
}

export { Image }
