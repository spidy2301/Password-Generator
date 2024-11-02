import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function MyApp(){
//   return(
  
//     <div>
//      <h1>hello chai</h1>
//      </div>
//   )
// }
// const another=(
//   <a href='https://google.com' target='_blank'>visit google</a>
// )
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to google'
)

createRoot(document.getElementById('root')).render(
    <App/>
)
