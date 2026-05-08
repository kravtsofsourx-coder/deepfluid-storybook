import type { Meta, StoryObj } from '@storybook/react';
import { Bell, Settings, User } from 'lucide-react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=50-194',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'activity', label: 'Activity' },
      { id: 'settings', label: 'Settings' },
    ],
    defaultValue: 'overview',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { id: 'profile', label: 'Profile', icon: <User size={14} /> },
      { id: 'notifications', label: 'Notifications', icon: <Bell size={14} /> },
      { id: 'settings', label: 'Settings', icon: <Settings size={14} /> },
    ],
    defaultValue: 'profile',
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      { id: 'a', label: 'Available' },
      { id: 'b', label: 'Coming soon', disabled: true },
      { id: 'c', label: 'Available' },
    ],
    defaultValue: 'a',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    items: [
      { id: '1', label: 'Tenants' },
      { id: '2', label: 'Sites' },
      { id: '3', label: 'Devices' },
      { id: '4', label: 'Users' },
    ],
  },
};
