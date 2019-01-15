import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from 'native-base';
import { store, persistor } from './store';
import AppLayout from './src/AppLayout';
import Loading from './src/shared/components/Loading';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <Root>
            <AppLayout />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
