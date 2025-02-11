import React from 'react'

function ChildComponent(props) {
  return (

    <div>
        <button onClick = {() => props.age("child")}>Greet Parent</button>
      
    </div>
  )
}

export default ChildComponent
