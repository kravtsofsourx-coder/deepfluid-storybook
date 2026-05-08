import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=26-18219',
    },
  },
  args: {
    label: 'Description',
    placeholder: 'Type your message here...',
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const WithHelper: Story = { args: { helperText: 'Maximum 500 characters' } };
export const WithError: Story = { args: { error: 'This field is required' } };
export const Disabled: Story = { args: { disabled: true, value: 'Some content' } };
export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  args: { fullWidth: true, label: 'Notes' },
};
