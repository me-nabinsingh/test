import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

describe('<Footer />', () => {
    it('renders without crashing', () => {
        const component = renderer.create(<Footer />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});