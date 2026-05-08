import { forwardRef, InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, disabled, className, id, ...rest },
  ref,
) {
  const inputId = id ?? `radio-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <label
      htmlFor={inputId}
      className={cx(styles.wrapper, disabled && styles.disabled, className)}
    >
      <input
        ref={ref}
        type="radio"
        id={inputId}
        disabled={disabled}
        className={styles.input}
        {...rest}
      />
      <span className={styles.circle}>
        <span className={styles.dot} />
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
});
