import './Carousel.css'
import React from 'react'
import { useState } from 'react'
import Pager from './Pager'
import { useTransition, animated, config } from 'react-spring'

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(props.defaultIndex || 0)

  const transitions = useTransition(props.items[currentIndex], {
    keys: item => item.id,
    from: { 
      //opacity: 0,
      marginLeft: "25rem" 
    },
    enter: { 
      //opacity: 1,
      marginLeft: "0" 
    },
    leave: { 
      //opacity: 0,
      marginLeft: "-25rem" 
    },
    config: config.default,
  })

  const updateIndex = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <h1>A Carousel</h1>
      <div className='carousel'>
      {transitions((props, item)  => (
        <animated.div className="items"
          key={item.id}
          style={{...props}}>
          <a title={`${item.title} link`} href={item.url} className="carousel-item">
            <img className="carousel-image" src={item.image} alt={item.title} />
            <div className="carousel-overlay">
              <h2>{item.title}</h2>
            </div>
          </a>
        </animated.div>
      ))}
      </div>
      <Pager size={props.items.length} currentIndex={currentIndex} handleIndexUpdate={updateIndex} />
    </>
  )
}
