import React from 'react'
//import { useState } from 'react';
import CarouselItem from './CarouselItem';

export default function Carousel(props) {
  
  return (
    <div>
      <h1>A Carousel</h1>
      {props.items.map(item => <CarouselItem title={item.title} image={item.image} />)}
    </div>
  )
}
