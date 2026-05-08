import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=49-128',
    },
  },
  args: { initials: 'IH', size: 'default', color: 'violet' },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
export const WithImage: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=12', alt: 'Person', initials: undefined },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Avatar size="supersmall" initials="DF" />
      <Avatar size="small" initials="DF" />
      <Avatar size="default" initials="DF" />
      <Avatar size="huge" initials="DF" />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Avatar color="violet" initials="V" />
      <Avatar color="green" initials="G" />
      <Avatar color="orange" initials="O" />
      <Avatar color="grey" initials="GR" />
      <Avatar color="neutral" initials="N" />
    </div>
  ),
};
