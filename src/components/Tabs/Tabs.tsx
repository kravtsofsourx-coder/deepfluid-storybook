import { useState } from 'react';
import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Tabs.module.css';

export interface TabItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export type TabSize = 'md' | 'lg';

export interface TabsProps {
  items: TabItem[];
  /** Active tab id (controlled). */
  value?: string;
  /** Default active tab id (uncontrolled). */
  defaultValue?: string;
  /** Selection callback. */
  onChange?: (id: string) => void;
  size?: TabSize;
  className?: string;
}

export const Tabs = ({
  items,
  value,
  defaultValue,
  onChange,
  size = 'md',
  className,
}: TabsProps) => {
  const [internal, setInternal] = useState<string>(defaultValue ?? items[0]?.id ?? '');
  const active = value ?? internal;

  const select = (id: string) => {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  };

  return (
    <div role="tablist" className={cx(styles.tabs, styles[`size-${size}`], className)}>
      {items.map((item) => {
        const selected = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-disabled={item.disabled || undefined}
            disabled={item.disabled}
            tabIndex={selected ? 0 : -1}
            className={cx(styles.tab, selected && styles.selected)}
            onClick={() => !item.disabled && select(item.id)}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
