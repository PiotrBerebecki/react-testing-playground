import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  // "smoke test" - verify that component renders without crashing
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  // "smoke test" using enzyme's shallow render
  it("renders without crashing (using enzyme's shallow rendering", () => {
    shallow(<App />);
  });
});
