/**
 * Compose className strings — accepts strings, falsy values, or arrays.
 * Equivalent to a tiny `clsx`.
 */
export type ClassValue = string | number | null | false | undefined | ClassValue[];

export function cx(...args: ClassValue[]): string {
  const out: string[] = [];
  for (const arg of args) {
    if (!arg) continue;
    if (Array.isArray(arg)) {
      const inner = cx(...arg);
      if (inner) out.push(inner);
    } else {
      out.push(String(arg));
    }
  }
  return out.join(' ');
}
