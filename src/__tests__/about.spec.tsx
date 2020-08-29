import React from 'react';
import renderer from 'react-test-renderer';

import About from '../pages/about';

describe('Header', () => {
  it('renders correctly', () => {
    // simple snapshot test comparison using react-test-renderer
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
