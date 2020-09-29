import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosTrash, IoMdCreate, IoMdCheckmark } from "react-icons/io";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { all, del } from '../../../services/planetService';

export default class PlanetList extends Component {

    state = {
        planets: [],
        limit: 20,
        offset: 0,
        hasMore: false
    }

    componentDidMount() {
        const { limit, offset } = this.state;

        const params = {
            limit,
            offset,
            filter: {}
        }
        all(params)
            .then(result => {
                this.setState({
                    planets: result.data.data,
                    hasMore: result.data.hasMore
                });
            })
            .catch(err => {
                console.log(err);
            });
    }


    _deletePlanet = (id) => {
        del(id)
            .then(res => {
                if(res.status === 200) {
                    let planets = this.state.planets;
                    this.setState({
                        planets: planets.filter(planet => {
                            return planet._id !== id
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
            title: 'Delete property',
            message: 'Are you sure you want to permanently delete this planet?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    this._deletePlanet(id);
                }
              },
              {
                label: 'No'
              }
            ]
          })
    }

    render() {
        const { planets } = this.state;
        
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">            
                 
                   <h1 className="h2">Planets</h1>

                   <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to="/admin/planets/new" className="btn btn-sm btn-outline-secondary">Add new</Link>
                    </div>
                </div>


                {
                    !planets.length 
                    ? <div>No planets available yet!</div>
                    : <div className="table-responsive">
                        <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Short description</th>
                                <th>Is Featured</th>
                                <th style={{width: 101}} className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                planets.map((planet, index) => {
                                    return (
                                        <tr key={planet._id}>
                                            <td>{index + 1}</td>
                                            <td>{planet.name}</td>
                                            <td>{planet.short_description}</td>
                                            <td>
                                                {
                                                    planet.is_featured
                                                    ? <IoMdCheckmark />
                                                    : null
                                                }
                                            </td>
                                            <td className="text-center">
                                            <div className="btn-group ">
                                                <Link to={`/admin/planets/${planet._id}`} className="btn btn-sm btn-outline-secondary">
                                                    <IoMdCreate />
                                                </Link>
                                                <button onClick={() => this._confirmDelete(planet._id)} className="btn btn-sm btn-outline-secondary">
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

