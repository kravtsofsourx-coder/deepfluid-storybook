import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { cx } from '../../utils/cx';
import styles from './TextField.module.css';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  /** When set, marks the field as errored and replaces helperText. */
  errorText?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  /** Renders the field at full width of its container. */
  fullWidth?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  {
    label,
    helperText,
    errorText,
    leadingIcon,
    trailingIcon,
    fullWidth = false,
    disabled,
    className,
    id,
    ...rest
  },
  ref,
) {
  const generated = useId();
  const inputId = id ?? generated;
  const isError = !!errorText;
  const helpId = helperText || errorText ? `${inputId}-help` : undefined;

  return (
    <div className={cx(styles.field, fullWidth && styles.fullWidth, className)}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}
      <div
        className={cx(
          styles.inputWrapper,
          isError && styles.error,
          disabled && styles.disabled,
        )}
      >
        {leadingIcon ? <span className={styles.icon}>{leadingIcon}</span> : null}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={isError || undefined}
          aria-describedby={helpId}
          className={styles.input}
          {...rest}
        />
        {trailingIcon ? <span className={styles.icon}>{trailingIcon}</span> : null}
      </div>
      {(helperText || errorText) && (
        <span id={helpId} className={cx(styles.helper, isError && styles.helperError)}>
          {errorText || helperText}
        </span>
      )}
    </div>
  );
});
