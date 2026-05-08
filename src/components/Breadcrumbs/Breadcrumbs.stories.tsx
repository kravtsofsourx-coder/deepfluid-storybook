import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=133-374',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Tenants' },
    ],
  },
};

export const ThreeLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Tenants', href: '/tenants' },
      { label: 'Acme Corp' },
    ],
  },
};
