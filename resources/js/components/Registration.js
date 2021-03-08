import React, { Component } from "react"
import { Link } from "react-router-dom"
import LoadingOverlay from "react-loading-overlay"
import BeatLoader from "react-spinners/BeatLoader";


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


    onChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }


    render () {
        return (
            <>
                <LoadingOverlay
                    active={this.state.loading}
                    spinner={<BeatLoader />}
                    style={{
                        overlay: (base) => ({
                            ...base,
                            opacity: "0.5",
                            filter: "alpha(opacity=50)",
                            background: "white"
                        })
                }}/>
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
                                placeholder="Full Name"
                                name="name"
                                id="name"
                                value={this.state.name}
                                onChange={this.onChangeHandler}/>
                        </div>


                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Email Address" />
                        </div>


                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Confirm Password"/>
                        </div>

                        <div className="mt-3">
                            <button
                                className="btn btn-block btn-primary"
                            >SIGN UP</button>
                        </div>

                        <div className="text-center mt-4 font-weight-light"> Already have an account? <Link to='/login' className="text-primary">Login</Link></div>
                    </form>
                </div>
            </>
        )
    }
}


export default Registration
