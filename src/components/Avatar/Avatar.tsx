import type { ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Avatar.module.css';

export type AvatarSize = 'supersmall' | 'small' | 'default' | 'huge';
export type AvatarColor = 'violet' | 'green' | 'orange' | 'grey' | 'neutral';

export interface AvatarProps {
  size?: AvatarSize;
  color?: AvatarColor;
  /** Initials shown when no image is provided. */
  initials?: string;
  /** Image src — when present, displays an avatar image. */
  src?: string;
  /** Alt text for the image. */
  alt?: string;
  /** Custom node (e.g. an icon) rendered inside. */
  children?: ReactNode;
  className?: string;
}

const formatInitials = (text: string) =>
  text
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p.charAt(0).toUpperCase())
    .join('');

export const Avatar = ({
  size = 'default',
  color = 'violet',
  initials,
  src,
  alt,
  children,
  className,
}: AvatarProps) => {
  const cls = cx(styles.avatar, styles[`size-${size}`], styles[`color-${color}`], className);
  if (src) {
    return <img className={cls} src={src} alt={alt ?? ''} />;
  }
  return (
    <span className={cls} role="img" aria-label={alt ?? initials ?? 'avatar'}>
      {children ?? (initials ? formatInitials(initials) : null)}
    </span>
  );
};
