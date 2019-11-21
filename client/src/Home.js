import React, { Component } from "react";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Jumbotron, Container } from 'reactstrap';
import API from "./utils/API"
import fire from './config/Fire'


class ValidatedLoginForm extends Component {
    constructor(props) {
        super(props)
        this.login=this.login.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.signup=this.signup.bind(this)
        // this.handleChange=this.handleChange.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    }

    signup(e){
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }


    getUsers = () => {
        API.getUsers()
        .then(function(res){
            return(res)
        })
    }

    render() {
        return (
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("submitting")
                }}

                validationSchema={Yup.object().shape({

                    email: Yup.string()
                        .email()
                        .required("required"),
                    password: Yup.string()
                        .required("required")
                        .min(10, "Password is not long enough. Minimum is 10 chars.")
                        .matches(/(?=.*[0-9])/, "Password must contain a number")
                })}
            >

                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                    return (
                        <div style={{backgroundColor: "#006494", height: "100%"}}>
                            <Jumbotron fluid style={{backgroundColor: "#247ba0", border: "1px solid #23001e", boxShadow: "0 0 1em 5px black",  textShadow: "1px 1px 1px gray", textAlign: "center"}}>
                                <Container fluid>
                                    <h1 className="display-3"><strong>THE RULES</strong></h1>
                                    <hr></hr>
                                    <ul>
                                        <h3><strong>Don't break stuff</strong></h3>
                                        <h4><strong>Don't steal stuff</strong></h4>
                                        
                                        <h2><strong >LEAVE NO TRACE</strong></h2>
                                    </ul>
                                </Container>
                            </Jumbotron>
                            <h1 style={{textAlign: "center"}}>Log in</h1>
                            <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
                                <label htmlFor="email">email</label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email && touched.email && "error"}
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}
                                <br></br>
                                <label htmlFor="email">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "error"}
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                <div>
                                    <button type="submit" onClick={this.login} disabled={isSubmitting}>Login</button>
                                    <button type="submit" onClick={this.signup} disabled={isSubmitting}>Sign Up</button>
                                    
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Formik>
            
        )
    }

};

export default ValidatedLoginForm;
