import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class  Thumbnail extends Component{

    render() {
        const { images } = this.props;
        if(images.length === 0) {
            return null;
        }
        const url = images[0].url;
        
        var divStyle = {
            backgroundImage: 'url(' + url + ')'
        }

        return ( 
            <div className="thumbnail" style={divStyle}>
                &nbsp;
            </div>
        );
    }
}

Thumbnail.defaultProps = {
    images: []
}

Thumbnail.propTypes = {
    images: PropTypes.array
}
export default Thumbnail;