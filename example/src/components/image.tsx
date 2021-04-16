import React from 'react'
import { Image } from 'avocado-ui'

import ImgURL from '../images/demo-img.jpeg'

const imageCaption = 'Some New Caption'
const ImageDemo = () => {
  return (
    <div>
      <Image
        src={ImgURL}
        size='xs'
        alt='Alternative text'
        shape='curve'
        objectFit='contain'
        className='img'
        caption={imageCaption}
        captionPosition='topLeft'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='round'
        size='sm'
        objectFit='cover'
        className='img'
        caption={imageCaption}
        captionPosition='topCenter'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='square'
        size='md'
        objectFit='fill'
        className='img'
        caption={imageCaption}
        captionPosition='topRight'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='curve'
        size='lg'
        objectFit='none'
        className='img'
        caption={imageCaption}
        captionPosition='bottomLeft'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='round'
        size={300}
        objectFit='scale-down'
        className='img'
        caption={imageCaption}
        captionPosition='bottomCenter'
      />
      <Image
        src={ImgURL}
        alt='Alternative text'
        shape='round'
        size='xl'
        className='img'
        caption={imageCaption}
        captionPosition='bottomRight'
        captionSpacing={20}
      />
    </div>
  )
}

export { ImageDemo }
