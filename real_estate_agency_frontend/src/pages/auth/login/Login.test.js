import React from 'react';
import Login from './Login';
import renderer from 'react-test-renderer';
import {Router } from "react-router-dom";
import history from "../../../util/history";

describe('<Login />', () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <Router history={history}>
                <Login />
            </Router>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});