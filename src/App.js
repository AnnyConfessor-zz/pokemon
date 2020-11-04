import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import List from 'screens/List'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={List} />
                </Switch>
            </Router>
        </div>
    )
}

export default App