import { forwardRef, HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Badge.module.css';

export type BadgeVariant = 'warning' | 'information' | 'information-outline';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** Optional numeric count rendered inside (turns badge into a count chip). */
  count?: number;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'information', count, className, ...rest },
  ref,
) {
  const hasCount = typeof count === 'number';
  return (
    <span
      ref={ref}
      className={cx(
        styles.badge,
        styles[`variant-${variant}`],
        hasCount && styles.withCount,
        className,
      )}
      {...rest}
    >
      {hasCount ? (count > 99 ? '99+' : count) : null}
    </span>
  );
});
