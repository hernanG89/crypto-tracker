import * as React from 'react';
import { render } from '@testing-library/react-native';

import Watchlist from '../';
import testIds from '../testIds';
import { NavigationContainer } from '@react-navigation/native';
import store from '../../../store';
import { Provider } from 'react-redux';

// Mocks like this need to be configured at the top level
// of the test file, they can't be setup inside your tests.
jest.mock('@react-navigation/native', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const actualNav = jest.requireActual('@react-navigation/native');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...actualNav,
    navigate: jest.fn(),
  };
});

describe('Watchlist', () => {
  test('Should render the scrreen', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Provider store={store}>
          <Watchlist />
        </Provider>
      </NavigationContainer>
    );

    const component = getByTestId(testIds.MAIN_CONTAINER);
    expect(component).toBeDefined();
  });
});
