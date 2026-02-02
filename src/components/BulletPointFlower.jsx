import React from 'react'
import { flowerLogo } from '../assets/assets'

const BulletPointFlower = () => {
  return (
    <div className="shrink-0 w-6 h-7 sm:w-7 sm:h-8 overflow-hidden">
      <img
        src={flowerLogo}
        alt=""
        className="w-full h-full object-cover object-center"
      />
    </div>
  )
}

export default BulletPointFlower
