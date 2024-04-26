import React from 'react';
import { render } from '@testing-library/react';

import About from '../pages/about';

describe('Header', () => {
  it('renders correctly', () => {
    render(<About />);
  });
});
