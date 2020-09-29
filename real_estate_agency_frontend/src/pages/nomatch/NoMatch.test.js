import React from 'react';
import NoMatch from './NoMatch';
import renderer from 'react-test-renderer';

describe('<NoMatch />', () => {
    it('renders without crashing', () => {
        const component = renderer.create(
            <NoMatch />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});