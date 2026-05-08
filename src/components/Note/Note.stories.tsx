import type { Meta, StoryObj } from '@storybook/react';
import { Note } from './Note';

const meta: Meta<typeof Note> = {
  title: 'Components/Note',
  component: Note,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=104-278',
    },
  },
  args: {
    tone: 'info',
    title: 'Heads up',
    children: 'Settings have been saved successfully but require a restart to take effect.',
  },
};
export default meta;
type Story = StoryObj<typeof Note>;

export const Info: Story = { args: { tone: 'info' } };
export const Success: Story = { args: { tone: 'success', title: 'Saved' } };
export const Warning: Story = { args: { tone: 'warning', title: 'Check your input' } };
export const Danger: Story = { args: { tone: 'danger', title: 'Something went wrong' } };

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
      <Note tone="info" title="Info">An informational message.</Note>
      <Note tone="success" title="Success">Your changes have been applied.</Note>
      <Note tone="warning" title="Warning">Some warnings to consider.</Note>
      <Note tone="danger" title="Danger">A critical issue has occurred.</Note>
    </div>
  ),
};
