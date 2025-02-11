import React from "react";

// function Greet() {
//   return <h1>Hello Worldss</h1>;
// }

const Greet = props =>  {
    const {name, courseName} = props
    return (
        <div>
            <h1>Hello {name} take {courseName}</h1>
            
        </div>
    )};
export default Greet;