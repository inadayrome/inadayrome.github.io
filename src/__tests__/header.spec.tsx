import React from 'react';
import { render } from '@testing-library/react';

import Header from '../components/header';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header showMenu={true} setShowMenu={() => null} siteTitle={''} />);
  });
});
