import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=273-2586',
    },
    docs: {
      description: {
        component:
          'Decorative color-coded tag (formerly `Lable2` in Figma). Use for grouping, categorizing, or quick visual scanning. For semantic state, prefer `StatusBadge`.',
      },
    },
  },
  argTypes: {
    color: { control: 'inline-radio', options: ['green', 'violet', 'red', 'orange', 'grey'] },
    children: { control: 'text' },
  },
  args: {
    color: 'violet',
    children: 'Design',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Tag color="green">Approved</Tag>
      <Tag color="violet">Design</Tag>
      <Tag color="red">Bug</Tag>
      <Tag color="orange">In review</Tag>
      <Tag color="grey">Archived</Tag>
    </div>
  ),
};
