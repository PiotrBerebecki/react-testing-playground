import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

test('Display renders correctly', () => {
  const tree = renderer.create(<Display count={23} />).toJSON();
  expect(tree).toMatchSnapshot();
});
