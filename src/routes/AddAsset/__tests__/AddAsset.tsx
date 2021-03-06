import * as React from 'react';
import { render } from '@testing-library/react-native';

import AddAsset from '..';
import testIds from '../testIds';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '../../../store';

// Mocks like this need to be configured at the top level
// of the test file, they can't be setup inside your tests.
jest.mock('@react-navigation/native', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const actualNav = jest.requireActual('@react-navigation/native');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...actualNav,
    goBack: jest.fn(),
  };
});

describe('AddAsset', () => {
  test('Should render the scrreen', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Provider store={store}>
          <AddAsset />
        </Provider>
      </NavigationContainer>
    );

    const component = getByTestId(testIds.MAIN_CONTAINER);
    expect(component).toBeDefined();
  });
});
