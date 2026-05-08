import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const Search = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=71-196',
    },
  },
  args: { 'aria-label': 'Search', icon: <Search />, variant: 'default', size: 'md' },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
export const Ghost: Story = { args: { variant: 'ghost' } };

export const AllSizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <IconButton aria-label="Search" icon={<Search />} size="sm" />
      <IconButton aria-label="Search" icon={<Search />} size="md" />
      <IconButton aria-label="Search" icon={<Search />} size="lg" />
      <IconButton aria-label="Search" icon={<Search />} size="sm" variant="ghost" />
      <IconButton aria-label="Search" icon={<Search />} size="md" variant="ghost" />
      <IconButton aria-label="Search" icon={<Search />} size="lg" variant="ghost" />
    </div>
  ),
};
