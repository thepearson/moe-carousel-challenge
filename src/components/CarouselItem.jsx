import './CarouselItem.css'
import React from 'react'
import { useTransition, animated } from 'react-spring'



export default function CarouselItem(props) {

  const transitions = useTransition({}, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    reverse: false,
    reset: true
  })

  return transitions(
    ({opacity}) => {
      return <animated.div className={props.position} style={{ opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }) }}>
        <a title={`${props.title} link`} href={props.url} className="carousel-item">
          <img className="carousel-image" src={props.image} alt={props.title} />
          <div className="carousel-overlay">
            <h2>{props.title}</h2>
          </div>
        </a>
      </animated.div>
    }
  )
}
