import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode >
);
