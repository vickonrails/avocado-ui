import React from 'react'
import { Image } from 'avocado-ui'

import ImgURL from '../images/demo-img.jpeg'

const ImageDemo = () => {
  return (
    <div>
      <Image
        src={ImgURL}
        size='xs'
        alt='Alternative text'
        shape='curve'
        objectFit='contain'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='round'
        size='sm'
        objectFit='cover'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='square'
        size='md'
        objectFit='fill'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='curve'
        size='lg'
        objectFit='none'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='round'
        size={300}
        objectFit='scale-down'
      />
      <Image src={ImgURL} alt='Alternative text' shape='round' size='xl' />
    </div>
  )
}

export { ImageDemo }
