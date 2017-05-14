import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

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

  // snapshot test
  it('renders component correctly', () => {
    const component = renderer.create(<App />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger callback on button
    tree.children[1].props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
