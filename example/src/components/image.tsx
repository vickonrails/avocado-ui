import React from 'react'
import { Image } from 'avocado-ui'

import ImgURL from '../images/demo-img.jpeg'

const ImageDemo = () => {
  return <Image src={ImgURL} height='200' width='200' alt='Alternative text' />
}

export { ImageDemo }
