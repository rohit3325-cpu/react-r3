

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function MyApp(){
        return(
                <div>
                        <h1>Custom App!</h1>
                </div>
        )
}

// const ReactElement = {
//         type: 'a',
//         props: {
//             href:'https://google.com',
//             target: '_blank'
//         },
//         children: 'Click me to visit google'
//     }


const AnotherElement = (
       <a href="https://google.com" target='_blank'>Visit Google </a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
        'a',
        {href: 'https://google.com', target: '_blank'},
        'click me to visut google',
        anotherUser
         
)
ReactDOM.createRoot(document.getElementById('root')).
render(
   
      reactElement
   
)

// in React.createElement(
//         1st it html Element(a,h1,package,...)
//         2nd it is properties that we want to show
//         3rd is the children part 
//         4th is the rest variable name
// )
// bable inject this reactElement.reactElement