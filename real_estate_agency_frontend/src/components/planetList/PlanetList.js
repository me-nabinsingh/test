import React from 'react';
import PlanetItem from '../planetItem/PlanetItem';
import PropTypes from 'prop-types';

const PlanetList = ({title, planets}) => {
    return ( 
        <div className="album py-5 bg-light">
            <div className="container">
                <h2 className="mb-3">{title}</h2>
                <div className="row">
                        {
                            planets.map(planet => {
                                return (
                                    <PlanetItem key={planet._id} planet={planet} />
                                );
                            })
                        }
                </div>
            </div>
        </div>
     );
}

PlanetList.defaultProps = {
    title: '',
    planets: []
}

PlanetList.propTypes = {
    title: PropTypes.string,
    planets: PropTypes.array
}
 
export default PlanetList;