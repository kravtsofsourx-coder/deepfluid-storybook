import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=19-242',
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'brand', 'secondary', 'ghost', 'danger'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Primary: Story = { args: { variant: 'primary' } };
export const Brand: Story = { args: { variant: 'brand' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Danger: Story = { args: { variant: 'danger' } };

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M3.33 8h9.34M8 3.33L12.67 8 8 12.67"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WithStartIcon: Story = {
  args: { iconStart: <ArrowIcon />, children: 'Continue' },
};

export const WithEndIcon: Story = {
  args: { iconEnd: <ArrowIcon />, children: 'Continue' },
};

export const Loading: Story = {
  args: { loading: true, children: 'Saving' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};

/* ---------- Matrix views (good for visual regression) ---------- */

const variants: Array<'primary' | 'brand' | 'secondary' | 'ghost' | 'danger'> = [
  'primary',
  'brand',
  'secondary',
  'ghost',
  'danger',
];
const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {sizes.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="df-caption" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
            Size: {size}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            {variants.map((v) => (
              <Button key={v} variant={v} size={size}>
                {v[0].toUpperCase() + v.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const AllStates: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ padding: 12, textAlign: 'left', color: 'var(--text-secondary)' }}>Variant</th>
          <th style={{ padding: 12, textAlign: 'left' }}>Default</th>
          <th style={{ padding: 12, textAlign: 'left' }}>Loading</th>
          <th style={{ padding: 12, textAlign: 'left' }}>Disabled</th>
        </tr>
      </thead>
      <tbody>
        {variants.map((v) => (
          <tr key={v}>
            <td style={{ padding: 12, color: 'var(--text-secondary)' }}>{v}</td>
            <td style={{ padding: 12 }}>
              <Button variant={v}>Action</Button>
            </td>
            <td style={{ padding: 12 }}>
              <Button variant={v} loading>
                Action
              </Button>
            </td>
            <td style={{ padding: 12 }}>
              <Button variant={v} disabled>
                Action
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
