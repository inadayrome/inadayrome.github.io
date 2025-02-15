import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GITHUB_URL = 'https://github.com/inadayrome/inadayrome.github.io';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/wenjunlee1994';
