import React from 'react';
import Thumbnail from './Thumbnail';
import renderer from 'react-test-renderer';

const images = [{
    url: "https://s3.us-east-2.amazonaws.com/nod.realestateagency/15442744174651200px-Mercury_in_color_-_Prockter07-edit1.jpg"
}];

describe('<Thumbnail />', () => {
    it("doesn't break if images object is not passed", () => {
        

        const component = renderer.create(<Thumbnail />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        
        const component = renderer.create(<Thumbnail images={images} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});