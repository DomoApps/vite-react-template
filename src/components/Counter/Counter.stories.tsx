import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';
import { store } from 'reducers';

const Mockstore: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const meta = {
  args: {},
  decorators: [(story) => <Mockstore>{story()}</Mockstore>],
  component: Counter,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Counter',
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

// Stories

export const WithAsync: Story = {
  args: {
    allowAsync: true,
  },
};

export const Simple: Story = {
  args: {
    simple: true,
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Counter',
  },
};
