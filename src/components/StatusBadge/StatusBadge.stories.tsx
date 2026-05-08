import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=65-186',
    },
    docs: {
      description: {
        component:
          'Semantic status indicator (formerly `Label` in Figma). Use to communicate state — success, in progress, blocked, etc.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['success', 'brand', 'alert', 'warning', 'neutral'],
    },
    visibility: { control: 'inline-radio', options: ['accent', 'default'] },
    dot: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    status: 'success',
    visibility: 'accent',
    children: 'Active',
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithDot: Story = { args: { dot: true } };

export const Matrix: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const statuses = ['success', 'brand', 'alert', 'warning', 'neutral'] as const;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {statuses.map((s) => (
            <StatusBadge key={s} status={s} visibility="accent">
              {s}
            </StatusBadge>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {statuses.map((s) => (
            <StatusBadge key={s} status={s} visibility="default" dot>
              {s}
            </StatusBadge>
          ))}
        </div>
      </div>
    );
  },
};
