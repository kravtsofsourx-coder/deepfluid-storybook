import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './InputChip.module.css';

export interface InputChipProps {
  children: ReactNode;
  /** Optional leading icon or avatar. */
  leading?: ReactNode;
  /** Remove handler — when omitted, no remove button is shown. */
  onRemove?: () => void;
  disabled?: boolean;
  className?: string;
}

export const InputChip = ({
  children,
  leading,
  onRemove,
  disabled = false,
  className,
}: InputChipProps) => (
  <span
    className={cx(
      styles.chip,
      disabled && styles.disabled,
      className,
    )}
    aria-disabled={disabled || undefined}
  >
    {leading && <span className={styles.leading}>{leading}</span>}
    <span className={styles.label}>{children}</span>
    {onRemove && (
      <button
        type="button"
        className={styles.remove}
        aria-label="Remove"
        onClick={onRemove}
        disabled={disabled}
      >
        <X size={12} aria-hidden="true" />
      </button>
    )}
  </span>
);
