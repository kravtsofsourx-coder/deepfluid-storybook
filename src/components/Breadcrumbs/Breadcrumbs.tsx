import { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Replaces the visual separator. Defaults to a chevron. */
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumbs = ({ items, separator, className }: BreadcrumbsProps) => {
  const sep = separator ?? <ChevronRight size={14} aria-hidden="true" />;
  return (
    <nav aria-label="Breadcrumb" className={[styles.nav, className].filter(Boolean).join(' ')}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={`${item.label}-${i}`}>
              <li className={styles.item}>
                {isLast || (!item.href && !item.onClick) ? (
                  <span aria-current={isLast ? 'page' : undefined} className={styles.current}>
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href ?? '#'}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    className={styles.link}
                  >
                    {item.label}
                  </a>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className={styles.separator}>
                  {sep}
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
