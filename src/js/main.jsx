import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let root = ReactDOM.createRoot(documentById('root'));

let contador = 0
setInterval(()=>{
  
let one = Math.floor((contador/1)10%)
contador+1;
},1000)

root.render(
    <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
