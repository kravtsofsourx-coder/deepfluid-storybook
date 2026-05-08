import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterChip } from './FilterChip';

const meta: Meta<typeof FilterChip> = {
  title: 'Components/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=40-86',
    },
  },
  args: { children: 'Active', mode: 'selectable' },
};
export default meta;

type Story = StoryObj<typeof FilterChip>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Readonly: Story = { args: { mode: 'readonly', children: 'Read only' } };
export const Disabled: Story = { args: { disabled: true } };
export const Removable: Story = {
  args: { selected: true, children: 'Status: Active', onRemove: () => alert('removed') },
};

export const ChipGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set(['active']));
    const toggle = (id: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    };
    const filters = [
      { id: 'active', label: 'Active' },
      { id: 'pending', label: 'Pending' },
      { id: 'archived', label: 'Archived' },
      { id: 'errored', label: 'Errored' },
    ];
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <FilterChip
            key={f.id}
            selected={selected.has(f.id)}
            onClick={() => toggle(f.id)}
          >
            {f.label}
          </FilterChip>
        ))}
      </div>
    );
  },
};
