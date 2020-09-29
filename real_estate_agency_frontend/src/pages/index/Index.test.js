import React from 'react';
import Index from './Index';
import {mount, shallow } from 'enzyme';
import {Router } from "react-router-dom";
import history from "../../util/history";


const banner = {
    "_id":"5c0c6138dfd55477c9ca7f29",
    "title":"Real Estate Agency ",
    "intro":"Hydrogen atoms radio telescope kindling the energy hidden in matter stirred by starlight dispassionate extraterrestrial observer inconspicuous motes of rock and gas. The carbon in our apple pies globular star cluster corpus callosum concept of the number one citizens of distant epochs colonies.",
    "created_at":"2018-12-09T00:26:32.527Z",
    "updated_at":"2018-12-09T00:26:32.527Z"
};

const planets = [
    {
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
    },
    {
        "_id":"5c0bc21faa3728e13109849d",
        "mass":0,
        "diameter":0,
        "density":0,
        "is_featured":true,
        "images":[
            {
                "_id":"5c0bc1f7aa3728e13109849c",
                "url":"https://s3.us-east-2.amazonaws.com/nod.realestateagency/15442744174651200px-Mercury_in_color_-_Prockter07-edit1.jpg"
            }
        ],
        "name":"Mercury",
        "price":2000000,
        "short_description":"Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.","description":"Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and never exceeds 28° away from the Sun. When viewed from Earth, this proximity to the Sun means the planet can only be seen near the western or eastern horizon during the early evening or early morning. At this time it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which reoccurs over the so-called synodic period approximately every 116 days.",
        "created_at":"2018-12-08T13:07:43.456Z",
        "updated_at":"2018-12-08T13:07:43.456Z"
    }
]


describe('<Index />', () => {
    it('renders if banner and planets are not set', () => {
        const component = shallow(<Index />);
        expect(component).toMatchSnapshot();
    });

    it('renders when banner value is set', () => {
        const component = mount(
            <Router history={history}>
                <Index />
            </Router>
        );
        component.setState({
            banner: banner
        });
        expect(component).toMatchSnapshot();
    });

    it('renders when planets value is set', () => {
        const component = mount(
            <Router history={history}>
                <Index />
            </Router>
        );
        component.setState({
            planets:  planets
        });

        expect(component).toMatchSnapshot();
    });

    it('renders if boty banner and planets values are set', () => {
        const component = mount(
            <Router history={history}>
                <Index />
            </Router>
        );
        component.setState({
            planets:  planets,
            banner: banner
        });

        expect(component).toMatchSnapshot();
    });

});