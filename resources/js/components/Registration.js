import React, { Component } from "react"
import { Link } from "react-router-dom"


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            loading: false,
        }
    }



    render () {
        return (
            <div className="auth-form-light text-left p-5 animated fadeIn">
                <div className="brand-logo">
                    <h1 className="text-center" style={{color: '#da8cff'}}>SITE NAME</h1>
                </div>
                <h4>New here?</h4>

                <form className="pt-3">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Full Name" />
                    </div>


                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Email Address" />
                    </div>


                    <div className="form-group">

                    </div>
                </form>
            </div>
        )
    }
}


export default Registration
