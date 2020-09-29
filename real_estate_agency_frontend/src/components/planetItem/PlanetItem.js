import React from 'react';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Thumbnail from '../../components/thumbnail/Thumbnail';
import './styles.css';

const PlanetItem = ({planet}) => {
    return ( 
        <div key={planet._id} className="col-md-4 planet-thumb">
            <Link to={`/planets/${planet._id}`}>
                <div className="card  mb-4 shadow-sm">
                    <Thumbnail images={planet.images} />
                    <div className="card-body">
                    <div><h4>{planet.name}</h4></div>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">$ {planet.price? (planet.price).toFixed(2): null}</small>
                    </div>
                    <p className="card-text"><Truncate lines={3}>{planet.short_description}</Truncate></p>
                    
                    </div>
                </div>
            </Link>
        </div>
     );
}

PlanetItem.defaultProps = {
    planet: {}
}

PlanetItem.propTypes = {
    planet: PropTypes.object
}

export default PlanetItem;