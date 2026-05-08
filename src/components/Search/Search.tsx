import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { cx } from '../../utils/cx';
import styles from './Search.module.css';

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  fullWidth?: boolean;
  /** Optional click handler for clear button (only shown when value is non-empty). */
  onClear?: () => void;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  { fullWidth = false, onClear, value, className, id, ...rest },
  ref,
) {
  const generated = useId();
  const inputId = id ?? generated;
  const hasValue = typeof value === 'string' ? value.length > 0 : false;

  return (
    <div className={cx(styles.wrapper, fullWidth && styles.fullWidth, className)}>
      <SearchIcon className={styles.leading} size={16} />
      <input
        ref={ref}
        id={inputId}
        type="search"
        value={value}
        placeholder="Search..."
        className={styles.input}
        {...rest}
      />
      {hasValue && onClear ? (
        <button type="button" className={styles.clear} onClick={onClear} aria-label="Clear search">
          <X size={14} />
        </button>
      ) : null}
    </div>
  );
});
