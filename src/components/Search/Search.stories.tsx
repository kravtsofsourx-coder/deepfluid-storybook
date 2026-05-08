import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Search } from './Search';

const meta = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=88-213',
    },
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    );
  },
};
