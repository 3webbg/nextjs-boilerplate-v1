import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * @info
 * A function to merge tailwind classes.
 *
 * If you pass text-sm and then proceed to pass text-xl, only text-xl will be added to the classList of the component in the dom.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
