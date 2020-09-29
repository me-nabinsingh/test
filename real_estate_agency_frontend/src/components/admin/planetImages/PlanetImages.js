import React, { Component} from 'react';
import { IoIosTrash } from "react-icons/io";
import Proptypes from 'prop-types'

export default class PlanetImages extends Component {

    render() {
        const { images, deleteSelectedImage } = this.props;
        if(!images.length) return null;
        return (
            <div className="table-responsive">
                <table className="table table-striped table-sm my-3">                 
                    <tbody>
                        {
                            images.map((image) => {
                                return (
                                    <tr key={image._id}>
                                        <td><img src={image.url} alt="" height="50" /></td>
                                        <td className="text-center" style={{width: 20}}>
                                            <div className="btn-group ">
                                                <button onClick={() => deleteSelectedImage(image._id)} className="btn btn-sm btn-outline-secondary">
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
        );
    }
}

PlanetImages.defaultProps = {
    images: []
}

PlanetImages.propTypes = {
    images: Proptypes.array
}