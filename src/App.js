import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import List from 'screens/List'
import Filter from 'screens/List/components/Filter'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route exact path="/filters" component={Filter} />
                </Switch>
            </Router>
        </div>
    )
}

export default App