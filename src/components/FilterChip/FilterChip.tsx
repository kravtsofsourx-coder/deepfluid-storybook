import { Check, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './FilterChip.module.css';

export type FilterChipMode = 'selectable' | 'readonly';

export interface FilterChipProps {
  children: ReactNode;
  /** Selected state. */
  selected?: boolean;
  /** Selectable (default) responds to clicks; readonly is a static label. */
  mode?: FilterChipMode;
  /** Disabled state. */
  disabled?: boolean;
  /** Show a leading checkmark when selected. */
  showCheck?: boolean;
  /** Show a trailing remove button. */
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}

export const FilterChip = ({
  children,
  selected = false,
  mode = 'selectable',
  disabled = false,
  showCheck = true,
  onRemove,
  onClick,
  className,
}: FilterChipProps) => {
  const interactive = mode === 'selectable' && !disabled;
  return (
    <span
      className={cx(
        styles.chip,
        selected && styles.selected,
        disabled && styles.disabled,
        mode === 'readonly' && styles.readonly,
        className,
      )}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-pressed={interactive ? selected : undefined}
      aria-disabled={disabled || undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={(e) => {
        if (!interactive) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {selected && showCheck && <Check size={12} className={styles.icon} aria-hidden="true" />}
      <span className={styles.label}>{children}</span>
      {onRemove && (
        <button
          type="button"
          className={styles.remove}
          aria-label="Remove filter"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          <X size={12} aria-hidden="true" />
        </button>
      )}
    </span>
  );
};
