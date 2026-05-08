import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cx } from '../../utils/cx';
import styles from './Pagination.module.css';

export interface PaginationProps {
  /** Current page (1-indexed). */
  page: number;
  /** Total number of pages. */
  totalPages: number;
  /** Callback when a page is selected. */
  onPageChange: (page: number) => void;
  /** Sibling pages to show on each side of the current. */
  siblingCount?: number;
  className?: string;
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const buildPages = (page: number, total: number, siblings: number): (number | 'gap')[] => {
  const totalNumbers = siblings * 2 + 5;
  if (total <= totalNumbers) return range(1, total);

  const leftSibling = Math.max(page - siblings, 2);
  const rightSibling = Math.min(page + siblings, total - 1);

  const showLeftGap = leftSibling > 2;
  const showRightGap = rightSibling < total - 1;

  const pages: (number | 'gap')[] = [1];
  if (showLeftGap) pages.push('gap');
  pages.push(...range(leftSibling, rightSibling));
  if (showRightGap) pages.push('gap');
  pages.push(total);

  return pages;
};

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) => {
  if (totalPages <= 1) return null;
  const pages = buildPages(page, totalPages, siblingCount);

  return (
    <nav aria-label="Pagination" className={cx(styles.nav, className)}>
      <button
        type="button"
        className={cx(styles.button, styles.arrow)}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((p, i) =>
        p === 'gap' ? (
          <span key={`gap-${i}`} className={styles.gap}>
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            className={cx(styles.button, p === page && styles.selected)}
            aria-current={p === page ? 'page' : undefined}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        className={cx(styles.button, styles.arrow)}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};
