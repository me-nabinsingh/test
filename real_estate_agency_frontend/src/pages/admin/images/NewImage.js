import React, { Component } from 'react';
import ImageUploader from '../../../components/admin/imageUploader/ImageUploader';
import { Link } from 'react-router-dom';

export default class ImageList extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">            
                    <h1 className="h2">Add new images</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to="/admin/images" className="btn btn-sm btn-outline-secondary">Back</Link>
                    </div>
                </div>
                
                <ImageUploader />

            </div>

            
        );
    }
}