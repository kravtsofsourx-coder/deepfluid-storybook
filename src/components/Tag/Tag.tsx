import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Tag.module.css';

export type TagColor = 'green' | 'violet' | 'red' | 'orange' | 'grey';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  color?: TagColor;
  children: ReactNode;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { color = 'grey', className, children, ...rest },
  ref,
) {
  return (
    <span ref={ref} className={cx(styles.tag, styles[`color-${color}`], className)} {...rest}>
      {children}
    </span>
  );
});
