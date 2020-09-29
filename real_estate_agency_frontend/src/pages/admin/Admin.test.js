import React from 'react';
import Admin from './Admin';
import renderer from 'react-test-renderer';
import {Router } from "react-router-dom";
import history from "../../util/history";

describe('<Admin />', () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <Router history={history}>
                <Admin />
            </Router>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});