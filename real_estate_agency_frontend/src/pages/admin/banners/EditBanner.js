import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { update, findOne } from '../../../services/bannerService';
import history from './../../../util/history';

export default class EditBanner  extends Component {

    state = {
        data: null
    }

    _getCurrentRecord = () => {
        const id = this.props.match.params.id;
        findOne(id)
            .then(result => {
                this.setState(
                    {
                        data: result.data.data,
                    }
                );
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this._getCurrentRecord();
    }


    render() {
        const { data } = this.state;

        return ( 
            <div>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">            
                     
                       <h1 className="h2">Update banner</h1>
    
                       <div className="btn-toolbar mb-2 mb-md-0">
                            <Link to="/admin/banners" className="btn btn-sm btn-outline-secondary">Back</Link>
                        </div>
    
                    </div>
    
                    <Formik
                            enableReinitialize={true}
                            initialValues={
                                {
                                    _id: data ? data._id : '',
                                    title: data ? data.title : '',
                                    intro: data ? data.intro: '',
                                }
                            }
                            validate = {values => {
                                let errors = {};
                                if (!values.title) {
                                    errors.title = 'Required';
                                }
                                if (!values.intro) {
                                    errors.intro = 'Required';
                                }
    
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {

                                update(values)
                                    .then(res => {
                                        if(res.data) {
                                           history.push('/admin/banners');
                                        }
                                        setSubmitting(false);
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        setSubmitting(false);
                                    });
                            }}
                            >
                            {({ isSubmitting, setFieldValue, values }) => (
                                <Form>
                                <div className="mb-3">
                                    <label htmlFor="title">Title</label>
                                    <Field className="form-control" type="text" name="title" />
                                    <ErrorMessage className="text-danger" name="title" component="div" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="intro">Intro</label>
                                    <Field className="form-control" component="textarea" name="intro" />
                                    <ErrorMessage className="text-danger" name="intro" component="div" />
                                </div>
                                
                                <button type="submit" className="btn btn-lg btn-primary btn-block" disabled={isSubmitting}>
                                    Update
                                </button>
                                </Form>
                            )}
                        </Formik>
    
    
            </div>
         );
    }
}
