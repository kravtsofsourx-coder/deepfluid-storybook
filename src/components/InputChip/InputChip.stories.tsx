import type { Meta, StoryObj } from '@storybook/react';
import { InputChip } from './InputChip';
import { Avatar } from '../Avatar/Avatar';

const meta: Meta<typeof InputChip> = {
  title: 'Components/InputChip',
  component: InputChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=40-86',
    },
  },
  args: { children: 'tag' },
};
export default meta;

type Story = StoryObj<typeof InputChip>;

export const Default: Story = {};
export const Removable: Story = {
  args: { onRemove: () => alert('removed') },
};
export const WithAvatar: Story = {
  args: {
    leading: <Avatar size="supersmall" initials="IH" />,
    children: 'Iryna H.',
    onRemove: () => alert('removed'),
  },
};
export const Disabled: Story = {
  args: { disabled: true, onRemove: () => {} },
};

export const ChipRow: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <InputChip onRemove={() => {}}>active</InputChip>
      <InputChip onRemove={() => {}}>tenant: acme</InputChip>
      <InputChip onRemove={() => {}}>region: eu-west</InputChip>
      <InputChip onRemove={() => {}}>tier: enterprise</InputChip>
    </div>
  ),
};
