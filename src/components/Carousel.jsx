import React from 'react'
//import { useState } from 'react';
import CarouselItem from './CarouselItem';

export default function Carousel(props) {
  
  return (
    <>
      <h1>A Carousel</h1>
      <div className='carousel'>
        {props.items.map(item => <CarouselItem title={item.title} image={item.image} url={item.url} />)}
      </div>
    </>
  )
}
