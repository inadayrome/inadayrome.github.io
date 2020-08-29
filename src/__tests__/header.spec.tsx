import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../components/header';

describe('Header', () => {
  it('renders correctly', () => {
    // simple snapshot test comparison using react-test-renderer
    const tree = renderer
      .create(
        <Header showMenu={true} setShowMenu={() => null} siteTitle={''} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
