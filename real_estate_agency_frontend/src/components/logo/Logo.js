import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import PropTypes from 'prop-types';


const Logo = ({width, height}) => {
    return ( 
        <Link className="py-2" to="/">
            <img  alt="" src={logo} width={width} height={height} />
        </Link>
     );
}

Logo.defaultProps = {
    width: 50,
    height: 50
}

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}
 
export default Logo;