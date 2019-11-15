import React, { Component } from "react";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Jumbotron, Container } from 'reactstrap';
import API from "./utils/API"
class ValidatedLoginForm extends Component {
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

                    username: Yup.string()
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
                            <Jumbotron fluid style={{backgroundColor: "#247ba0", border: "1px solid #23001e"}}>
                                <Container fluid>
                                    <h1 className="display-3"><strong>THE RULES</strong></h1>
                                    <ul>
                                        <li><strong>Don't break stuff</strong></li>
                                        <li><strong>Don't steal stuff</strong></li>
                                        <li><strong>Don't be a dick</strong></li>
                                        <li><strong style={{fontSize: "24px"}}>LEAVE NO TRACE</strong></li>
                                    </ul>
                                </Container>
                            </Jumbotron>
                            <h1>Log in</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">username</label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Enter your username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.username && touched.username && "error"}
                                />
                                {errors.username && touched.username && (
                                    <div className="input-feedback">{errors.username}</div>
                                )}
                                <br></br>
                                <label htmlFor="email">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "error"}
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                <div>
                                    <button type="submit" disabled={isSubmitting}>Login</button>
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
