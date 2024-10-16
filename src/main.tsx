import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'reducers/index.ts';
import { App } from 'components/App/App.tsx';

import './index.scss';

declare const DOMO_APP_NAME: string;
declare const DOMO_APP_VERSION: string;
console.log(`${DOMO_APP_NAME}@${DOMO_APP_VERSION}`);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
