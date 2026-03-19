import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import '../styles/trafficlight.css'

// components
import Trafficlight from './components/trafficlight';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Trafficlight/>
  </React.StrictMode>,
)
