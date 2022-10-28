import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';

const Main = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default Main;
