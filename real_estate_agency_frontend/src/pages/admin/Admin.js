import React, { Component} from 'react';
import {Router, Route, Switch } from "react-router-dom";

import Header from '../../components/admin/header/Header';
import Sidebar from '../../components/admin/sidebar/Sidebar';
import Dashboard from './dashboard/Dashboard';

import BannerList from './banners/BannerList';
import NewBanner from './banners/NewBanner';
import EditBanner from './banners/EditBanner';

import PlanetList from './planets/PlanetList';
import NewPlanet from './planets/NewPlanet';
import EditPlanet from './planets/EditPlanet';

import ImageList from './images/ImageList';
import NewImage from './images/NewImage';

import history from "../../util/history";

class  Admin extends Component {

    render() {
        return ( 
            <Router history={history}>
                <div>
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <Sidebar />
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-2 mt-5">
                                   <Switch>
                                        <Route exact path="/admin/" component={Dashboard} />
                                        
                                        <Route exact path="/admin/banners" component={BannerList} />
                                        <Route exact path="/admin/banners/new" component={NewBanner} />
                                        <Route exact path="/admin/banners/:id" component={EditBanner} />

                                        <Route exact path="/admin/planets" component={PlanetList} />
                                        <Route exact path="/admin/planets/new" component={NewPlanet} />
                                        <Route exact path="/admin/planets/:id" component={EditPlanet} />

                                        <Route exact path="/admin/images" component={ImageList} />
                                        <Route exact path="/admin/images/new" component={NewImage} />

                                    </Switch> 
                            </main>
                        </div>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default Admin;