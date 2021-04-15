import React from 'react'
import { Image } from 'avocado-ui'

import ImgURL from '../images/demo-img.jpeg'

const ImageDemo = () => {
  return (
    <div>
      <Image src={ImgURL} size='xs' alt='Alternative text' shape='curve' />
      <Image src={ImgURL} alt='Alternative text' shape='round' size='sm' />
      <Image src={ImgURL} alt='Alternative text' shape='square' size='md' />
      <Image src={ImgURL} alt='Alternative text' shape='curve' size='lg' />
      <Image src={ImgURL} alt='Alternative text' shape='round' size={300} />
      <Image src={ImgURL} alt='Alternative text' shape='round' size='xl' />
    </div>
  )
}

export { ImageDemo }
