import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosTrash, IoMdCreate } from "react-icons/io";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { all, del } from '../../../services/bannerService';

export default class BannerList extends Component {

    state = {
        banners: [],
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
                    banners: result.data.data,
                    hasMore: result.data.hasMore
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    _deleteBanner = (id) => {
        del(id)
            .then(res => {
                if(res.status === 200) {
                    let banners = this.state.banners;
                    this.setState({
                        banners: banners.filter(banner => {
                            return banner._id !== id
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
            title: 'Delete',
            message: 'Are you sure you want to delete?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    this._deleteBanner(id);
                }
              },
              {
                label: 'No'
              }
            ]
          })
    }

    render() {
        const { banners } = this.state;
        
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">            
                 
                   <h1 className="h2">Banners</h1>

                   <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to="/admin/banners/new" className="btn btn-sm btn-outline-secondary">Add new</Link>
                    </div>
                </div>


                {
                    !banners.length 
                    ? <div>No banners available yet!</div>
                    : <div className="table-responsive">
                        <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th style={{width: 101}} className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                banners.map((banner, index) => {
                                    return (
                                        <tr key={banner._id}>
                                            <td>{index + 1}</td>
                                            <td>{banner.title}</td>
                                            <td><img height="50" src={banner.image} alt="" /></td>
                                            <td className="text-center">
                                            <div className="btn-group ">
                                                <Link to={`/admin/banners/${banner._id}`} className="btn btn-sm btn-outline-secondary">
                                                    <IoMdCreate />
                                                </Link>
                                                <button onClick={() => this._confirmDelete(banner._id)} className="btn btn-sm btn-outline-secondary">
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

