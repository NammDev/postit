import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))
