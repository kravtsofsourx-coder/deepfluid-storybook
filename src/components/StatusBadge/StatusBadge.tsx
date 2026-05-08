import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './StatusBadge.module.css';

export type StatusBadgeStatus = 'success' | 'brand' | 'alert' | 'warning' | 'neutral';
export type StatusBadgeVisibility = 'accent' | 'default';

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Semantic status. */
  status?: StatusBadgeStatus;
  /** `accent` = filled background, `default` = subtle / outlined. */
  visibility?: StatusBadgeVisibility;
  /** Optional leading dot indicator. */
  dot?: boolean;
  children: ReactNode;
}

export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(function StatusBadge(
  { status = 'neutral', visibility = 'accent', dot = false, className, children, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cx(
        styles.badge,
        styles[`status-${status}`],
        styles[`visibility-${visibility}`],
        className,
      )}
      {...rest}
    >
      {dot ? <span className={styles.dot} /> : null}
      {children}
    </span>
  );
});
