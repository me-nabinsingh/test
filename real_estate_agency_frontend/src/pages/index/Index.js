import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Banner from "../../components/banner/Banner";
import PlanetList from "../../components/planetList/PlanetList";
import { all as allPlanets } from "../../services/planetService";
import { all as allBanners } from '../../services/bannerService';


class Index extends Component {
    state = {
        planets: null,
        banner: null
    }

    _getFeaturedPlanets = () => {
        const params = {
            limit: 6,
            offset: 0,
            filter: {
                is_featured: true
            }
        }
        allPlanets(params)
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


    _getBanner = () => {
        const params = {
            limit: 1,
            offset: 0
        }
        allBanners(params)
            .then(result => {
                if(result.data) {
                    this.setState({
                        banner: result.data.data[0]
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }


    componentWillMount() {
        this._getBanner();
        this._getFeaturedPlanets();
        
    }

    render() {
        const { planets, banner } = this.state;
        return (
            <div>
                <Banner banner={banner} />
                {
                    planets && planets.length
                    ? <PlanetList title="Featured planets" planets={planets} />
                    : null
                }

                <div className="pb-5 text-center bg-light">
                    <Link className="btn btn-outline-secondary" to="/planets">View all planets</Link>
                </div>
            </div>
        );
    }
}
 
export default Index;