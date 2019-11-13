import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';
import API from "./utils/API"

class ValidatedSignUpForm extends Component {

    postUser = (username, password, email) => {
        API.newUser(username, email, password)
    }



    render() {
        return (
            <Formik
                initialValues={{ email: "", password: "", username: "" }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("submitting")
                    console.log(values)
                    console.log(setSubmitting)
                    this.postUser(values.username, values.password, values.email)
                }}

                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required("required"),
                    password: Yup.string()
                        .required("required")
                        .min(10, " Minimum is 10 chars.")
                        .matches(/(?=.*[0-9])/, " Must contain a number"),
                    username: Yup.string()
                        .required("required")


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
                        <div>
                            <h1>Sign Up</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    value={values.email}
                                    onChange={handleChange}
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
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "error"}
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                <br></br>
                                <label htmlFor="email">username</label>
                                <input
                                    name="username"
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

                                <button type="submit" disabled={isSubmitting}>SignUp</button>
                            </form>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    I am over the age of 18. I promise.
                                </Label>
                            </FormGroup>
                        </div>
                    );
                }}

            </Formik>
        )
    }

};

export default ValidatedSignUpForm;