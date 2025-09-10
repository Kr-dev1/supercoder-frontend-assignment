import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for conflict resolution
 *
 * @param classes - Array of class strings, undefined, or boolean values
 * @returns Merged class string with conflicts resolved
 *
 * @example
 * classNameMerge(['bg-red-500', 'bg-blue-500']) // 'bg-blue-500' (last one wins)
 * classNameMerge(['px-4', condition && 'px-6']) // 'px-6' if condition is true
 */
export default function classNameMerge(
  classes: (string | undefined | false | null)[]
): string {
  return twMerge(clsx(classes));
}
