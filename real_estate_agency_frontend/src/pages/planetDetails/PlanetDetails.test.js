import React from 'react';
import PlanetDetails from './PlanetDetails';
import renderer from 'react-test-renderer';
import {Router } from "react-router-dom";
import {shallow } from 'enzyme';
import history from "../../util/history";


const planet = {
    "_id":"5c0c45dbdeaeb2fb0193728f",
    "mass":0.815,
    "diameter":12104,
    "density":5.2,
    "is_featured": true,
    "images":[
        {
            "_id":"5c0b53e0e30c002a34d253a6",
            "url":"https://s3.us-east-2.amazonaws.com/nod.realestateagency/1544246230187nasa-43566-unsplash.jpg"
        }
        ],
    "name":"Venus",
    "price":50000,
    "short_description":"Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.[12] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun would rise in the west and set in the east).","description":"Venus is a terrestrial planet and is sometimes called Earth's \"sister planet\" because of their similar size, mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is 92 times that of Earth, or roughly the pressure found 900 m (3,000 ft) underwater on Earth. Venus is by far the hottest planet in the Solar System, with a mean surface temperature of 735 K (462 °C; 863 °F), even though Mercury is closer to the Sun. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. It may have had water oceans in the past,[16][17] but these would have vaporized as the temperature rose due to a runaway greenhouse effect.[18] The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic field.[19] Venus's surface is a dry desertscape interspersed with slab-like rocks and is periodically resurfaced by volcanism.",
    "created_at":"2018-12-08T22:29:47.781Z",
    "updated_at":"2018-12-09T00:15:28.313Z",
};

describe('<PlanetDetails />', () => {
    it('renders without crashing', () => {
        const component = shallow(
            <Router history={history}>
                <PlanetDetails  />
            </Router> 
        );
        expect(component).toMatchSnapshot();
    });

    it('renders with planet details crashing', () => {
        const component = shallow(
            <Router history={history}>
                <PlanetDetails match={{params: {id: '5c0c45dbdeaeb2fb0193728f' }}} />
            </Router> 
        );
        component.setState({
            planet: planet
        });

        expect(component).toMatchSnapshot();
    });
});