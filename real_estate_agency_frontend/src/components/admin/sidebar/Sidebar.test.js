import React from 'react';
import Sidebar from './Sidebar';
import {Router } from "react-router-dom";
import renderer from 'react-test-renderer';
import history from "../../../util/history";

describe('<Sidebar />', () => {

    it('renders without crashing', () => {
        const component = renderer.create(
            <Router history={history}>
                <Sidebar/>
            </Router>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});