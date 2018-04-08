import React from 'react';
import App from '../app';
import renderer from 'react-test-renderer';

test('<App /> renders correctly', () => {
    const component = renderer.create(
        <App />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})