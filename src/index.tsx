import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Provider2 from './components/Provider';
import { store } from './mock/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Provider2 />
    </React.StrictMode>
  </Provider>,
);
