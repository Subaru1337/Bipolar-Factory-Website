export const CAREERS_URL = 'https://bipolarfactory.zohorecruit.in/careers'

export function navHref(label: string): string {
  return label.toLowerCase() === 'careers' ? CAREERS_URL : `/${label.toLowerCase()}`
}

export function isExternalNav(label: string): boolean {
  return label.toLowerCase() === 'careers'
}
