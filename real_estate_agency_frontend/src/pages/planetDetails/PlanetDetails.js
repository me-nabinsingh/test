import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import { findOne } from '../../services/planetService';
import PlanetGallery from '../../components/planetGallery/PlanetGallery';



export default class PlanetDetails extends Component {

    state = {
        planet: null
    }

    _getCurrentRecord = () => {
        const id = this.props.match.params.id;
        findOne(id)
            .then(result => {
                this.setState(
                    {
                        planet: result.data.data,
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
        const { planet } = this.state;
        if(!planet) return null;
        return(
            <div >
                <PlanetGallery images={planet.images} /> 
                <div className="bg-light pb-5">
                    <div className="container">
                        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <h1 className="display-4">{planet.name}</h1>
                            <h3>${(planet.price).toFixed(2)}</h3>
                            <p className="lead">{planet.short_description}</p>
                        </div>

                        <div className="p-2" style={{backgroundColor: '#fff'}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <strong>Mass: </strong> {planet.mass? renderHTML(`${planet.mass} M<sub>E</sub>`) :'-'}
                                </div>
                                <div className="col-md-4">
                                    <strong>Diameter: </strong> {planet.diameter? `${planet.diameter} km` :'-'}
                                </div>
                                <div className="col-md-4">
                                    <strong>Density: </strong> {planet.density? renderHTML(`${planet.mass} g/cm <sup>3</sup>`) :'-'}
                                </div>
                                
                            </div>
                        </div>

                        <div className="my-5">
                            <h4>Description</h4>
                            <div>
                                <p>
                                    {planet.description}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}