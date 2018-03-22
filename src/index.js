// External Depedencies
import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'

// Our Dependencies
import App from './views/app/App'
import registerServiceWorker from './registerServiceWorker'

// Style
import './index.css'

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

registerServiceWorker();
