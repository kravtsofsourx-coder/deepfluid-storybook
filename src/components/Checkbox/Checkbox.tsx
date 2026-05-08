import { forwardRef, InputHTMLAttributes } from 'react';
import { Check, Minus } from 'lucide-react';
import { cx } from '../../utils/cx';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  /** Indeterminate visual state — useful for "select all" controls. */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, indeterminate, disabled, className, id, ...rest },
  ref,
) {
  const inputId = id ?? `cb-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <label
      htmlFor={inputId}
      className={cx(styles.wrapper, disabled && styles.disabled, className)}
    >
      <input
        ref={ref}
        type="checkbox"
        id={inputId}
        disabled={disabled}
        className={styles.input}
        aria-checked={indeterminate ? 'mixed' : undefined}
        {...rest}
      />
      <span className={cx(styles.box, indeterminate && styles.indeterminate)}>
        {indeterminate ? (
          <Minus className={styles.icon} strokeWidth={3} />
        ) : (
          <Check className={styles.icon} strokeWidth={3} />
        )}
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
});
