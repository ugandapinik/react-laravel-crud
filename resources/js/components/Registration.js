import React, { Component } from "react"
import { Link } from "react-router-dom"
import SimpleReactValidator from "simple-react-validator";
import LoadingOverlay from "react-loading-overlay"
import BeatLoader from "react-spinners/BeatLoader";
import * as Helpers from "../Helpers"


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

        this.validator = new SimpleReactValidator({
            autoForceUpdate: this,
            className: "small text-danger mdi mdi-alert",
            messages: {
                // email: This is not an email.
            },

            validators: {
                customShortPassword: {
                    // give a message that will display when there is an error. :attribute will be replaced by the name you supply in calling it.
                    message: "The :attribute must be longer than 4",
                    rule: function (val, params, validator){
                        if (val.length < 4){
                            return false
                        }

                        return true
                    }
                },

                confirmPassword: {
                    message: "The :attribute must be same be same as password",
                    rule: function (val, params, validator){
                        if (val !== params[0]){
                            return false
                        }

                        return true
                    }
                }
            }
        })

    }


    onSubmitHandler = (event) => {
        event.preventDefault()

        if (this.validator.allValid()){
            this.setState({
                loading: true
            })


            axios.post("/registration", $(event.target).serialize())
                .then(response => {
                    console.log(response)
                    this.setState({
                        loading: false,
                    })

                    if(response.data.status == "validation-error"){
                        console.log("Error Found")
                        var errorArray = response.data.message
                        $.each(errorArray, function (key, errors) {
                            $.each(errors, function (key, errorMessage) {
                                Helpers.showNotification({
                                    type: "error",
                                    message: errorMessage
                                })
                            })
                        })
                    } else if(response.data.status == "error"){
                        console.log("Error Found")
                        Helpers.showNotification({
                            type: "error",
                            message: response.data.message
                        })
                    }else if(response.data.status == "success"){
                        window.location = "/home"
                    }
                })
                .catch((error) => {
                this.setState({
                    loading: false
                });
                if (error.response.data.status == 'validation-error') {
                    var errorArray = error.response.data.message;
                    $.each( errorArray, function( key, errors ) {
                        $.each( errors, function( key, errorMessage ) {
                            Helpers.showNotification({
                                type : 'error',
                                message : errorMessage
                            });
                        });
                    });
                } else if (error.response.data.status == 'error') {
                    Helpers.showNotification({
                        type : 'error',
                        message : error.response.data.message
                    });
                }

            });


        }else {
            this.validator.showMessages()
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
                            background: "red"
                        })
                }}/>
                <div className="auth-form-light text-left p-5 animated fadeIn">
                    <div className="brand-logo">
                        <h1 className="text-center">SITE NAME</h1>
                    </div>
                    <h4>New here?</h4>

                    <form className="pt-3" onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Full Name"
                                name="name"
                                id="name"
                                value={this.state.name}
                                onChange={this.onChangeHandler}/>
                            {this.validator.message("Full Name", this.state.name, "required")}
                        </div>


                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Email Address"
                                name="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.onChangeHandler}/>
                            { this.validator.message("email", this.state.email, "required|email") }
                        </div>


                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Password"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.onChangeHandler}/>
                            {this.validator.message("password", this.state.password, "required|customShortPassword")}
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Confirm Password"
                                name="password_confirmation"
                                id="password_confirmation"
                                value={this.state.password_confirmation}
                                onChange={this.onChangeHandler}/>
                            { this.validator.message("confirm password", this.state.password_confirmation, "required|confirmPassword:" + this.state.password)}
                        </div>

                        <div className="mt-3">
                            <button
                                type="submit"
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
