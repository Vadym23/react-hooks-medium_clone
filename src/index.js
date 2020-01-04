import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
// import App from './App';

import Routes from 'routes'
import TopBar from 'components/topBar'

const App = () => {
    return (
        <div>
            {/* <h3>Welcome to hooks</h3> */}
            {/* Рендеринг роути */}
            <Router>
                <TopBar />
                <Routes />
            </Router>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
