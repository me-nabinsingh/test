import React from 'react';
import Register from './Register';
import renderer from 'react-test-renderer';
import {Router } from "react-router-dom";
import history from "../../../util/history";

describe('<Register />', () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <Router history={history}>
                <Register />
            </Router>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});