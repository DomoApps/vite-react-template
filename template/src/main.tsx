import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'reducers';
import { App } from 'components/App/App';

import './index.scss';

declare const DOMO_APP_NAME: string;
declare const DOMO_APP_VERSION: string;

if (import.meta.env.DEV) {
  console.log(`${DOMO_APP_NAME}@${DOMO_APP_VERSION}`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
