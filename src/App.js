import React from 'react'
import { 
    Profile,
    Details
} from './screens/index'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route extract path="/profile" component={Profile}/>
                    <Route extract path="/details" component={Details}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App