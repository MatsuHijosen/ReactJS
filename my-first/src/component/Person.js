import React from 'react'

function Person({namee}) {
  return (
    <div>
      <h2>I am {namee.name}, I am {namee.age}</h2>
    </div>
  )
}

export default Person
