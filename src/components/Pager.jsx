import './Pager.css'
import React from 'react'

export default function Pager(props) {
  return (
    <>
      <ul className="pager">
        <li>
          <button onClick={(e) => props.handleIndexUpdate((props.currentIndex === 0) ? props.size - 1 : props.currentIndex - 1)} className="chevron left"></button>
        </li>
        {Array(props.size).fill(0).map((_, i) => <li key={`pager${i}`}><button onClick={(e) => props.handleIndexUpdate(i)} className={(props.currentIndex === i) ? 'pager-button current' : 'pager-button'}>  </button></li>)}
        <li>
          <button onClick={(e) => props.handleIndexUpdate((props.currentIndex === (props.size - 1)) ? 0 : props.currentIndex + 1)}className="chevron right"></button>
        </li>
      </ul>
      
    </>
  )
}
