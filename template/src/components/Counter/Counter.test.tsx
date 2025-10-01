import { expect, test, describe, beforeEach, afterEach } from 'vitest';
import { render, screen, configure, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Counter } from './Counter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'reducers/counter/slice';

configure({ reactStrictMode: true });

describe('Increment and decrement value', () => {
  let value: HTMLElement;
  let unmount: () => void;
  let store: ReturnType<typeof configureStore>;

  beforeEach(async () => {
    // Recreate the Redux store before each test
    store = configureStore({ reducer: { counter: counterReducer } });

    unmount = render(
      <Provider store={store}>
        <Counter allowAsync />
      </Provider>,
    ).unmount;
    value = await screen.findByLabelText('Counter'); // Updated to match aria-label
  });

  afterEach(() => unmount());

  test('initial value should be 0', () => {
    expect(value.textContent).toBe('0');
  });

  test('increase value by 1', async () => {
    const incBtn = await screen.findByRole('button', {
      name: 'Increment value',
    });
    await userEvent.click(incBtn);
    expect(value.textContent).toBe('1');
  });

  test('decrease value by 1', async () => {
    const decBtn = await screen.findByRole('button', {
      name: 'Decrement value',
    });

    // Log initial Redux state for debugging
    console.log('Initial Redux state:', store.getState());

    await userEvent.click(decBtn);

    // Wait for the DOM to update
    await waitFor(() => {
      expect(value.textContent).toBe('-1');
    });

    // Log final Redux state for debugging
    console.log('Final Redux state:', store.getState());
  });

  test('increase custom amount (default=2)', async () => {
    const incBtn = await screen.findByRole('button', {
      name: 'Increment custom amount',
    });
    await userEvent.click(incBtn);
    expect(value.textContent).toBe('2');
  });
});
