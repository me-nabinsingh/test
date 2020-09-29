import React from 'react';
import Logo from './Logo';
import {Router } from "react-router-dom";
import renderer from 'react-test-renderer';
import history from "../../util/history";


const width = 30, height =  30;

describe('<Logo />', () => {
    it("doesn't break if width and hight are not passed", () => {
        const component = renderer.create(
            <Router history={history}>
                <Logo />
            </Router>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })


    it('renders without crashing', () => {
        
        const component = renderer.create(
            <Router history={history}>
                <Logo width={width} height={height}/>
            </Router>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});