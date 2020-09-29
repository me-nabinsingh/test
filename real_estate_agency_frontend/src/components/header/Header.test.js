import React from 'react';
import Header from './Header';
import {Router } from "react-router-dom";
import renderer from 'react-test-renderer';
import history from "../../util/history";


describe('<Header />', () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <Router history={history}>
                <Header/>
            </Router>
            );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});