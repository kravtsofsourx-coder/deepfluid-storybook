import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS?node-id=70-181',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

const Demo = ({ total }: { total: number }) => {
  const [page, setPage] = useState(1);
  return <Pagination page={page} totalPages={total} onPageChange={setPage} />;
};

export const FewPages: Story = {
  render: () => <Demo total={5} />,
};

export const ManyPages: Story = {
  render: () => <Demo total={20} />,
};

export const Edges: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Pagination page={1} totalPages={20} onPageChange={() => {}} />
      <Pagination page={10} totalPages={20} onPageChange={() => {}} />
      <Pagination page={20} totalPages={20} onPageChange={() => {}} />
    </div>
  ),
};
