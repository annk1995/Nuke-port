import React from 'react'
import './card.css'

function card({children,className,onClick}) {
  return (
  <article className='card'>
    {children}

  </article>
  )
}

export default card