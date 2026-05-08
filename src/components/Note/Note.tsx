import type { ReactNode } from 'react';
import { Info, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react';
import { cx } from '../../utils/cx';
import styles from './Note.module.css';

export type NoteTone = 'info' | 'success' | 'warning' | 'danger';

export interface NoteProps {
  tone?: NoteTone;
  title?: string;
  children?: ReactNode;
  className?: string;
}

const ICONS: Record<NoteTone, ReactNode> = {
  info: <Info size={20} />,
  success: <CheckCircle2 size={20} />,
  warning: <AlertTriangle size={20} />,
  danger: <AlertCircle size={20} />,
};

export const Note = ({ tone = 'info', title, children, className }: NoteProps) => (
  <div className={cx(styles.note, styles[`tone-${tone}`], className)} role="status">
    <span className={styles.icon} aria-hidden="true">
      {ICONS[tone]}
    </span>
    <div className={styles.content}>
      {title && <div className={styles.title}>{title}</div>}
      {children && <div className={styles.body}>{children}</div>}
    </div>
  </div>
);
