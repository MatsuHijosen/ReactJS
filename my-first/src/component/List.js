import React from 'react'
import Person from './Person'


function List() {

    const names = ['Bruce', 'Clark', 'Diana']

    const namelist = names.map((name, index )=> <h2 key = {index}>{index}{name}</h2>)

  return <div>{namelist}</div>
  
}

// function List() {

//     const names = [{
//         name: 'Bruce',
//         age: 30
//     },{
//         name: 'Clark',
//         age: 25
//     },{
//         name: 'Diana',
//         age: 28
//     }]

//     const namelist = names.map(namee => <Person key =  {namee.name} namee = {namee} />)

//   return <div>{namelist}</div>
  
// }

export default List
