import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'brand' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Visual style. Maps directly to Figma `variant` prop. */
  variant?: ButtonVariant;
  /** Size. Maps directly to Figma `size` prop. */
  size?: ButtonSize;
  /** Icon shown before the label. */
  iconStart?: ReactNode;
  /** Icon shown after the label. */
  iconEnd?: ReactNode;
  /** Render in a loading state — disables click and shows a spinner. */
  loading?: boolean;
  /** Fill the parent container width. */
  fullWidth?: boolean;
  /** Button label. */
  children?: ReactNode;
}

const Spinner = ({ size }: { size: ButtonSize }) => {
  const dim = size === 'sm' ? 12 : size === 'md' ? 14 : 16;
  return (
    <svg
      className={styles.spinner}
      width={dim}
      height={dim}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path
        d="M12 2a10 10 0 0110 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    iconStart,
    iconEnd,
    loading = false,
    fullWidth = false,
    disabled,
    className,
    children,
    type = 'button',
    ...rest
  },
  ref,
) {
  const cls = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      type={type}
      className={cls}
      disabled={disabled || loading}
      data-loading={loading || undefined}
      {...rest}
    >
      {loading && <Spinner size={size} />}
      {!loading && iconStart && <span className={styles.icon}>{iconStart}</span>}
      {children && <span className={styles.label}>{children}</span>}
      {!loading && iconEnd && <span className={styles.icon}>{iconEnd}</span>}
    </button>
  );
});
