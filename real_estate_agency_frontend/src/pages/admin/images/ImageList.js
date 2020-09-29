import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosTrash } from "react-icons/io";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { all, del } from '../../../services/imageService';


export default class ImageList extends Component {

    state = {
        images: [],
        limit: 20,
        offset: 0,
        hasMore: false
    }

    componentDidMount() {
        const { limit, offset } = this.state;

        const params = {
            limit,
            offset
        }
        all(params)
            .then(result => {
                this.setState({
                    images: result.data.data,
                    hasMore: result.data.hasMore
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    _deleteImage = (id) => {
        del(id)
            .then(res => {
                if(res.status === 200) {
                    let images = this.state.images;
                    this.setState({
                        images: images.filter(image => {
                            return image._id !== id
                        })
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    _confirmDelete = (id) => {
        confirmAlert({
            title: 'Delete image',
            message: 'Are you sure you want to permanently  delete this image?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    this._deleteImage(id);
                }
              },
              {
                label: 'No'
              }
            ]
          })
    }



    render() {
        const  { images } = this.state;

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">            
                    <h1 className="h2">Images</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to="/admin/images/new" className="btn btn-sm btn-outline-secondary">Add New</Link>
                    </div>
                </div>

                {
                    !images.length 
                    ? <div>No images available yet!</div>
                    : <div className="table-responsive">
                        <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th style={{width: 20}}>#</th>
                                <th>Image</th>
                                <th style={{width: 101}} className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                images.map((image, index) => {
                                    return (
                                        <tr key={image._id}>
                                            <td>{index + 1}</td>
                                            <td><img src={image.url} alt="" height="50" /></td>
                                            <td className="text-center">
                                                <div className="btn-group ">
                                                    <button onClick={() => this._confirmDelete(image._id)} className="btn btn-sm btn-outline-secondary">
                                                        <IoIosTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                }
                
            </div>

            
        );
    }
}