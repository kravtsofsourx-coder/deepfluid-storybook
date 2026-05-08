import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Eye, EyeOff } from 'lucide-react';
import { TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=16-22',
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
  },
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithIcon: Story = {
  args: { leadingIcon: <Mail /> },
};

export const Filled: Story = {
  args: { defaultValue: 'hello@deepfluid.com' },
};

export const ErrorState: Story = {
  args: {
    errorText: 'Please enter a valid email address',
    defaultValue: 'not an email',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    trailingIcon: <Eye />,
    helperText: 'Must be at least 8 characters',
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Cannot edit' },
};

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 320 }}>
      <TextField label="Default" placeholder="Type here..." />
      <TextField label="Filled" defaultValue="hello@deepfluid.com" />
      <TextField label="With helper" placeholder="username" helperText="Letters, numbers, no spaces." />
      <TextField label="With error" defaultValue="bad input" errorText="This value is invalid" />
      <TextField label="Disabled" defaultValue="locked" disabled trailingIcon={<EyeOff />} />
    </div>
  ),
};
