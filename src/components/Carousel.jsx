import './Carousel.css'
import React from 'react'
import { useState, useRef } from 'react'
import CarouselItem from './CarouselItem'
import Pager from './Pager'

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(props.defaultIndex || 0)
  const nodeRef = useRef(null)

  const updateIndex = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <h1>A Carousel</h1>
      <div className='carousel' ref={nodeRef}>
        {/* <CarouselItem position="prevItem" key="prevItem" {...props.items[(currentIndex === 0) ? (props.items.length - 1) : currentIndex - 1]} />   */}
        <CarouselItem position="currentItem" key="currentItem" {...props.items[currentIndex]} />  
        {/* <CarouselItem position="nextItem" key="nextItem" {...props.items[(currentIndex === (props.items.length - 1)) ? 0 : currentIndex + 1]} />   */}
      </div>
      <Pager size={props.items.length} currentIndex={currentIndex} handleIndexUpdate={updateIndex} />
    </>
  )
}
