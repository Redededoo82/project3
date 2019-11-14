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


import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText, CardDeck, CardGroup, CardSubtitle, CardBody } from 'reactstrap';


    render() {
        return (
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("submitting")
                }}


const ValidatedLoginForm = () => (
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
                <div>
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

                    </form>

                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </Container>
                    </Jumbotron>
                    
                    <h1>Action Shots</h1>        
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting taxt below as a lead in to additonal information...</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting taxt below as a lead in to additonal information...</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting taxt below as a lead in to additonal information...</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>

                    <h1>Lost & Found</h1>
                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This card has supporting text below as a natural lead in to additional content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This card has supporting text below as a natural lead in to additional content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This card has supporting text below as a natural lead in to additional content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </CardDeck>
                    <h1>Follow the Artists</h1>
                </div>
            );
        }}


};

export default ValidatedLoginForm;





