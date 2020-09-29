import React from 'react';
import PlanetImages from './PlanetImages';
import renderer from 'react-test-renderer';

const images = [
    {
        "_id":"5c0bc1f7aa3728e13109849c",
        "url":"https://s3.us-east-2.amazonaws.com/nod.realestateagency/15442744174651200px-Mercury_in_color_-_Prockter07-edit1.jpg",
        "created_at":"2018-12-08T13:07:03.738Z",
        "updated_at":"2018-12-08T13:07:03.738Z"
    },
    {
        "_id":"5c0b53e0e30c002a34d253a6",
        "url":"https://s3.us-east-2.amazonaws.com/nod.realestateagency/1544246230187nasa-43566-unsplash.jpg",
        "created_at":"2018-12-08T05:17:20.229Z",
        "updated_at":"2018-12-08T05:17:20.230Z"
    }
]
describe('<PlanetImages />', () => {

    it("doesn't break if images is not passed", () => {
        const component = renderer.create(
            <PlanetImages/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const component = renderer.create(
            <PlanetImages images={images}/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});