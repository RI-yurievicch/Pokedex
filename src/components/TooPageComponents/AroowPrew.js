import React from 'react'
import './index.scss'

const AroowPrew = ({ prevPoke }) => {
  return (
    <div className="arrow-1" onClick={prevPoke}>
      <div className="arrow-1-top"></div>
      <div className="arrow-1-bottom"></div>
    </div>
  )
}

export default AroowPrew
