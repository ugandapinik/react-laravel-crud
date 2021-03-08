require("../app")
import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import Login from "../components/Login"
import Registration from "../components/Registration"


class App extends Component {
    render() {
        return(
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div>
                                <Switch>
                                    <Route exact path='/login' component={Login} />
                                    <Route exact path='/registration' component={Registration} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"))
