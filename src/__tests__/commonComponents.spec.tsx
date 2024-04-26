import React from 'react';
import { render } from '@testing-library/react';

import { LinkButtons } from '../components/commonComponents';

describe('LinkButtons', () => {
  it('renders correctly', () => {
    render(<LinkButtons />);
  });
});
