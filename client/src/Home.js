import React from "react";

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Jumbotron, Container} from 'reactstrap';


const ValidatedLoginForm = () => (
  <Formik
      initialValues = {{email: "", password:""}}
      onSubmit= {(values, {setSubmitting}) => {
          console.log("submitting")
      }}
      
      validationSchema ={Yup.object().shape({
          
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
           return(
            <div>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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
              onBlur = {handleBlur}
              className = {errors.username && touched.username && "error"}
              />

              {errors.username && touched.username && (
                  <div className= "input-feedback">{errors.username}</div>
              )}
                  <br></br>
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

export default ValidatedLoginForm;





