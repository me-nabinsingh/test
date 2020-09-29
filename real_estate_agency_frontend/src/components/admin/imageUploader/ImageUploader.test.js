import React from 'react';
import ImageUploader from './ImageUploader';
import renderer from 'react-test-renderer';

describe('<ImageUploader />', () => {

    it('renders without crashing', () => {
        const component = renderer.create(
            <ImageUploader/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});