import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../Home';
import { ServerDataProvider } from '../../state/serverDataContext';

describe('<Home />', () => {
  const { container } = render(
    <ServerDataProvider launchYear="2020">
      <Home />
    </ServerDataProvider>
  );
  it('renders container', () => {
    expect(container).toBeDefined();
  });
});
