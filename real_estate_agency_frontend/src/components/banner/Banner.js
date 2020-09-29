import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class   Banner extends Component {
    render() {
        const { banner } = this.props;
        if(!banner) {
            return null;
        }
        return ( 
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div className="col-md-6 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">{banner.title}</h1>
                    <p className="lead font-weight-normal">{banner.intro}</p>
                    <Link className="btn btn-outline-secondary" to="/planets">View all planets</Link>
                </div>
            </div>
         );
    }
}
 
Banner.defaultProps = {
    banner: {}
}

Banner.propTypes = {
    banner: PropTypes.object
}