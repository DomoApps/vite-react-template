import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectValue,
} from '../../reducers/counter/slice';
import { useAppDispatch } from '../../reducers';

import styles from './Counter.module.scss';

interface CounterProps {
  allowAsync?: boolean;
  simple?: boolean;
  title?: string;
}

export const Counter: FC<CounterProps> = ({ allowAsync, simple, title }) => {
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');

  const count = useSelector(selectValue);

  const incAmount = !Number.isNaN(Number(incrementAmount))
    ? Number(incrementAmount)
    : 0;

  return (
    <div className={styles.Counter}>
      {!simple && title && (
        <div className={styles.row}>
          <div className={styles.title}>{title}</div>
        </div>
      )}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          role="button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Counter" role="textbox" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          role="button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

      {!simple && (
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Custom increment amount"
            role="textbox"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            aria-label="Increment custom amount"
            role="button"
            onClick={() => dispatch(incrementByAmount(incAmount))}
          >
            Add Amount
          </button>

          {allowAsync && (
            <button
              className={styles.asyncButton}
              aria-label="Increment amount async"
              role="button"
              onClick={() => dispatch(incrementAsync(incAmount))}
            >
              Add Async
            </button>
          )}
        </div>
      )}
    </div>
  );
};
