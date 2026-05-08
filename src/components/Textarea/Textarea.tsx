import { forwardRef, useId } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Textarea.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, helperText, error, fullWidth, className, id, disabled, rows = 4, ...rest },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;
  const messageId = `${inputId}-msg`;
  const message = error ?? helperText;
  return (
    <div className={cx(styles.field, fullWidth && styles.fullWidth, className)}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        disabled={disabled}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={message ? messageId : undefined}
        className={cx(styles.textarea, error && styles.errored, disabled && styles.disabled)}
        {...rest}
      />
      {message && (
        <span
          id={messageId}
          className={cx(styles.helper, error && styles.errorText)}
        >
          {message}
        </span>
      )}
    </div>
  );
});
