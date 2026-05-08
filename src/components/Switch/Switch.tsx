import { forwardRef, InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Optional label rendered after the toggle. */
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, disabled, className, id, ...rest },
  ref,
) {
  const inputId = id ?? `switch-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <label
      htmlFor={inputId}
      className={cx(styles.wrapper, disabled && styles.disabled, className)}
    >
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        id={inputId}
        disabled={disabled}
        className={styles.input}
        {...rest}
      />
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
});
