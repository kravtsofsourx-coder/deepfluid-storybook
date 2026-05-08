import type { Meta, StoryObj } from '@storybook/react';
import { Bell } from 'lucide-react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=81-608',
    },
    docs: {
      description: {
        component:
          'Small notification badge — used for indicating attention or count on icons and avatars.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['warning', 'information', 'information-outline'],
    },
    count: { control: 'number' },
  },
  args: {
    variant: 'information',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithCount: Story = { args: { count: 5 } };

export const HighCount: Story = { args: { count: 142 } };

export const OnIcon: Story = {
  render: (args) => (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <Bell size={28} />
      <span style={{ position: 'absolute', top: -4, right: -4 }}>
        <Badge {...args} />
      </span>
    </div>
  ),
  args: { count: 3 },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Badge variant="warning" />
      <Badge variant="information" />
      <Badge variant="information-outline" />
      <Badge variant="information" count={1} />
      <Badge variant="warning" count={12} />
      <Badge variant="information" count={120} />
    </div>
  ),
};
