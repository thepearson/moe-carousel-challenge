import React from 'react'

export default function CarouselItem(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
    </>
    
  )
}
