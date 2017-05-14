import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('Display', () => {
  test('Display renders correctly', () => {
    const tree = renderer.create(<Display count={22} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
