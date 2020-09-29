import React from 'react';
import Banner from './Banner';
import {Router } from "react-router-dom";
import renderer from 'react-test-renderer';
import history from "../../util/history";


const banner = {
    "_id":"5c0c6138dfd55477c9ca7f29",
    "title":"Real Estate Agency ",
    "intro":"Hydrogen atoms radio telescope kindling the energy hidden in matter stirred by starlight dispassionate extraterrestrial observer inconspicuous motes of rock and gas. The carbon in our apple pies globular star cluster corpus callosum concept of the number one citizens of distant epochs colonies.",
    "created_at":"2018-12-09T00:26:32.527Z",
    "updated_at":"2018-12-09T00:26:32.527Z"
};

describe('<Banner />', () => {
    it("doesn't break if banner is not passed", () => {
        const component = renderer.create(
            <Router history={history}>
                <Banner />
            </Router>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })


    it('renders without crashing', () => {
        
        const component = renderer.create(
            <Router history={history}>
                <Banner banner={banner}/>
            </Router>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});