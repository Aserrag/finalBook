import React from 'react'

import { slider1,slider2,slider3,slider4,slider5 } from '../../assets/img';
import { Carousel } from 'flowbite-react';




function Col() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-685">
        <Carousel slideInterval={2000}>
          <img src={slider1} alt="..." />
          <img src={slider2} alt="..." />
          <img src={slider3} alt="..." />
          <img src={slider4} alt="..." />
          <img src={slider5} alt="..." />

        </Carousel>
      </div>
    )
}

export default Col