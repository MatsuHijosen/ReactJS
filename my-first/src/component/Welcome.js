import React from "react";
const Welcome = () => {

    // with JSX
    // return (
    //     <div> className =  'ewan'
    //         <h1>Welcome Justin</h1>
    
    //     </div>
    // )

    // without JSX
    return React.createElement('div', {id: 'Welcome', className: 'ewan'}, React.createElement('h1', null, 'Welcome Justins'));
};

export default Welcome;
