import { expect, test, describe, beforeEach, afterEach } from 'vitest';
import { render, screen, configure } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Counter } from './Counter';
import { Provider } from 'react-redux';
import { store } from 'reducers';

configure({ reactStrictMode: true });

describe('Increment and decrement value', () => {
  let value: HTMLElement;
  let unmount: () => void;

  beforeEach(async () => {
    unmount = render(
      <Provider store={store}>
        <Counter allowAsync />
      </Provider>,
    ).unmount;
    value = await screen.findByRole('textbox', { name: 'Counter' });
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
    await userEvent.click(decBtn);
    expect(value.textContent).toBe('0');
  });

  test('increase custom amount (default=2)', async () => {
    const incBtn = await screen.findByRole('button', {
      name: 'Increment custom amount',
    });
    await userEvent.click(incBtn);
    expect(value.textContent).toBe('2');
  });
});
