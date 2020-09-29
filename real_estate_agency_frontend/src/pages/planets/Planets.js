import React, { Component } from "react";
import PlanetList from "../../components/planetList/PlanetList";
import { all } from "../../services/planetService";


class Planets extends Component {
    state = {
        planets: null
    }

    componentWillMount() {
        const params = {
            limit: 20,
            offset: 0,
            filter: {}
        }
        all(params)
            .then(result => {
                if(result.data) {
                    this.setState({
                        planets: result.data.data
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { planets } = this.state;
        return (
            <div>
                {
                    planets && planets.length
                    ? <PlanetList title="All Planets" planets={planets} />
                    : null
                }
            </div>
        );
    }
}
 
export default Planets;