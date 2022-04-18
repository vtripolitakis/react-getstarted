// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

afterEach(cleanup);
describe('<App />', () => {
  test('Basic Rendering Test', () => {
    render(<App name="TestName" />);
    expect(screen.getByRole('heading')).toHaveTextContent('Hello TestName');
  });
});
