import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const ValidatedSignUpForm = () => (
    <Formik
        initialValues = {{email: "", password:""}}
        onSubmit= {(values, {setSubmitting}) => {
            console.log("submitting")
        }}
        
        validationSchema ={Yup.object().shape({
            email: Yup.string()
            .email()
            .required("required"),
            password: Yup.string()
            .required("required")
            .min(10, " Minimum is 10 chars.")
            .matches(/(?=.*[0-9])/, " Must contain a number")
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
             return(
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
                onBlur = {handleBlur}
                className = {errors.email && touched.email && "error"}
                />

                {errors.email && touched.email && (
                    <div className= "input-feedback">{errors.email}</div>
                )}

                <label htmlFor="email">Password</label>
                <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur = {handleBlur}
                className = {errors.password && touched.password && "error"}
                />
                 {errors.password && touched.password && (
                    <div className= "input-feedback">{errors.password}</div>
                )}
                <button type="submit" disabled = {isSubmitting}>Login</button>
            </form>
            </div>
            );
        }}   
            
    </Formik>
);

export default ValidatedSignUpForm;