import React from 'react';
import renderer from 'react-test-renderer';

import { LinkButtons } from '../components/commonComponents';

describe('LinkButtons', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LinkButtons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
