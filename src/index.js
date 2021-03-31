import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={''}>
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider >,
  document.getElementById('root')
);