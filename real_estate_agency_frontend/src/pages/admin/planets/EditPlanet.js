import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css';
import { update, findOne } from '../../../services/planetService';
import { all } from '../../../services/imageService';
import history from '../../../util/history';
import PlanetImages from '../../../components/admin/planetImages/PlanetImages';


export default class NewPlanet  extends Component {
    state = {
        images: [],
        selectedImages: [],
        selected: [],
        data: null
    }

    _getAllImages = () => {
        const params = {
            limit: 100,
            offset: 0
        }

        all(params)
            .then(result => {
                this.setState({
                    images: result.data.data,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }


    _getCurrentRecord = () => {
        const id = this.props.match.params.id;
        findOne(id)
            .then(result => {
                this.setState(
                    {
                        data: result.data.data,
                        selected: result.data.data.images
                    }
                );
            })
            .catch(err => {
                console.log(err);
            });
    }


    componentDidMount() {
        this._getAllImages();
        this._getCurrentRecord();
    }


    _updateImages = (images) => {
        this.setState({
            images: images
        });
    }


    _onPick = (selectedImages) => {
        this.setState({
            selectedImages: selectedImages
        });
    }

    _deleteSelectedImage = (id) => {
        const { selected } = this.state;
        this.setState({
            selected: selected.filter(image => {
                return image._id !== id;
            })
        });
    }


    render() {
        const { images, selected, data } = this.state;

        return ( 
            <div>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">            
                     
                       <h1 className="h2">Update planet</h1>
                       <div className="btn-toolbar mb-2 mb-md-0">
                            <Link to="/admin/planets" className="btn btn-sm btn-outline-secondary">Back</Link>
                        </div>
    
                    </div>
    
                    <Formik
                            enableReinitialize={true}
                            initialValues={
                                {
                                    _id: data ? data._id : '',
                                    name: data ? data.name : '', 
                                    price: data ? data.price : 0.00,
                                    short_description: data ? data.short_description : '',
                                    mass: data ? data.mass : 0.00,
                                    diameter: data ? data.diameter : 0.00,
                                    density: data ? data.density : 0.00,
                                    description:  data ? data.description : '',
                                    is_featured:  data ? data.is_featured : false,
                                    images: []
                                }
                            }
                            validate = {values => {
                                let errors = {};
                                if (!values.name) {
                                    errors.name = 'Required';
                                }
                                if (!values.price) {
                                    errors.price = 'Required';
                                }
                                if (!values.short_description) {
                                    errors.short_description = 'Required';
                                }
                                if (!values.description) {
                                    errors.description = 'Required';
                                }
    
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                values.images = this.state.selectedImages;
                                if(selected.length) {
                                    const oldImages = selected.map(image => {
                                        return {url: image.url, value: image._id}
                                    });
                                    values.images = [...oldImages, ...values.images]
                                }
                               
                                update(values)
                                    .then(res => {
                                        if(res.data) {
                                           history.push('/admin/planets');
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
                                    <label htmlFor="name">Name</label>
                                    <Field className="form-control" type="text" name="name" />
                                    <ErrorMessage className="text-danger" name="name" component="div" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="short_description">Short description</label>
                                    <Field className="form-control" component="textarea" name="short_description" />
                                    <ErrorMessage className="text-danger" name="short_description" component="div" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price">Price</label>
                                    <Field className="form-control" type="text" name="price" />
                                    <ErrorMessage className="text-danger" name="price" component="div" />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="mass">Mass</label>
                                            <Field className="form-control" type="text" name="mass" />
                                            <ErrorMessage className="text-danger" name="mass" component="div" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="diameter">Diameter</label>
                                            <Field className="form-control" type="text" name="diameter" />
                                            <ErrorMessage className="text-danger" name="diameter" component="div" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="density">Density</label>
                                            <Field className="form-control" type="text" name="density" />
                                            <ErrorMessage className="text-danger" name="density" component="div" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="is_featured">Is Featured</label>
                                            <Field className="form-control" type="checkbox" checked={values.is_featured} name="is_featured"
                                                onChange={(event) => {
                                                        setFieldValue("is_featured", event.currentTarget.checked);
                                                    }}
                                            />
                                            <ErrorMessage className="text-danger" name="is_featured" component="div" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description">Description</label>
                                    <Field className="form-control" component="textarea" name="description" />
                                    <ErrorMessage className="text-danger" name="description" component="div" />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="image">Images</label>
                                    <PlanetImages images={selected} deleteSelectedImage={this._deleteSelectedImage} />
                                    <div className="mb-2"><strong>Select planet images</strong></div>
                                    <ImagePicker 
                                        multiple={true}
                                        images={images.map((image, i) => ({src: image.url, value: image._id}))}
                                        onPick={this._onPick}
                                    />
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
