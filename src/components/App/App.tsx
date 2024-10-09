import { FC } from 'react';

import { Counter } from 'components/Counter/Counter';

import reactLogo from '/static/react.svg';
import viteLogo from '/static/vite.svg';
import domoLogo from '/static/domo.png';

import styles from './App.module.scss';

export const App: FC = () => (
  <div className={styles.App}>
    <div className={styles.logos}>
      <a href="https://developer.domo.com/" target="_blank">
        <img src={domoLogo} alt="Domo logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} alt="React logo" />
      </a>
    </div>

    <h1>Domo + Vite + React</h1>

    <Counter allowAsync />
  </div>
);
