import React, { Component } from "react"
import { Link } from "react-router-dom"
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "demo@example.com",
            password: "12345",
            loading: false
        }
    }


    render() {
        return (
            <div className="auth-form-light text-left p-5 animated fadeIn">
                <div className="brand-logo">
                    <h1 className="text-center" style={{color: '#da8cff'}}></h1>
                </div>
                <h4>Hello! let's get started</h4>
                <form className="pt-3">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="email" id="email"
                            placeholder="Email" />

                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            name="password"
                            id="password"
                            placeholder="Password" />
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-block btn-primary" >
                            SIGN IN
                        </button>
                    </div>

                    <div className="text-center mt-4 font-weight-light"> Don't have an account? <Link to='/registration' className="text-primary">Create</Link >
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
