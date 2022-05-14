import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider2 from './components/Provider';

import { store } from './mock/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Provider2 />
    </React.StrictMode>
  </Provider>
);
