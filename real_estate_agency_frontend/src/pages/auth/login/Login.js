import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles.css';
import Logo from '../../../components/logo/Logo';
import { login } from '../../../services/authService';

class Login extends Component {

    componentWillMount() {
        const token = localStorage.getItem('token');
        if(token) {
            this.props.history.push('/admin');
        }

    }
    render() {
        const { history } = this.props;
        
        return ( 
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    login(values)
                        .then(res => {
                            if(res.data.auth) {
                                localStorage.setItem('token', res.data.token);
                                history.push('/admin');
                            }
                            setSubmitting(false);
                        })
                        .catch(function (error) {
                            console.log(error);
                            setSubmitting(false);
                        });
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="form-signin text-center" >
                    <div className="my-5">
                        <Logo />
                    </div>
                    <h1 className="h3 mb-3 font-weight-normal">Admin Log In</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <Field className="form-control" type="text" name="email" />
                    <ErrorMessage className="text-danger" name="email" component="div" />

                    <label htmlFor="inputPassword" className="sr-only">Password</label>

                    <Field className="form-control" type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" className="btn btn-lg btn-primary btn-block" disabled={isSubmitting}>
                        Submit
                    </button>

                    <div className="mt-3">
                        <Link to="/auth/register">Register</Link>
                    </div>
                    </Form>
                )}
            </Formik>
         );
    }
}
 
export default Login;