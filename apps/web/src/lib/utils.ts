import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx support
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date to a readable string
 */
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Truncate a string to a given length
 */
export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.slice(0, length)}...` : str
}

/**
 * Generate a random ID (for client-side use only)
 */
export function generateId(): string {
  return Math.random().toString(36).slice(2, 11)
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

/**
 * ATS score color helper
 */
export function getAtsScoreColor(score: number): string {
  if (score >= 70) return 'text-green-400'
  if (score >= 40) return 'text-yellow-400'
  return 'text-red-400'
}
